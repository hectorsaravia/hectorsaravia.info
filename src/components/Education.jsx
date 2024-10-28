import React from "react";

const education = [];

const Education = () => {
  return (
    <div>
      <h4>
        Educación<span className="dot">.</span>
      </h4>
      {education.map((education, index) => (
        <div key={index} className="education">
          <img
            className="education-logo"
            src={education.logo}
            alt={education.name}
          />
          <div className="education-info">
            <h5>{education.name}</h5>
            <p>
              {education.organisation} · {education.location}
            </p>
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
