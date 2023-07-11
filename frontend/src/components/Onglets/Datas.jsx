import React from "react";
import { PropTypes } from "prop-types";

function Datas({ datas }) {
  return (
    <div className="" id="blabla">
      <img
        className="w-20 h-20 flex m-auto max-sm:w-12 max-sm:h-12"
        src={datas.svg}
        alt=""
        id="blabla"
      />
      <h4 className="text-white text-lg max-sm:text-[12px] flex justify-center mt-2 max-lg:mt-2">
        {datas.name_language}
      </h4>
    </div>
  );
}

Datas.propTypes = {
  datas: PropTypes.objectOf.isRequired,
};

export default Datas;
