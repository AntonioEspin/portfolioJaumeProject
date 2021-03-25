import arrowDown from '../assets/images/arrow-down.png';
import '../styles/components/Presentation.css';
const Presentation = () => {
  const view = `
    <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
    <span>Aquí hay algunos que me gustaría compartir.</span>
    <img src="${arrowDown}" alt="arrow-down"/>
  `;

  return view
}

export default Presentation;