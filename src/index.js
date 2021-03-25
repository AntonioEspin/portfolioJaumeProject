import Header from './components/Header.js';
import Hero from './components/HeroMain.js';
import Presentation from './components/Presentation.js';
import './styles/main.css';

(
  async function app () {
    const header = document.getElementById('header');
    const hero = document.getElementById('hero')
    const presentation = document.getElementById('presentation')
    header.innerHTML = await Header();
    hero.innerHTML = await Hero();
    presentation.innerHTML = await Presentation()
  }
)();