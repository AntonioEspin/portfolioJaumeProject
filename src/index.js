import Header from './components/Header.js';
import Hero from './components/Hero.js';
import './styles/main.css';

(
  async function app () {
    const header = document.getElementById('header');
    const hero = document.getElementById('hero')
    header.innerHTML = await Header();
    hero.innerHTML = await Hero()
  }
)();