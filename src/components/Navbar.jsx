import React from "react";

const Navbar = ({ nameRef, aboutRef, contactRef }) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a
          href="#!"
          className="navbar-logo"
          onClick={() => scrollToRef(nameRef)}
        >
          MiLogo
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a
              href="#!"
              className="navbar-link"
              onClick={() => scrollToRef(nameRef)}
            >
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#!"
              className="navbar-link"
              onClick={() => scrollToRef(aboutRef)}
            >
              Sobre Mí
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#!"
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
