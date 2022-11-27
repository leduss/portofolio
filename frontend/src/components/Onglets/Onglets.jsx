import React, { useState } from "react";

function Onglets() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="flex-col w-4/5 border border-white m-auto break-all rounded-xl">
      <div className="flex">
        <button
          className={
            toggleState === 1
              ? "p-4 text-center w-6/12 bg-zinc-700 border-b-2 border-transparent  text-white underline decoration-green-400 box-content relative outline-none rounded-tl-xl"
              : "p-4 text-center w-6/12 bg-zinc-800 border-b-2 border-green-400 text-white box-content relative outline-none rounded-tl-xl"
          }
          type="button"
          onClick={() => toggleTab(1)}
        >
          1
        </button>
        <button
          className={
            toggleState === 2
              ? "p-4 text-center w-6/12 bg-zinc-700 border-b-2 border-transparent text-white underline decoration-green-400 box-content relative outline-none"
              : "p-4 text-center w-6/12 bg-zinc-800 border-b-2 border-green-400 text-white box-content relative"
          }
          type="button"
          onClick={() => toggleTab(2)}
        >
          2
        </button>
        <button
          className={
            toggleState === 3
              ? "p-4 text-center w-6/12 bg-zinc-700 border-b-2 border-transparent text-white underline decoration-green-400 box-content relative outline-none"
              : "p-4 text-center w-6/12 bg-zinc-800 border-b-2 border-green-400 text-white box-content relative"
          }
          type="button"
          onClick={() => toggleTab(3)}
        >
          3
        </button>
        <button
          className={
            toggleState === 4
              ? "p-4 text-center w-6/12 bg-zinc-700 border-b-2 border-transparent text-white underline decoration-green-400 box-content relative outline-none rounded-tr-xl"
              : "p-4 text-center w-6/12 bg-zinc-800 border-b-2 border-green-400 text-white box-content relative rounded-tr-xl"
          }
          type="button"
          onClick={() => toggleTab(4)}
        >
          4
        </button>
      </div>

      <div className="grow">
        <div
          className={
            toggleState === 1
              ? "bg-zinc-700 p-6 w-full h-40 block rounded-b-xl"
              : "p-6 w-full h-full hidden"
          }
        >
          <h2> 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={
            toggleState === 2
              ? "bg-zinc-700 p-6 w-full h-40 block rounded-b-xl"
              : "bg-orange-400 p-6 w-full h-full hidden"
          }
        >
          <h2> 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={
            toggleState === 3
              ? "bg-zinc-700 p-6 w-full h-40 block rounded-b-xl"
              : "bg-orange-400 p-6 w-full h-full hidden"
          }
        >
          <h2> 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={
            toggleState === 4
              ? "bg-zinc-700 p-6 w-full h-40 block rounded-b-xl"
              : "bg-orange-400 p-6 w-full h-full hidden"
          }
        >
          <h2> 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Onglets;
