import React from "react";
import Carousel from "./Carousel";

function Thirty() {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-black relative"
      id="project"
    >
      <h1 className="text-white absolute top-2 left-8 text-3xl max-sm:text-2xl max-sm:left-3">
        Mes projets à la WILD CODE SCHOOL
      </h1>
      <Carousel />
    </div>
  );
}

export default Thirty;
