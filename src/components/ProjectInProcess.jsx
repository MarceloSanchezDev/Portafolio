export default function ProjectInProcess() {
  return (
    <>
      <div className="card my-2 col-lg-5 col-12 text-white border-light mb-4 ">
        <h1 className="d-flex justify-content-center align-items-center mt-2">
          en Proceso....
        </h1>
        <div className="blurred">
          <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center">
            <h1 className="card-title fs-3 text-start">Titulo</h1>
            <a className="btn btn-primary d-inline-block" href={"#"}>
              Ver projecto 🔗
            </a>
          </div>
          <div className="border border-dark">
            <div id={"1234"} className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={"img[0]"} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={"img[0]"} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={"img[0]"} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${1234}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark rounded"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next "
                type="button"
                data-bs-target={`#${1234}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark rounded"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="card-body">
            <h2>Decripcion de la Aplicacion</h2>
            <p className="card-text">{"descript"}</p>
            <div>
              <div
                className="collapse collapse-horizontal"
                id="collapseWidthExample"
              >
                <div className="card card-body">
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="fs-4">Tecnologias</h2>
            <ol className="list-group list-group-numbered">
              {["REACT", "BOOTSTRAP", "NODE.JS"].map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-start"
                  key={index}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.nombre}</div>
                    {item.uso}
                  </div>
                  <span className="badge">✅</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
