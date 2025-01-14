import sobreMi from '../assets/sobremi.jpg'
import git from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
export function Footer() {
    return(
        <footer className="seccion">
            <div>
                <h1 className='titulo'>sobre mi: </h1>
                <div className='sobreMi'>
                    <p className='parrafoPresentacion parrafoSobreMi'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, dicta similique cumque veritatis maiores nulla molestias, at sunt cum hic adipisci voluptates cupiditate sint ab! Modi tempora et dolorem!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nesciunt quas delectus officiis eligendi doloribus? Fuga, iste odio quasi, tempora nihil, eveniet pariatur soluta ipsa a possimus ratione assumenda exercitationem!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae, iste repellat, reiciendis sed aliquam illo voluptates error ipsum aut vero fugiat architecto harum deserunt voluptas dolorum nostrum amet natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut voluptates harum doloribus temporibus recusandae aliquid voluptatibus vitae minus natus eveniet et accusamus iusto iure voluptas quisquam, sit nihil nemo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae optio veritatis, aut impedit earum suscipit aperiam officiis commodi quam assumenda modi itaque ut minus! Praesentium incidunt debitis similique aliquam!
                    </p>
                    <div>
                        <h2>Redes Sociales</h2>
                        <div>
                            <img className='fotoSocial' src={linkedin} alt="Linkedin" />
                            <img className='fotoSocial' src={git} alt="GitHub" />
                        </div>
                    </div>
                    <img src={sobreMi} className='fotoSobreMi' alt="" />
                </div>
            </div>
        </footer>
    )
}