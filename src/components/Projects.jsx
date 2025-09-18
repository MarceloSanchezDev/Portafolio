import { Project } from "./Project";
import appPeliculas2 from "../assets/AppPeliculasDetails.png";
import appPeliculas3 from "../assets/AppPeliculasList.png";
import appPeliculas4 from "../assets/AppPeliculasRes.png";
import appEstat1 from "../assets/EstadisticasBaloncesto-Init.png";
import appEstat2 from "../assets/EstadisticasBaloncesto-Stats.png";
import appEstat3 from "../assets/EstadisticasBaloncesto-statInfo.png";
import appTODO1 from "../assets/TO-DOAPP1.png";
import appTODO2 from "../assets/TO-DOAPP2.png";
import appTODO3 from "../assets/TO-DOAPP3.png";
import FarmaciaFiorilliJR1 from "../assets/FarmaciaFiorilliJR1.png";
import FarmaciaFiorilliJR2 from "../assets/FarmaciaFiorilliJR2.png";
import FarmaciaFiorilliJR3 from "../assets/FarmaciaFiorilliJR3.png";
import FarmaciaFiorilliJR4 from "../assets/FarmaciaFiorilliJR4.png";
import FarmaciaFiorilliJR5 from "../assets/FarmaciaFiorilliJR5.png";

import ProjectInProcess from "./ProjectInProcess";
export function Projects() {
  return (
    <div className="container-fluid projectos text-white text-center d-flex align-items-center justify-content-around flex-column">
      <h1 className="fs-1 my-5">🌐 Projectos</h1>
      <div className="row text-start d-flex flex-md-column flex-lg-row align-items-center justify-content-around w-100">
        <Project
          id={"appMovie"}
          titulo="App Web  de Peliculas 🍿🎬 "
          img={[appPeliculas2, appPeliculas3, appPeliculas4]}
          descript={
            "Buscar y gestionar películas favoritas. Utiliza la API de TMDb para obtener información detallada de cada película y permite a los usuarios agregar títulos a su lista personal. Cuenta con autenticación mediante JWT y cifrado de contraseñas con Bcrypt. El backend está desarrollado con Node.js y Express, y la base de datos en MySQL. La validación de datos se realiza con Zod. El frontend está construido con React y estilizado con Bootstrap, ofreciendo una experiencia de usuario intuitiva y responsiva."
          }
          url="https://peliculas-murex.vercel.app/"
          tec={[
            { nombre: "React.js", uso: "Front-End" },
            { nombre: "Bootstrap", uso: "Front-End" },
            { nombre: "Node.js", uso: "Back-End" },
            { nombre: "MySQL", uso: "Base de Datos" },
          ]}
        ></Project>
        <Project
          id={"appStatistic"}
          titulo="App Web de Estadisticas 📊📈"
          img={[appEstat1, appEstat2, appEstat3]}
          descript={
            "Enfocada en tiros de dos y tres puntos. Permite analizar el rendimiento de los jugadores en distintos partidos, mostrando aciertos y fallos detallados. Usa React en el frontend con Bootstrap para una interfaz dinámica y adaptable. El backend está desarrollado con Node.js y Express, gestionando la lógica del negocio y la autenticación con JWT. Protege contraseñas con Bcrypt y almacena datos en MySQL. La validación de la información se realiza con Zod, asegurando integridad y consistencia en los datos registrados."
          }
          url="https://estadisticas-baloncesto-app.vercel.app/"
          tec={[
            { nombre: "React.js", uso: "Front-End" },
            { nombre: "Bootstrap", uso: "Front-End" },
            { nombre: "Node.js", uso: "Back-End" },
            { nombre: "MySQL", uso: "Base de Datos" },
          ]}
        ></Project>
        <Project
          id={"todoList"}
          titulo="TO-DO List 📋✔️"
          img={[appTODO1, appTODO2, appTODO3]}
          descript={
            "TO-DO APP es una aplicación simple y funcional desarrollada con React que permite a los usuarios gestionar sus tareas diarias de manera eficiente. La aplicación está dividida en dos secciones principales: tareas pendientes y tareas completadas. Su objetivo es ayudar al usuario a organizarse mejor, registrar actividades por hacer y marcar como completadas aquellas que ya han sido realizadas."
          }
          url="https://todolistmarcelosanchezdev.vercel.app/"
          tec={[
            { nombre: "React.js", uso: "Front-End" },
            { nombre: "Bootstrap", uso: "Front-End" },
            { nombre: "Node.js", uso: "Back-End" },
            { nombre: "MySQL", uso: "Base de Datos" },
          ]}
        ></Project>
        <Project
          id={"farmacia"}
          titulo="Farmacia Fiorilli JR 🩺💊"
          img={[FarmaciaFiorilliJR1, FarmaciaFiorilliJR2, FarmaciaFiorilliJR3]}
          descript={
            "Página web responsiva para farmacia con foco en conversión local: catálogo de productos, WhatsApp con mensaje prellenado, horarios, teléfonos y Google Maps embebido. Implementé SEO local (schema.org Pharmacy, título/descripción por página, Open Graph), optimización para Core Web Vitals. Resultado: aumento de consultas y pedidos por WhatsApp  y mejor presencia en búsquedas de cercanía."
          }
          url="https://www.fiorillijrfarmacia.com.ar/"
          tec={[
            { nombre: "React.js", uso: "Front-End" },
            { nombre: "Bootstrap", uso: "UI/Responsive" },
            { nombre: "Vercel", uso: "Deploy" },
          ]}
        ></Project>
        <ProjectInProcess
          id={"todoList"}
          titulo="TO-DO List 📋✔️"
          img={[appTODO1, appTODO2, appTODO3]}
          descript={
            "TO-DO APP es una aplicación simple y funcional desarrollada con React que permite a los usuarios gestionar sus tareas diarias de manera eficiente. La aplicación está dividida en dos secciones principales: tareas pendientes y tareas completadas. Su objetivo es ayudar al usuario a organizarse mejor, registrar actividades por hacer y marcar como completadas aquellas que ya han sido realizadas."
          }
          url="https://todolistmarcelosanchezdev.vercel.app/"
          tec={[
            { nombre: "React.js", uso: "Front-End" },
            { nombre: "Bootstrap", uso: "Front-End" },
            { nombre: "Node.js", uso: "Back-End" },
            { nombre: "MySQL", uso: "Base de Datos" },
          ]}
        ></ProjectInProcess>
      </div>
    </div>
  );
}
