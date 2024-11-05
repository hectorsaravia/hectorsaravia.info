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
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaCloudflare,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiTailwindcss,
  SiGooglecloud,
  SiGithubactions,
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMicrosoftsqlserver,
  SiWindows11,
  SiVercel,
  SiKubernetes,
  SiStrapi,
} from "react-icons/si";

import PropTypes from "prop-types";

const knowledges = [
  {
    name: "Lenguajes de programación",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "PHP", icon: FaPhp },
      { name: "Python", icon: FaPython },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C#", icon: SiCsharp },
    ],
  },
  {
    name: "Librerías/Frameworks",
    skills: [
      { name: "NodeJS", icon: FaNodeJs },
      { name: "React", icon: FaReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "Vue", icon: FaVuejs },
      { name: "NuxtJS", icon: SiNuxtdotjs },
      { name: "Express", icon: SiExpress },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Laravel", icon: FaLaravel },
      { name: ".NET", icon: SiDotnet },
    ],
  },
  {
    name: "Bases de datos",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "MS Server SQL", icon: SiMicrosoftsqlserver },
    ],
  },
  {
    name: "Control de versiones",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "GitLab", icon: FaGitlab },
    ],
  },
  {
    name: "Cloud",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Vercel", icon: SiVercel },
      { name: "Cloudflare", icon: FaCloudflare },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "kubernetes", icon: SiKubernetes },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    name: "CMS",
    skills: [
      { name: "WordPress", icon: FaWordpress },
      { name: "Strapi", icon: SiStrapi },
    ],
  },
  {
    name: "Sistemas operativos",
    skills: [
      { name: "GNU/Linux", icon: FaLinux },
      { name: "Windows", icon: SiWindows11 },
    ],
  },
];

// Componente Skill
const Skill = ({ icon: Icon, name }) => (
  <div className="skills">
    <Icon alt={name} className="skill-icon" />
    <span className="skill-info">{name}</span>
  </div>
);

Skill.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

// Componente Knowledge que renderiza las skills
const Knowledge = ({ skills }) => (
  <>
    {skills.map((skill, index) => (
      <Skill key={index} icon={skill.icon} name={skill.name} />
    ))}
  </>
);

Knowledge.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const KnowledgeList = ({ knowledges }) => (
  <div className="knowledge-container">
    {knowledges.map((knowledge, index) => (
      <div className="skills-container" key={index}>
        <h3>{knowledge.name}</h3>
        <Knowledge key={index} skills={knowledge.skills} />
      </div>
    ))}
  </div>
);

KnowledgeList.propTypes = {
  knowledges: PropTypes.arrayOf(
    PropTypes.shape({
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.elementType.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

const Skills = () => {
  return (
    <>
      <h2>
        Habilidades<span className="dot">.</span>
      </h2>
      <KnowledgeList knowledges={knowledges} />
    </>
  );
};

export default Skills;
