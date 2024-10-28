import React from "react";
import hectorSaravia from "../assets/hectorsaravia.svg";

const Navbar = ({ nameRef, aboutRef, experienceRef, contactRef }) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
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
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a
              href="#name"
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
              href="#contact"
              className="navbar-link"
              onClick={() => scrollToRef(contactRef)}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
