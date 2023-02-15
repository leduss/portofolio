import React, { useState } from "react";
import style from "./tools/style";
import data from "./tools/data";
import Datas from "./Datas";

function Onglets() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="w-8/12 max-lg:w-11/12 rounded-b-xl ">
      <div className="flex gap-6 items-end">
        <button
          className={
            toggleState === 1
              ? "p-4 max-lg:p-2 text-center w-52 max-lg:w-80 bg-zinc-800 text-white box-content relative rounded-t-xl border-t-2 border-green-500 scale-100 max-lg:text-[12px]"
              : "p-4 max-lg:p-1 text-center w-52 max-lg:w-80 h-3 max-lg:h-6 text-sm bg-zinc-900 border-b-2 border-green-500 text-white box-content relative outline-none rounded-t-xl max-lg:text-[12px]"
          }
          type="button"
          onClick={() => toggleTab(1)}
        >
          MOI
        </button>
        {style.map((styles) => (
          <button
            className={
              toggleState === styles.id
                ? "p-4 max-lg:p-2 text-center w-52 max-lg:w-80 bg-zinc-800 text-white box-content relative rounded-t-xl border-t-2 border-green-500 scale-100 max-lg:text-[12px]"
                : "p-4 max-lg:p-1 text-center w-52 max-lg:w-80 h-3 max-lg:h-6 text-sm bg-zinc-900 border-b-2 border-green-500 text-white box-content relative outline-none rounded-t-xl max-lg:text-[12px]"
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
        <div className="bg-zinc-800 p-6 w-full  rounded-b-xl flex gap-24 justify-center items-center">
          <div className={toggleState === 1 ? "text-white" : "hidden"}>
            <h2>kjnbkj</h2>
            <h2>kjnbkj</h2>
            <h2>kjnbkj</h2>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
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
