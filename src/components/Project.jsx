import appPeliculas from "../assets/appPeliculas.png";

export function Project({ titulo, img, descript, url, tec }) {
  return (
    <div className="projecto elementIzq">
      <div className="tituloProjecto">
        <h1>{titulo}</h1>
        <a className="botonProjecto" href={url}>
          Ver projecto
        </a>
      </div>
      <div className="imagenProjecto">
        <img src={img} alt="Imagen Projecto" />
      </div>
      <div className="Info">
        <div className="caract">
          <h2>Informacion del Projecto</h2>
          <p>{descript}</p>
        </div>
        <div className="tec">
          <h2>Tecnologias</h2>

          <ul className="lista">
            {tec.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
