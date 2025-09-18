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
