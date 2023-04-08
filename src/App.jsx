import { useState } from "react";
import MainPage from "./components/MainPage";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Sidenav />
      <MainPage />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
