import React, { useState } from "react";
import gsap from "gsap";
import CarouselItems from "@components/carousel/CarouselItems";
import projet from "./tools/projet";
import left from "./tools/assets/left.svg";
import right from "./tools/assets/right.svg";

export default function Carousel() {
  const [isActive, setIsActive] = useState(1);
  const [current, setCurrent] = useState(0);
  function next() {
    gsap.to("#car", {
      opacity: 0,
      duration: 1,
      delay: 0,
      x: "-100vw",
    });
    setTimeout(() => {
      gsap.fromTo(
        "#car",
        { opacity: 0, duration: 1, delay: 0, x: "50vw" },
        { opacity: 1, duration: 1, delay: 0, x: "0vw" }
      );
      const isLastSlide = isActive === projet.length;
      const index = isLastSlide ? 1 : isActive + 1;
      setIsActive(index);
    }, 600);
    setCurrent(0);
  }
  function back() {
    gsap.to("#car", {
      opacity: 0,
      duration: 1,
      delay: 0,
      x: "100vw",
    });
    setTimeout(() => {
      gsap.fromTo(
        "#car",
        { opacity: 0, duration: 1, delay: 0, x: "-50vw" },
        { opacity: 1, duration: 1, delay: 0, x: "0vw" }
      );
      const isFirstSlide = isActive === 1;
      const index = isFirstSlide ? projet.length : isActive - 1;
      setIsActive(index);
    }, 600);
    setCurrent(0);
  }
  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
    const tl = gsap.timeline();
    tl.to("#bla", {
      opacity: 0,
      duration: 0,
      delay: 0,
    });
    setTimeout(() => {
      tl.fromTo(
        "#bla",
        { opacity: 0, duration: 1, delay: 0, x: "-20vw" },
        { opacity: 1, duration: 1, delay: 0, x: "0vw" }
      );
    }, 100);
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="w-full h-3/6 mt-36 max-lg:mt-16 max-lg:h-4/6" id="car">
        {projet
          .filter((el) => el.id === isActive)
          .map((el) => (
            <div
              className="flex gap-6 items-center justify-center w-10/12 h-full m-auto max-lg:flex-col max-lg:w-11/12"
              key={el.id}
            >
              <div className="w-[60%] h-full flex gap-3 justify-center items-center max-lg:w-[100%] max-lg:h-[60%]">
                <CarouselItems
                  el={el}
                  current={current}
                  setCurrent={setCurrent}
                  goToSlide={goToSlide}
                  autoPlay
                  autoPlaySpeed={10000}
                />
              </div>
              <div className="w-[40%] h-full flex flex-col justify-center max-lg:w-[100%] ">
                <h2 className="text-white text-3xl max-lg:text-2xl">
                  {el.title} : {el.name}
                </h2>
                <p className="text-white text-justify">{el.theme}</p>
                {el.lien !== "" && (
                  <a
                    className="text-green-400 cursor-pointer"
                    href={el.lien}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lien
                  </a>
                )}
                <div className="flex flex-wrap w-[60%] max-sm:w-[100%] items-center gap-10 pt-8 ">
                  <img
                    className="w-16 h-16 max-lg:w-10 max-sm:h-10"
                    src={el.techno.src1}
                    alt="logo techno"
                  />
                  <img
                    className="w-16 h-16 max-lg:w-10 max-sm:h-10"
                    src={el.techno.src2}
                    alt="logo techno"
                  />
                  <img
                    className="w-16 h-16 max-lg:w-10 max-sm:h-10 "
                    src={el.techno.src3}
                    alt="logo techno"
                  />
                  <img
                    className="w-16 h-16 max-lg:w-10 max-sm:h-10"
                    src={el.techno.src4 || ""}
                    alt="logo techno"
                  />
                  <img
                    className="w-16 h-16 max-lg:w-10 max-sm:h-10"
                    src={el.techno.src5 || ""}
                    alt="logo techno"
                  />
                  <img
                    className="w-16 h-16 max-lg:w-10 max-sm:h-10"
                    src={el.techno.src6 || ""}
                    alt="logo techno"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-8 flex gap-20">
        <button type="button" onClick={back} className="">
          <img src={left} alt="" className="w-20 max-sm:w-16" />
        </button>
        <button type="button" onClick={next} className="">
          <img src={right} alt="" className="w-20 max-sm:w-16" />
        </button>
      </div>
    </div>
  );
}
