import React from "react";
import Reseaux from "@components/firstcontainer/Reseaux";
import About from "@components/Onglets/About";
import Onglets from "./Onglets";

function Second() {
  return (
    <div
      className="h-screen w-screen flex flex-col gap-10 max-sm:gap-20 justify-center items-center bg-black relative"
      id="about"
    >
      <div className="h-1/4 w-8/12 max-sm:w-full flex flex-row items-center max-sm:flex-col max-sm:gap-6 ">
        <About />
        <Reseaux />
      </div>
      <Onglets />
    </div>
  );
}

export default Second;
