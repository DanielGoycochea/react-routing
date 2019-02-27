import React from "react";
import { Link } from "react-router-dom";

export const myProjects = [
  {
    id: "1a",
    name: "El juego de los changuitos",
    year: "2018",
    technologies: "HTML5, CSS, JS",
    description: "El juego de Isra"
  },
  {
    id: "2b",
    name: "Pets AB",
    year: "2019",
    technologies: "MongoDB, Express, Node, JS, HBS, CSS",
    description: "El proyecto de Nekzito y Pao"
  }
];

export const projects = () => {
  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map((cadaProyecto, index) => {
        return (
          <div key={cadaProyecto.id}>
            <h3>
              <Link to={`/projects/${cadaProyecto.id}`}>
                {cadaProyecto.name}
              </Link>
            </h3>
            <h4>{cadaProyecto.technologies}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
