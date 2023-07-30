import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Skills from "./components/day6MuitiElementQuery/Skills";
import Counter from "./components/day9MouseEvents/Counter";

function App() {
  const skills = ["painting", "singing", "dancing", "running"];
  return (
    <div className="App">
      {/* <Skills skills={skills} /> */}
      <Counter />
    </div>
  );
}

export default App;
