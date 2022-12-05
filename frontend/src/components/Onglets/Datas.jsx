import React from "react";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

function Datas({ datas }) {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 1 }}
      className="flex-col"
    >
      <img className="w-28 h-28 flex m-auto" src={datas.svg} alt="" />
      <h4 className="text-white text-6l flex justify-center mt-6">
        {datas.name_language}
      </h4>
    </motion.div>
  );
}

Datas.propTypes = {
  datas: PropTypes.string.isRequired,
};

export default Datas;
