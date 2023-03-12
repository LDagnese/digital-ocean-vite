import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MainPage = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <h1>I'm Louis D'Agnese</h1>
        <h2>
          I'm a
          <TypeAnimation
            sequence={[
              "Developer",
              1000, // Waits 1s
              "Coder",
              2000, // Waits 2s
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", paddingLeft: "5px" }}
          />
        </h2>
        <div>
          <FaLinkedin size={20} className="cursor-pointer"/>
          <FaGithub size={20} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
