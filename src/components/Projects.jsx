import { Project } from "./Project";
import appPeliculas from "../assets/appPeliculas.png";
export function Projects() {
  return (
    <div>
      <div className="projectos">
        <h1 className="tituloSeconSeccion ">🌐 Projectos</h1>
        <Project
          titulo="App Web  de Peliculas 🍿🎬 "
          img={appPeliculas}
          descript="Página de Películas Una aplicación web para explorar, buscar y gestionar películas favoritas. Utiliza la API de TMDb para obtener datos de películas y cuenta con un sistema de autenticación desarrollado en Node.js. Frontend creado con React y estilizado con Bootstrap."
          url="https://peliculas-murex.vercel.app/"
          tec={["React.js", "Node.js", "Bootstrap"]}
        ></Project>
        <Project
          titulo="App Web de Estadisticas 📊📈"
          img={appPeliculas}
          descript="Aplicación web para visualizar estadísticas de baloncesto, enfocada en tiros de dos y tres puntos. Permite ver el rendimiento de los jugadores, con detalles sobre aciertos y fallos. La estructura del proyecto está dividida en workspaces para el backend y frontend.
Utiliza React en el frontend y Node.js con Express en el backend. Implementa autenticación con JWT y protección de contraseñas con Bcrypt. Usa MySQL para gestionar los datos y Zod para validación."
          url="https://estadisticas-app.onrender.com/"
          tec={["React.js", "Node.js", "MySQL ", "Bootstrap"]}
        ></Project>
        <Project
          titulo="App de Peliculas"
          img={appPeliculas}
          descript="Una App de Peliculas"
          url="https://pagina-de-peliculas.onrender.com/"
          tec={["React.js", "Node.js", "Bootstrap"]}
        ></Project>
        <Project
          titulo="App de Peliculas"
          img={appPeliculas}
          descript="Una App de Peliculas"
          url="https://pagina-de-peliculas.onrender.com/"
          tec={["React.js", "Node.js", "Bootstrap"]}
        ></Project>
      </div>
    </div>
  );
}
