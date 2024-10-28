import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        nameRef={nameRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
      <main className="main-content">
        <section ref={nameRef}>
          <Name />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={educationRef}>
          <Education />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
