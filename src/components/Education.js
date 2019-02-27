import React from "react";

const educacion = () => {
  const myEducation = [
    {
      schoolName: "Ironhack",
      city: "CDMX",
      country: "MX",
      degree: "Full-Stack Web Developer",
      schoolStarted: "2018",
      schoolEnded: "2019"
    },
    {
      schoolName: "Universidad Cuauhtémoc Plantel Aguascalientes",
      city: "AGS",
      country: "MX",
      degree: "Maestría en Big Data y Procesamiento de Datos",
      schoolStarted: "2015",
      schoolEnded: "2016"
    },
    {
      schoolName: "Universidad Patito",
      city: "Patito",
      country: "Duckling",
      degree: "Lic en las cosas que nadie quiere hacer",
      schoolStarted: "1991",
      schoolEnded: "1995"
    }
  ];

  return (
    <div>
      <h2>Educación</h2>
      {myEducation.map((cadaEducacion, index) => {
        return (
          <div key={index}>
            <h3>{cadaEducacion.schoolName}</h3>
            <p>{cadaEducacion.city}</p>
            <h4>{cadaEducacion.degree}</h4>
            <p>
              {cadaEducacion.schoolStarted} - {cadaEducacion.schoolEnded}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default educacion;
