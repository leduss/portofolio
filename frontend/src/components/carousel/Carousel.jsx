import React from "react";
import gsap from "gsap";
import projet from "./tools/projet";
import left from "./tools/assets/left.svg";
import right from "./tools/assets/right.svg";

export default function Carousel() {
  const [isActive, setIsActive] = React.useState(1);
  function next() {
    if (isActive < projet.length) {
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
        setIsActive((i) => {
          if (i >= projet.length) return isActive;
          return i + 1;
        });
      }, 600);
    }
  }
  function back() {
    if (isActive > 1) {
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
        setIsActive((i) => {
          if (i <= projet[0]) return isActive;
          return i - 1;
        });
      }, 600);
    }
  }
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
              <div className="w-[60%] h-full flex justify-center items-center max-lg:w-[100%] max-lg:h-[60%]">
                <img
                  className="w-[100%] h-full rounded-2xl "
                  src={el.img}
                  alt="screen site"
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
                <div className="flex items-center space-x-10 pt-8">
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
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={back}
          className={isActive === 1 ? "opacity-0" : "opacity-100"}
        >
          <img src={left} alt="" className="w-20 max-sm:w-16" />
        </button>
        <button
          type="button"
          onClick={next}
          className={isActive === projet.length ? "opacity-0" : "opacity-100"}
        >
          <img src={right} alt="" className="w-20 max-sm:w-16" />
        </button>
      </div>
    </div>
  );
}
