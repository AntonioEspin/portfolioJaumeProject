import macbook from '../assets/images/Macbook.png';
import marvol from '../assets/images/marvol.png';
import netnet from '../assets/images/netnet.png';
import userLeo from '../assets/images/user-icon-leo.png';
import userJaume from '../assets/images/user-jaume.png';
import userMarco from '../assets/images/user-marco.png';
import '../styles/components/Projects.css';

const Projects = () => {
  const view = `
    <section class ="projects__item">
      <div class ="projects__item--info">
        <figure class ="item__img">
          <img src="${macbook}" alt="macbook"/>
        </figure>
        <div class ="item__description">
          <h2>leonidasesteban.com</h2>
          <p>Accede a más de 120 proyectos que te ayudarán a mejorar 
          tus habilidades como desarrollador Front-End.</p>
          <div class ="item__description--buttons">
            <button class ="button-one"><a href="">VER CÓDIGO</a></button>
            <button class ="button-two"><a href="">VER PROYECTO</a></button>
          </div>
        </div>
      </div>
      <div class ="projects__item--feedback">
        <figure>
          <img src="${userLeo}" alt="user-leo"/>     
        </figure>
        <p>"Jaume ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses ".</p>
        <span>LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM</span>
      </div>
    </section>
    <!-- -------  -->
    <section class ="projects__item">
      <div class ="projects__item--info">
        <figure class ="item__img">
          <img src="${marvol}" alt="marvol"/>
        </figure>
        <div class ="item__description">
          <h2>MARVOL</h2>
          <p>Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol.</p>
          <div class ="item__description--buttons">
            <button class ="button-one"><a href="">VER CÓDIGO</a></button>
            <button class ="button-two"><a href="">VER PROYECTO</a></button>
          </div>
        </div>
      </div>
      <div class ="projects__item--feedback">
        <figure>
          <img src="${userJaume}" alt="user-Jaume"/>     
        </figure>
        <p>"Jaume ha superado mis expectativas desde el diseño hasta el desarrollo".</p>
        <span>JASON LOPEZ / COFUNDADOR Y CEO MARVOL</span>
      </div>
    </section>
    <!-- --------------------------- -->
    <section class ="projects__item">
      <div class ="projects__item--info">
        <figure class ="item__img">
          <img src="${netnet}" alt="netnet"/>
        </figure>
        <div class ="item__description">
          <h2>NETNET</h2>
          <p>Películas y series ilimitadas y mucho más.
          Disfruta donde quieras. Cancela cuando quieras.</p>
          <div class ="item__description--buttons">
            <button class ="button-one"><a href="">VER CÓDIGO</a></button>
            <button class ="button-two"><a href="">VER PROYECTO</a></button>
          </div>
        </div>
      </div>
      <div class ="projects__item--feedback">
        <figure>
          <img src="${userMarco}" alt="user-marco"/>     
        </figure>
        <p>"Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos".</p>
        <span>MARCO CORTEZ / NETNET</span>
      </div>
    </section>
  `;
  return view
};

export default Projects;