import React, { useState } from "react";
import { ISkills } from "./SkillsInterface";

function Skills({ skills }: ISkills) {
  return (
    <div>
      <h1>List of skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
