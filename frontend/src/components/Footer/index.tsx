import "./styles.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer'>
      <section className='texto'>
        <p>Desenvolvido por Gabriel Trindade </p>
        <p> Semana Spring React - <a href="https://github.com/devsuperior/sds-dsmovie" target='_blank'   rel="noreferrer" className="item_2">DevSuperior</a></p>
        <p className='logo'>Projeto DSMovie 2022</p>
      </section>

      <section id="social">

        <a href="http://github.com/tadsgabrieltrindade" target="__new" className='item'> 
            <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/tadsgabrieltrindade" target="__new" className='item'> 
            <FaLinkedin />
        </a>

        <a href="https://instagram.com/tadsgabrieltrindade" target="__new" className='item'> 
            <FaInstagram />
        </a>
        
      </section>
    </footer>
  );
}

export default Footer;