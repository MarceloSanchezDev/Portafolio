import foto from '../assets/fotoCV1.svg'

export function Major() {
    return (
        <div className="seccion">
            <div className='contenedor'>
                <div className='contenedorFoto elementIzq' >
                    <img className='fotoCV'  src={foto} alt="Foto de perfil" />
                </div>
                <div className='contenedorPresentacion '>
                    <h1 className="titulo ">Marcelo Sanchez</h1>
                    <h2 className='subTitutlo elementDer'>Desarrollador Full-Stack</h2>
                    <p className='parrafoPresentacion elementDer'>Como desarrollador full stack, tengo la capacidad de construir aplicaciones completas, desde interfaces modernas y atractivas hasta sistemas backend robustos y escalables. Mi enfoque integral asegura soluciones eficientes, adaptadas a tus necesidades y listas para crecer junto con tu negocio.</p>                </div>
            </div>
        </div>
      );
}