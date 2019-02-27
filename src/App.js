import React, { Component } from "react";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { projects as Projects } from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
