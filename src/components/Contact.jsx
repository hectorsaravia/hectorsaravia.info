import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <a
        href="www.linkedin.com/in/hectorsaraviab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/hectorsaravia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a href="mailto:hectorsaraviab@gmail.com">
        <SiGmail size={30} />
      </a>
    </div>
  );
};

export default Contact;
