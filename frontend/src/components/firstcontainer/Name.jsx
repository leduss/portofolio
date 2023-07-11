import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Name() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(500 - Math.random() * 100);
  const toRotate = [
    "React",
    "Angular",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "Java",
    "Spring",
    "MySQL",
  ];
  const period = 3000;
  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(delta / 3);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
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
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="text-white text-8xl max-lg:text-6xl"
      >
        {text}
      </motion.h1>
    </div>
  );
}

export default Name;
