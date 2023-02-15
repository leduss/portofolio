import React from "react";
import { PropTypes } from "prop-types";

function Datas({ datas }) {
  return (
    <div className="">
      <img
        className="w-24 h-24 flex m-auto max-lg:w-16 max-lg:h-16"
        src={datas.svg}
        alt=""
      />
      <h4 className="text-white text-6l max-lg:text-sm flex justify-center mt-6 max-lg:mt-2">
        {datas.name_language}
      </h4>
    </div>
  );
}

Datas.propTypes = {
  datas: PropTypes.objectOf.isRequired,
};

export default Datas;
