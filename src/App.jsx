import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

const Skills = React.lazy(() => import("@/components/Skills"));
const Experience = React.lazy(() => import("@/components/Experience"));
const Education = React.lazy(() => import("@/components/Education"));
const Footer = React.lazy(() => import("@/components/Footer"));

function App() {
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);

  return (
    <>
      <Navbar
        nameRef={nameRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
      />
      <main className="main-content">
        <section ref={nameRef}>
          <Name />
          <Contact />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={educationRef}>
          <Education />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
