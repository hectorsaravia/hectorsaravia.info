import { useState } from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";
import hectorSaravia from "/hectorsaravia.svg";

const Navbar = ({
  nameRef,
  aboutRef,
  experienceRef,
  skillsRef,
  educationRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToRef = (ref) => {
    const offsetTop = ref.current.offsetTop - 70;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a
          href="/"
          className="navbar-logo"
          onClick={() => scrollToRef(nameRef)}
        >
          <img src={hectorSaravia} alt="Hector Saravia" />
        </a>

        {/* Ícono de hamburguesa para dispositivos móviles */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a
              href="#home"
              className="navbar-link"
              onClick={() => scrollToRef(nameRef)}
            >
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#about"
              className="navbar-link"
              onClick={() => scrollToRef(aboutRef)}
            >
              Acerca
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#experience"
              className="navbar-link"
              onClick={() => scrollToRef(experienceRef)}
            >
              Experiencia
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#skills"
              className="navbar-link"
              onClick={() => scrollToRef(skillsRef)}
            >
              Habilidades
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#educacion"
              className="navbar-link"
              onClick={() => scrollToRef(educationRef)}
            >
              Educación
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  nameRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  experienceRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  skillsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  educationRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default Navbar;
