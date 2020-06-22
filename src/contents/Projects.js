import React, { Component } from "react";
class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Projects</h1>
        <div className="flex-container">
          <div className="project">
            <h4>sample Js Project</h4>
            <a href="https://github.com/Oroko" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div className="project">
            <h4>sample Js Project</h4>
            <a href="https://github.com/Oroko" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div className="project">
            <h4>sample Js Project</h4>
            <a href="https://github.com/Oroko" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
