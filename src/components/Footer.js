import iconPhone from '../assets/images/icon-phone.png';
import iconEmail from '../assets/images/icon-email.png';
import iconInstagram from '../assets/images/icon-instagram.png';
import iconTwitter from '../assets/images/icon-twitter.png';
import logo from '../assets/images/logo.png';
import '../styles/components/Footer.css';

const Footer = () => {
  const view = `
    <img class="footer__img" src="${logo}" alt="logo"/>
    <nav class="footer__nav">
    <a href="">
      <img src="${iconPhone}" alt="icon-phone"/>
    <a href="">
      <img src="${iconEmail}" alt="icon-email"/>
    </a>
    <a href="">
      <img src="${iconInstagram}" alt="icon-instagram"/>
    </a>
    <a href="">
      <img src="${iconTwitter}" alt="icon-twitter"/>
    </a>
    </nav>
    <p>Hecho con ❤ de Antonio</p>
    <p>Copyright 2021 - Todos los derechos reservados.</p>
  `;
  return view;
};

export default Footer;