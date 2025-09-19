/*
import { useState } from "react";
export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/index.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("El mensaje se ha enviado correctamente.");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo enviar el mensaje. Inténtalo más tarde.");
    }
  };
  return (
    <div
      id="contacto"
      className="contacto container-fluid d-flex flex-column justify-content-around align-items-center"
    >
      <h2 className="text-center fs-1">📧 Contacto</h2>
      <div className="row w-100 d-flex justify-content-around align-items-center">
        <form
          className="container border rounded-3 border-info bg-dark text-white p-3 col-md-6 col-12"
          onSubmit={handleSubmit}
        >
          <div className="my-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              className="form-control"
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Escribe tu e-mail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje:
            </label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Escribe un Mensaje"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mb-3">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

*/

import { useMemo, useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    empresa: "", // honeypot (debe quedar vacío)
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAX_LEN = 1000;
  const MIN_LEN = 20;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    if (status.type) setStatus({ type: null, message: "" }); // limpiar mensajes al editar
  };

  // Validaciones simples
  const errors = useMemo(() => {
    const errs = {};
    const nameOK = /^[A-Za-zÀ-ÿ'´.\-\s]{2,}$/.test(formData.nombre.trim());
    if (!nameOK) errs.nombre = "Ingresá tu nombre (mínimo 2 letras).";

    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim());
    if (!emailOK) errs.email = "Ingresá un e-mail válido.";

    const len = formData.mensaje.trim().length;
    if (len < MIN_LEN)
      errs.mensaje = `Contame un poco más (mínimo ${MIN_LEN} caracteres).`;
    if (len > MAX_LEN) errs.mensaje = `Máximo ${MAX_LEN} caracteres.`;

    return errs;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: si está completo, fin (tratamos como éxito silencioso)
    if (formData.empresa) {
      setStatus({
        type: "success",
        message: "¡Gracias! Te responderé en menos de 24 h.",
      });
      setFormData({ nombre: "", email: "", mensaje: "", empresa: "" });
      return;
    }

    if (!isValid) {
      setStatus({
        type: "error",
        message: "Revisá los campos marcados en rojo.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          email: formData.email.trim(),
          mensaje: formData.mensaje.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(data?.error || "Error al enviar el mensaje.");

      setStatus({
        type: "success",
        message:
          "¡Gracias! Tu mensaje fue enviado. Te respondo en menos de 24 h.",
      });
      setFormData({ nombre: "", email: "", mensaje: "", empresa: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: (
          <>
            No se pudo enviar. Probá de nuevo o escribime a{" "}
            <a className="link-light" href="mailto:tuemail@dominio.com">
              tuemail@dominio.com
            </a>
            .
          </>
        ),
      });
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="contacto container-fluid d-flex flex-column justify-content-around align-items-center py-5"
      aria-labelledby="contacto-title"
    >
      <h2 id="contacto-title" className="text-center fs-1">
        📧 Contacto
      </h2>

      <div className="row w-100 d-flex justify-content-around align-items-center">
        <form
          className="container border rounded-3 border-info bg-dark text-white p-3 col-md-6 col-12"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Estado (éxito/error) accesible */}
          <div
            className={`mb-3 ${
              status.type === "error"
                ? "text-danger"
                : status.type === "success"
                ? "text-success"
                : "text-muted"
            }`}
            aria-live="polite"
            role={status.type ? "status" : undefined}
          >
            {status.message ||
              "Completá el formulario y te responderé a la brevedad."}
          </div>

          {/* Honeypot (oculto para humanos) */}
          <div
            style={{ position: "absolute", left: "-10000px" }}
            aria-hidden="true"
          >
            <label htmlFor="empresa">Empresa</label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              tabIndex="-1"
              autoComplete="off"
              value={formData.empresa}
              onChange={handleChange}
            />
          </div>

          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Escribí tu nombre"
              aria-invalid={!!errors.nombre}
              aria-describedby="nombreHelp nombreError"
              maxLength={80}
            />
            <div id="nombreHelp" className="form-text text-muted">
              Ej: Juan Pérez
            </div>
            {errors.nombre && (
              <div id="nombreError" className="invalid-feedback d-block">
                {errors.nombre}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="tucorreo@dominio.com"
              aria-invalid={!!errors.email}
              aria-describedby="emailError"
              maxLength={120}
            />
            {errors.email && (
              <div id="emailError" className="invalid-feedback d-block">
                {errors.email}
              </div>
            )}
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Contame brevemente tu necesidad (3–5 líneas)…"
              aria-invalid={!!errors.mensaje}
              aria-describedby="mensajeCounter mensajeError"
              maxLength={MAX_LEN}
            />
            <div
              id="mensajeCounter"
              className="form-text text-muted"
              aria-live="polite"
            >
              {formData.mensaje.length}/{MAX_LEN}
            </div>
            {errors.mensaje && (
              <div id="mensajeError" className="invalid-feedback d-block">
                {errors.mensaje}
              </div>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={isSubmitting || !isValid}
            aria-disabled={isSubmitting || !isValid}
          >
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
