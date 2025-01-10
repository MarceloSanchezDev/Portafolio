import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('El mensaje se ha enviado correctamente.');
            setFormData({ nombre: '', email: '', mensaje: '' });
        } else {
            alert('Hubo un error al enviar el mensaje.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo enviar el mensaje. Inténtalo más tarde.');
    }
};
  return (
    <div className="seccion">
        <div className="projectos">
            <h2 className="tituloSeconSeccion">Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
);                
}