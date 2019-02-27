import React, { Component } from "react";
import { myProjects } from "./Projects";
import { Link } from "react-router-dom";

const projectDetails = props => {
  console.log(props);

  //const getProject = id => {
  //  const elProyecto = unProyecto => {
  //    return unProyecto.id === id;
  //  };
  //  return myProjects.find(elProyecto);
  //};

  const getProject = id => {
    return myProjects.find(unProyecto => {
      return unProyecto.id === id;
    });
  };
  const { params } = props.match;
  const proyectoEncontrado = getProject(params.id);

  return (
    <div>
      <h2>
        {proyectoEncontrado.name}
        <span style={{ fontSize: "14px" }}>{proyectoEncontrado.year}</span>
      </h2>
      <h3>Tecnologias utilizadas: {proyectoEncontrado.technologies}</h3>
      <p>{proyectoEncontrado.description}</p>
      <Link to="/projects">Regresar</Link>
    </div>
  );
};

export default projectDetails;
