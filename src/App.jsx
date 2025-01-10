//components
import { Major } from './components/Major'
import { Projects } from './components/Projects'
import {Contact} from './components/Contact'
import { useEffect } from 'react';

//style
import './App.css'

function App() {
  useEffect(() => {
    const elementDer = document.querySelectorAll('.elementDer');
    const elementIzq = document.querySelectorAll('.elementIzq')

    const animarSecciones = () => {
      elementDer.forEach((element) => {
        const seccionTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (seccionTop < windowHeight - 100) {
          element.classList.add('visibleDer');
        }
      });
      elementIzq.forEach((element) => {
        const seccionTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (seccionTop < windowHeight - 100) {
          element.classList.add('visibleIzq');
        }
      });
    };

    window.addEventListener('scroll', animarSecciones);
    animarSecciones(); // Llamamos una vez para animar secciones visibles al cargar

    return () => window.removeEventListener('scroll', animarSecciones);
  }, []);
  return (
    <div>
      <Major></Major>
      <Projects></Projects>
      <Contact></Contact>
    </div>

  )
}

export default App
