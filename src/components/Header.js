import logo from '../assets/images/logo.png';
import '../styles/components/Header.css';

const Header = () => {
  const view = `
    <img src="${logo}" alt="icon-logo"/>
    <nav class="header__nav">
      <li><a href="">HOLA</a></li>
      <li><a href="">PROYECTOS</a></li>
      <li><a href="">HABLEMOS</a></li>
    </nav>
    <button>CURRICULUM</button>
  `;

  return view;
};

export default Header;