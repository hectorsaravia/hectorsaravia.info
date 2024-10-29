import {
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaWordpress,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiTailwindcss,
  SiGooglecloud,
  SiGithubactions,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: FaJs },
  { name: "NodeJS", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Vue", icon: FaVuejs },
  { name: "NuxtJS", icon: SiNuxtdotjs },
  { name: "Express", icon: SiExpress },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "PHP", icon: FaPhp },
  { name: "Laravel", icon: FaLaravel },
  { name: "WordPress", icon: FaWordpress },
  { name: "AWS", icon: FaAws },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "GitLab", icon: FaGitlab },
];

const Skills = () => {
  return (
    <>
      <h2>
        Skills<span className="dot">.</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skills">
            <skill.icon alt={skill.name} className="skill-icon" />
            <span className="skill-info">{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
