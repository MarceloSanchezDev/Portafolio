import foto from "../assets/fotoCV.jpg";

export function Presentation() {
  return (
    <div className="container-fluid presentacion">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row d-flex flex-sm-column flex-lg-row">
          <div className=" col-sm-12 col-lg-6 d-flex align-items-center justify-content-center ">
            <img
              className="img-fluid rounded-circle border border-dark elementDer visibleDer shadow-lg"
              src={foto}
              alt="Foto de perfil"
            />
          </div>
          <div className="col-lg-6 col-sm-12 text-center elementIzq visibleIzq ">
            <h1 className="titulo-presentacion fs-1">Marcelo Sánchez</h1>
            <h2 className="fs-4 fst-italic">🛠️ Desarrollador Full-Stack</h2>
            <p className="fs-6">
              Como desarrollador <b>Full-Stack</b>, tengo la capacidad de crear
              aplicaciones web completas, combinando
              <b> interfaces modernas y atractivas</b> con
              <b> sistemas backend robustos y escalables</b>. Mi enfoque
              integral garantiza soluciones
              <b> eficientes, optimizadas y preparadas para el crecimiento</b>.
              Me especializo en desarrollar plataformas que no solo cumplen con
              los requisitos técnicos, sino que también ofrecen una
              <b> gran experiencia de usuario</b> y un <b>rendimiento óptimo</b>
              . Ya sea construyendo desde cero o mejorando sistemas existentes,
              mi objetivo es aportar <b> innovación y valor</b> a cada proyecto.
            </p>
            <p className="fs-4 text-muted fw-bold fst-italic">
              🚀 ¿Listo para llevar tu idea al siguiente nivel? ¡Hablemos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
