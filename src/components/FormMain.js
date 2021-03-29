import '../styles/components/FormMain.css';

const FormMain = () => {
  const view = `
    <h2>HABLEMOS</h2>
    <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
    <form action="" class ="mainForm__form">
      <label>Nombre completo</label>
      <input type="text" placeholder="Nombre"/>

      <label>Correo electrónico</label>
      <input type="text" placeholder="Email"/>

      <label>Mensaje</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

    </form>
    <button>ENVIAR MENSAJE</button>
      `;
  return view;
}

export default FormMain;