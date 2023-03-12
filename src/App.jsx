import { useState } from "react";
import MainPage from "./components/MainPage";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div>
      <Sidenav />
      <MainPage />
    </div>
  );
}

export default App;
