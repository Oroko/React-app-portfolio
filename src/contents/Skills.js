import React, { Component } from "react";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySkills: [
        "HTML",
        "CSS",
        "JavaSript",
        "REACT JS",
        "Python",
        "Ruby",
        "MySQL",
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.mySkills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
