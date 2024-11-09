import udp_logo from "/udp.webp";

const education = [
  {
    name: "Universidad Diego Portales",
    datetime_start: "2016",
    datetime_end: "2023",
    start: "2016",
    end: "2023",
    logo: udp_logo,
  },
];

const Education = () => {
  return (
    <div>
      <h2>
        Educación<span className="dot">.</span>
      </h2>
      {education.map((education, index) => (
        <div key={index} className="education">
          <img
            className="education-logo"
            src={education.logo}
            alt={education.name}
          />
          <div className="education-info">
            <h3>{education.name}</h3>
            <p className="education-date">
              <time dateTime={education.datetime_start}>{education.start}</time>
              {" - "}
              <time dateTime={education.datetime_end}>{education.end}</time>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
