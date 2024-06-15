import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Navbar nameRef={nameRef} aboutRef={aboutRef} contactRef={contactRef} />
      <div className="main-content">
        <div ref={nameRef}>
          <Name />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
