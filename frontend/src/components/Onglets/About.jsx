import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  return (
    <div className="w-4/6 max-sm:w-10/12 h-full py-2 pl-5 pr-10 flex items-center">
      <AnimatePresence>
        <motion.p
          className="text-white text-lg max-sm:text-sm text-justify"
          initial={{ x: -200, y: -200, scale: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Bonjour tout le monde, je m'appelle Julien. Issue d'une reconversion,
          je suis actuellement développeur web.
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default About;
