import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Skills from "./components/day6MuitiElementQuery/Skills";
import Counter from "./components/day9MouseEvents/Counter";
import Counter1 from "./components/day10Keyboard/Counter";
import AppProvider from "./components/day11withMui/AppProvider";
import MuiMode from "./components/day11withMui/MuiMode";
import MockingHttp from "./components/day12MockingHttp/MockingHttp";

function App() {
  const skills = ["painting", "singing", "dancing", "running"];
  return (
    <div className="App">
      <AppProvider>
        {/* <Skills skills={skills} /> */}
        {/* <Counter /> */}

        {/* <Counter1 /> */}
        <MuiMode />
        <MockingHttp />
      </AppProvider>
    </div>
  );
}

export default App;
