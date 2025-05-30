import rr_logo from "/rr_logo.webp";
import vlabogadas_logo from "/vlabogadas_logo.webp";
import dyatec_logo from "/dyatec_logo.webp";

const experiences = [
  {
    name: "Práctica Profesional 1",
    organisation: "Ricardo Rodríguez & Cía Ltda",
    location: "Santiago, Chile",
    start: "febrero 2022",
    datetime_start: "2022-02-01",
    end: "abril 2022",
    datetime_end: "2022-04-01",
    logo: rr_logo,
  },
  {
    name: "Programador Freelance",
    organisation: "Vergara & Leiva Abogadas · Profesional independiente",
    location: "Remoto",
    start: "julio 2022",
    datetime_start: "2022-07-01",
    end: "agosto 2022",
    datetime_end: "2022-08-01",
    logo: vlabogadas_logo,
  },
  {
    name: "Práctica Profesional 2",
    organisation: "DYATEC",
    location: "Remoto",
    start: "octubre 2022",
    datetime_start: "2022-10-01",
    end: "diciembre 2022",
    datetime_end: "2022-12-01",
    logo: dyatec_logo,
  },
  {
    name: "Desarrollador Freelance",
    organisation: "DYATEC",
    location: "Remoto",
    start: "julio 2023",
    datetime_start: "2023-07-01",
    end: "marzo 2024",
    datetime_end: "2022-03-01",
    logo: dyatec_logo,
  },
  {
    name: "Desarrollador Full-Stack",
    organisation: "DYATEC",
    location: "Remoto",
    start: "abril 2024",
    datetime_start: "2024-04-01",
    end: "presente",
    datetime_end: new Date().toISOString().split("T")[0],
    logo: dyatec_logo,
  },
];

const Experience = () => {
  return (
    <div>
      <h2>
        Experiencia<span className="dot">.</span>
      </h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
          <img
            className="experience-logo"
            src={experience.logo}
            alt={experience.name}
          />
          <div className="experience-info">
            <h3>{experience.name}</h3>
            <p>
              {experience.organisation} · {experience.location}
            </p>
            <p className="experience-date">
              <time dateTime={experience.datetime_start}>
                {experience.start}
              </time>
              {" - "}
              <time dateTime={experience.datetime_end}>{experience.end}</time>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
