import nodemailer from "nodemailer";
/*
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, mensaje } = req.body; // Cambiamos los nombres

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Recibirás los correos en el mismo email
    subject: `Nuevo mensaje de ${nombre}`,
    text: `De: ${nombre} (${email})\n\nMensaje:\n${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Correo enviado" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}*/

const {
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_TO = process.env.EMAIL_USER, // por defecto te lo mandás a vos
  ALLOWED_ORIGIN = "https://www.marcelosanchezdev.com.ar", // cambialo si hace falta
} = process.env;

const MAX_MESSAGE_LEN = 2000;
const MIN_MESSAGE_LEN = 20;

// Rate limit naive en memoria (puede no persistir en serverless, pero ayuda)
const hits = new Map();
const WINDOW_MS = 60_000; // 1 min
const MAX_HITS = 5;

function rateLimit(ip) {
  const now = Date.now();
  const rec = hits.get(ip) || { count: 0, start: now };
  if (now - rec.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  rec.count += 1;
  hits.set(ip, rec);
  return rec.count > MAX_HITS;
}

function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
}

export default async function handler(req, res) {
  // Método
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }

  // Origin simple (si no tenés CORS, esto alcanza para bloquear externos básicos)
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGIN && origin && origin !== ALLOWED_ORIGIN) {
    return res.status(403).json({ ok: false, error: "Origen no permitido" });
  }

  // Rate limit por IP
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "0.0.0.0";
  if (rateLimit(ip)) {
    return res
      .status(429)
      .json({
        ok: false,
        error: "Demasiadas solicitudes, probá en un minuto.",
      });
  }

  // Body + honeypot
  const {
    nombre = "",
    email = "",
    mensaje = "",
    empresa = "",
  } = req.body || {};
  if (empresa) {
    // Honeypot lleno → tratamos como éxito silencioso
    return res.status(200).json({ ok: true, message: "Recibido." });
  }

  // Validaciones
  const cleanName = String(nombre).trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanMsg = String(mensaje).trim();

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({ ok: false, error: "Nombre inválido." });
  }
  if (!isValidEmail(cleanEmail)) {
    return res.status(400).json({ ok: false, error: "Email inválido." });
  }
  if (cleanMsg.length < MIN_MESSAGE_LEN) {
    return res
      .status(400)
      .json({
        ok: false,
        error: `El mensaje debe tener al menos ${MIN_MESSAGE_LEN} caracteres.`,
      });
  }
  if (cleanMsg.length > MAX_MESSAGE_LEN) {
    return res
      .status(400)
      .json({
        ok: false,
        error: `Máximo ${MAX_MESSAGE_LEN} caracteres de mensaje.`,
      });
  }

  // Credenciales
  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    return res
      .status(500)
      .json({
        ok: false,
        error: "Faltan credenciales del servidor de correo.",
      });
  }

  // Transporter (Gmail SMTP con TLS directo 465 + App Password)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // 465 = TLS
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });

  // Contenido del correo
  const subject = `Nuevo mensaje — ${cleanName}`;
  const text = [
    `De: ${cleanName} <${cleanEmail}>`,
    `IP: ${ip}`,
    `Origen: ${origin || "N/D"}`,
    "",
    "Mensaje:",
    cleanMsg,
  ].join("\n");

  // HTML minimal (opcional)
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;">
      <p><strong>De:</strong> ${escapeHtml(cleanName)} &lt;${escapeHtml(
    cleanEmail
  )}&gt;</p>
      <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
      <p><strong>Origen:</strong> ${escapeHtml(origin || "N/D")}</p>
      <hr />
      <p style="white-space:pre-wrap;">${escapeHtml(cleanMsg)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: EMAIL_USER, // muchos SMTP requieren From = usuario autenticado
      to: EMAIL_TO, // te llega a tu casilla
      replyTo: `${cleanName} <${cleanEmail}>`, // así respondés directo al remitente
      subject,
      text,
      html,
      headers: { "X-Portfolio-From": "marcelosanchezdev.com.ar" },
    });

    return res.status(200).json({ ok: true, message: "Correo enviado." });
  } catch (err) {
    console.error("Mailer error:", err);
    // No expongas err.message al cliente en producción
    return res
      .status(500)
      .json({ ok: false, error: "No se pudo enviar el correo." });
  }
}

// Sencillo escape para el HTML del email
function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
