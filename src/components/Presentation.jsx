import foto from "../assets/FotoCV1.svg";

export function Presentation() {
  return (
    <div className="seccion precentacion">
      <div className="contenedor">
        <div className="contenedorFoto elementIzq">
          <img className="fotoCV" src={foto} alt="Foto de perfil" />
        </div>
        <div className="contenedorPresentacion ">
          <h1 className="titulo ">Marcelo Sánchez</h1>
          <h2 className="subTitutlo elementDer">🛠️ Desarrollador Full-Stack</h2>
          <p className="parrafoPresentacion elementDer">
            Como desarrollador <b>Full-Stack</b>, tengo la capacidad de crear
            aplicaciones web completas, combinando
            <b> interfaces modernas y atractivas</b> con
            <b> sistemas backend robustos y escalables</b>. Mi enfoque integral
            garantiza soluciones
            <b> eficientes, optimizadas y preparadas para el crecimiento</b>. Me
            especializo en desarrollar plataformas que no solo cumplen con los
            requisitos técnicos, sino que también ofrecen una
            <b> gran experiencia de usuario</b> y un <b>rendimiento óptimo</b>.
            Ya sea construyendo desde cero o mejorando sistemas existentes, mi
            objetivo es aportar <b> innovación y valor</b> a cada proyecto.
          </p>
          <p className="parrafoH elementIzq">
            <b>
              <i>
                🚀 ¿Listo para llevar tu idea al siguiente nivel? ¡Hablemos!
              </i>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
