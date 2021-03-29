import Header from './components/Header.js';
import Hero from './components/HeroMain.js';
import Presentation from './components/Presentation.js';
import Projects from './components/Projects.js';
import FormMain from './components/FormMain.js';
import './styles/main.css';

(
  async function app () {
    const header = document.getElementById('header');
    const hero = document.getElementById('hero')
    const presentation = document.getElementById('presentation')
    const projects = document.getElementById('projects');
    const formMain = document.getElementById('mainForm');
    header.innerHTML = await Header();
    hero.innerHTML = await Hero();
    presentation.innerHTML = await Presentation()
    projects.innerHTML = await Projects();
    formMain.innerHTML = await FormMain();
  }
)();