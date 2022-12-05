/* eslint-disable import/no-unresolved */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion } from "framer-motion";
import projet from "./tools/projet";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <motion.div
      initial={{ x: -200, y: -200, scale: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex justify-center items-center w-screen"
    >
      <Swiper
        navigation
        modules={[Navigation]}
        className="w-[120vmin] h-[100%]"
      >
        {projet.map((element) => (
          <SwiperSlide className="flex flex-col items-center justify-center divide-y divide-green-400">
            <div className="w-[80%] h-[50%] flex flex-col justify-center items-center">
              <img
                className="w-[100%] h-[90%] rounded-2xl "
                src={element.img}
                alt="screen site"
              />
            </div>
            <div className="w-[80%] pt-2 ">
              <h2 className="text-white text-3xl">
                {element.title} : {element.name}
              </h2>
              <p className="text-white text-justify">{element.theme}</p>
              <a
                className="text-green-400 cursor-pointer"
                href={element.lien}
                target="_blank"
                rel="noreferrer"
              >
                Lien
              </a>
              <div className="flex items-center space-x-20 pt-8">
                <img
                  className="w-16 h-16 animate-bounce"
                  src={element.techno.src1}
                  alt="logo techno"
                />
                <img
                  className="w-16 h-16 animate-bounce"
                  src={element.techno.src2}
                  alt="logo techno"
                />
                <img
                  className="w-16 h-16 animate-bounce"
                  src={element.techno.src3}
                  alt="logo techno"
                />
                <img
                  className="w-16 h-16 animate-bounce"
                  src={element.techno.src4}
                  alt="logo techno"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
