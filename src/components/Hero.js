import photoPerson from '../assets/images/photo-person.png';
import iconPhone from '../assets/images/icon-phone.png';
import iconEmail from '../assets/images/icon-email.png';
import iconInstagram from '../assets/images/icon-instagram.png';
import iconTwitter from '../assets/images/icon-twitter.png';

const Hero = () => {
  const view = `
    <section className="presentation__info">
      <h2>¡Hola a todos!</h2>
      <h1>Soy Jaume</h1>
      <p>Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
      <nav className="presentation__info--nav">
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
    </section>
    <figure className="presentation__img">
      <img src="${photoPerson}" alt="person´s photograph"/>
    </figure>
  `;

  return view;
};

export default Hero;