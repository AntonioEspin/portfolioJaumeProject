import logo from '../assets/images/logo.png';

const Header = () => {
  const view = `
    <img src="${logo}" alt="icon-logo"/>
    <nav class="header__nav">
      <li>HOLA</li>
      <li>PROYECTOS</li>
      <li>HABLEMOS</li>
    </nav>
  `;

  return view;
};

export default Header;