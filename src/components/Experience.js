import React from "react";

const experience = () => {
  const placesWhereIWorked = [
    {
      name: "IronHack",
      city: "CDMX",
      country: "MX",
      jobTitle: "Part Time WebDev Lead Teacher",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2018",
      jobEnded: ""
    },
    {
      name: "Universidad Nacional Autonoma de Mexico",
      city: "CDMX",
      country: "MX",
      jobTitle: "Profesor informático para Informática Biomédica",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2018",
      jobEnded: ""
    },
    {
      name: "Woooo Muchas cosas",
      city: "CDMX",
      country: "MX",
      jobTitle: "Todologo",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2010",
      jobEnded: "2018"
    }
  ];

  const checkJobEnded = end => {
    let endYear;
    if (end === "") {
      endYear = "current";
    } else {
      endYear = end;
    }
    return endYear;
  };
  return (
    <div className="">
      <h2>Experiencia laboral:</h2>
      {placesWhereIWorked.map((cadaChambita, index) => {
        return (
          <div className="experience-content" key={index}>
            <h3>{cadaChambita.name}</h3>
            <p>
              {cadaChambita.city}, {cadaChambita.country}
            </p>
            <h4>{cadaChambita.jobTitle}</h4>
            <p>{cadaChambita.jobDescription}</p>
            <p>
              {cadaChambita.jobStarted} - {checkJobEnded(cadaChambita.jobEnded)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default experience;
