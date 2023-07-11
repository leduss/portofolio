import React, { useState } from "react";
import gsap from "gsap";
import style from "./tools/style";
import data from "./tools/data";
import Datas from "./Datas";
import wild from "./tools/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png";

function Onglets() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    const tl = gsap.timeline();
    tl.to("#blabla", {
      opacity: 0,
      duration: 0,
      delay: 0,
    });
    setTimeout(() => {
      tl.fromTo(
        "#blabla",
        { opacity: 0, duration: 1, delay: 0, x: "-20vw" },
        { opacity: 1, duration: 1, delay: 0, x: "0vw" }
      );
    }, 100);
  };
  return (
    <div className="w-8/12 max-lg:w-11/12 rounded-b-xl ">
      <h1 className="text-white mb-2 text-xl">Mes compétences</h1>
      <div className="flex gap-6 items-end">
        <button
          type="button"
          onClick={() => toggleTab(0)}
          className={
            toggleState === 0
              ? "p-4 max-lg:p-2 text-center w-1/3 max-lg:w-80 bg-zinc-800 text-white box-content relative rounded-t-xl border-t-2 border-green-500 scale-100 max-lg:text-[12px]"
              : "p-4 max-lg:p-1 text-center w-1/3 max-lg:w-80 h-3 max-lg:h-6 text-sm bg-zinc-900 border-b-2 border-green-500 text-white box-content relative outline-none rounded-t-xl max-lg:text-[8px]"
          }
        >
          Mes formations
        </button>
        {style.map((styles) => (
          <button
            className={
              toggleState === styles.id
                ? "p-4 max-lg:p-2 text-center w-1/3 max-lg:w-80 bg-zinc-800 text-white box-content relative rounded-t-xl border-t-2 border-green-500 scale-100 max-lg:text-[12px]"
                : "p-4 max-lg:p-1 text-center w-1/3 max-lg:w-80 h-3 max-lg:h-6 text-sm bg-zinc-900 border-b-2 border-green-500 text-white box-content relative outline-none rounded-t-xl max-lg:text-[8px]"
            }
            type="button"
            onClick={() => toggleTab(styles.id)}
            key={styles.id}
          >
            {styles.name_style}
          </button>
        ))}
      </div>

      <div className="grow">
        <div className="bg-zinc-800 p-8 max-sm:p-4 w-full rounded-b-xl flex  justify-center items-center">
          <div
            className={
              toggleState === 0
                ? "text-white flex flex-row max-sm:flex-col items-center gap-12 max-sm:gap-3"
                : "hidden"
            }
            id="blabla"
          >
            <img src={wild} alt="" className="w-60 max-sm:w-32" />
            <div className="max-sm:text-sm text-justify">
              <p className="text-white mb-5 text-xl max-sm:text-lg">
                Formation développeur web à la Wild Code School de Bordeaux
              </p>
              <ul className="flex flex-col gap-2 list-disc ml-3">
                <li>du 12 Septembre 2022 au 10 Février 2023: React, Node JS</li>
                <li>du 04 Avril 2023 au 28 Juin 2023: Java, Angular</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-32 gap-y-6 max-sm:gap-x-8 justify-center">
            {data.map((datas) => (
              <div
                className={toggleState === datas.id_style ? "" : "hidden"}
                key={datas.id}
              >
                <Datas datas={datas} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onglets;
