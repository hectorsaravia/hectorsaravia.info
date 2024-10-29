import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/hectorsaraviab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedinIn size={30} title="Linkedin" />
      </a>
      <a
        href="https://github.com/hectorsaravia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <FaGithub size={30} title="Github" />
      </a>
      <a href="mailto:hectorsaraviab@gmail.com" aria-label="Gmail">
        <SiGmail size={30} title="Gmail" />
      </a>
    </div>
  );
};

export default Contact;
