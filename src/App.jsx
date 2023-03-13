import { useState } from "react";
import MainPage from "./components/MainPage";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Sidenav />
      <MainPage />
      <Work />
    </div>
  );
}

export default App;
