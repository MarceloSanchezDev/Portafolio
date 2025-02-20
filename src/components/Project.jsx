import { useState } from "react";

export function Project({ titulo, img, descript, url, tec }) {
  const [imgActual, setImgActual] = useState(img[0]);
  const [aparecer, setAparecer] = useState(true);
  const change = () => {
    setAparecer(false);

    setTimeout(() => {
      setImgActual((prev) => {
        const index = img.indexOf(prev);
        const nextIndex = (index + 1) % img.length;
        return img[nextIndex];
      });

      setAparecer(true);
    }, 300);
  };
  return (
    <div className="projecto elementIzq">
      <div className="tituloProjecto">
        <h1>{titulo}</h1>
        <a className="botonProjecto" href={url}>
          Ver projecto
        </a>
      </div>
      <div className={`imagenProjecto ${aparecer ? "aparecer" : ""}`}>
        <img onClick={change} src={imgActual} alt="Imagen Projecto" />
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
