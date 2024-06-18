import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Mainhead from "./components/Main-head/Main-head";
import About from "./components/About/About";
import Coreteam from "./components/Coreteam/Coreteam";
import Follow from "./components/Features/Follow";
import GDSC from "./components/Gdsc/gdsc";


const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Mainhead />
        <About />
        <Coreteam/>
        <br />
        <br />
        <GDSC />
        <Follow />
      </div>
    </>
  );
};

export default App;
