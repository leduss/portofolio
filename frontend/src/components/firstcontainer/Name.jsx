import React from "react";
import { motion } from "framer-motion";

function Name() {
  return (
    <div className="flex flex-col pt-48 pl-36 max-lg:pl-6 w-5/5 max-lg:w-full max-lg:gap-3">
      <motion.h1
        initial={{ x: -200, y: -200, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-white text-8xl max-lg:text-6xl"
      >
        Julien
      </motion.h1>
      <motion.h1
        initial={{ x: -200, y: 200, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="text-white text-8xl max-lg:text-6xl"
      >
        Dussart
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="text-white text-8xl max-lg:text-6xl"
      >
        Développeur Web
      </motion.h1>
    </div>
  );
}

export default Name;
