import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Nav_bar from "./Components/Nav_bar";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Nav_bar />
      <Homepage />
      <section
        id="sec1"
        style={{ height: "100vh", background: "#fff" }}
      ></section>
      <section style={{ height: "100vh", background: "#000" }}></section>
      <section style={{ height: "100vh", background: "#fff" }}></section>
      <section style={{ height: "100vh", background: "#000" }}></section>
    </div>
  );
}

export default App;
