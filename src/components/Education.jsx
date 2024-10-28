import React from "react";

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
      <h4>
        Educación<span className="dot">.</span>
      </h4>
      {education.map((education, index) => (
        <div key={index} className="education">
          <div className="education-info">
            <h5>{education.name}</h5>
            <p className="education-date">
              <date datetime={education.datetime_start}>{education.start}</date>
              {" - "}
              <date datetime={education.datetime_end}>{education.end}</date>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
