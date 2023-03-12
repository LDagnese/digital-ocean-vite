import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MainPage = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
        alt="circuit background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Louis D'Agnese</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
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
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <a
              href="https://www.linkedin.com/in/louis-d-agnese-587350133/"
              target={"_blank"}
            >
              <FaLinkedin size={20} className="cursor-pointer" />
            </a>
            <a href="https://github.com/LDagnese" target={"_blank"}>
              <FaGithub size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
