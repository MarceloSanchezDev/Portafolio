import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, mensaje } = req.body; // Cambiamos los nombres

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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
}