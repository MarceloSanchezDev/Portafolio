import sobreMi from "../assets/sobremi.jpg";
export function Footer() {
  return (
    <footer className="footer">
      <h1 className="fs-1 text-center text-white p-4">🚀sobre mi: </h1>
      <div className="container-fluid text-white d-flex flex-column flex-sm-row justify-content-around align-items-center pt-2">
        <div className="container">
          <div className="d-flex flex-column justify-content-around align-items-center">
            <div className="container d-flex flex-column justify-content-around align-items-center">
              <p className="text-start">
                Soy Full Stack Developer en Argentina. Diseño y desarrollo
                soluciones web priorizando claridad, seguridad y rendimiento. En
                el frontend trabajo con React, y en el backend con
                Node.js/Express, eligiendo MySQL o Firestore según el caso de
                uso. Me enfoco en crear experiencias simples que resuelvan
                problemas concretos y generen valor medible: interfaces que
                cargan rápido, flujos claros y datos confiables. Itero con demos
                frecuentes, documentación breve y despliegues continuos. Busco
                un entorno donde seguir aprendiendo y aportar impacto desde el
                MVP hasta la evolución del producto.
              </p>
              <h2 className="fs-2 text-center ">Habilidades</h2>
              <div className="mt-3 d-flex flex-column flex-md-row gap-5 align-items-start justify-content-around">
                <div>
                  <p className="text-start">
                    ✅ <b className="">Técnicas: </b>
                  </p>
                  <ul>
                    <li>React</li>
                    <li>Node.js/Express</li>
                    <li>MySQL</li>
                    <li>Firebase (Auth/Firestore/Functions)</li>
                    <li>JWT</li>
                    <li>Zod</li>
                    <li>Bootstrap</li>
                    <li>Vercel/Render</li>
                    <li>Jest (básico)</li>
                  </ul>
                </div>
                <div>
                  <p className=" text-start">
                    ✅ <b>Blandas: </b>
                  </p>
                  <ul>
                    <li> Trabajo en equipo</li>
                    <li>resolución de problemas</li>
                    <li>adaptación al cambio</li>
                    <li>comunicación efectiva</li>
                  </ul>
                </div>
              </div>

              <h2>Cómo trabajo</h2>
              <ul>
                <li>
                  <strong>Comunicación</strong>: objetivos claros, demos cortas
                  y feedback rápido.
                </li>
                <li>
                  <strong>Calidad</strong>: validaciones server-side, control de
                  errores y logs útiles.
                </li>
                <li>
                  <strong>Entrega</strong>: MVP temprano, medición y mejoras por
                  iteraciones.
                </li>
              </ul>
              <p className=" ">
                Pero no todo es código en mi vida. También soy un apasionado del
                <b> básquet </b>, un deporte que me ha enseñado la importancia
                del
                <b> trabajo en equipo</b>,<b> la disciplina</b> y{" "}
                <b> la toma de decisiones bajo presión</b>. Estos valores los
                aplico en cada proyecto, buscando siempre mejorar y superar
                nuevos desafíos.
              </p>
              <p className="">
                Siempre estoy en constante aprendizaje, explorando nuevas
                tecnologías y mejorando mis habilidades. Mi objetivo es crecer
                como profesional y aportar soluciones innovadoras en el mundo
                IT. Si tienes un proyecto interesante o simplemente quieres
                charlar sobre tecnología, ¡hablemos! 🚀
              </p>
            </div>
          </div>
        </div>
        <img className=" img-fluid my-2 rounded-3" alt="" src={sobreMi} />
      </div>
      <div className=" d-flex align-items-center justify-content-center text-white">
        <p className="text-center">
          © 2025 Marcelo Sanchez Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
