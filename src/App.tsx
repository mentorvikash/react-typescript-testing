import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Skills from "./components/day6MuitiElementQuery/Skills";

function App() {
  const skills = ["painting", "singing", "dancing", "running"];
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
