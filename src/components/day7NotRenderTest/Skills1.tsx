import React, { useEffect, useState } from "react";
import { ISkills } from "./Skills1Interface";

function Skills1({ skills }: ISkills) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 1000);
  });

  return (
    <div>
      <h1>List of skills</h1>
      {isLogin ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>login</button>
      )}
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills1;
