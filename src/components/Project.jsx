import appPeliculas from '../assets/appPeliculas.png'

export function Project() {
    return(
        <div className="projecto elementIzq">
            <div className="tituloProjecto">
                <h1>esto es un projecto</h1>
                <a className="botonProjecto" href="https://pagina-de-peliculas.onrender.com/">Ver projecto</a>
            </div>
            <div className="imagenProjecto">
                    <img src={appPeliculas} alt="Imagen Projecto" />
            </div>
            <div className="Info">
                <div className='caract'>
                    <h2>Info Project</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, animi corporis accusantium atque sapiente doloribus consectetur expedita ex aut nesciunt magni repellendus vel nostrum molestias cumque asperiores possimus numquam aspernatur.</p>
                </div>
                <div className='tec'>
                    <h2>Tecnologias</h2>
                    <ul className="lista">
                        <li>React</li>
                        <li>tec2</li>
                        <li>tec3</li>
                        <li>tec3dsadasdsadsadsadsadas</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}