import React from "react";
import { PropTypes } from "prop-types";

function Datas({ datas }) {
  return (
    <div className="flex-col">
      <img className="w-24 h-24 flex m-auto" src={datas.svg} alt="" />
      <h4 className="text-white text-6l flex justify-center mt-6">
        {datas.name_language}
      </h4>
    </div>
  );
}

Datas.propTypes = {
  datas: PropTypes.objectOf.isRequired,
};

export default Datas;
