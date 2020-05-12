import React from "react";
import ReactDOM from "react-dom";

// import Keypad from './components/Keypad';
import EyesOnMe from "./components/EyesOnMe";
import Keypad from "./components/Keypad";

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById("global")
);
