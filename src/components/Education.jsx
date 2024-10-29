const education = [
  {
    name: "Universidad Diego Portales",
    datetime_start: "2016",
    datetime_end: "2023",
    start: "2016",
    end: "2023",
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
          <div className="education-info">
            <h3>{education.name}</h3>
            <p className="education-date">
              <date dateTime={education.datetime_start}>{education.start}</date>
              {" - "}
              <date dateTime={education.datetime_end}>{education.end}</date>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
