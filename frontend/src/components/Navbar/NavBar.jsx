import React, { useState } from "react";
import { motion } from "framer-motion";
import SmallNavBar from "@components/Navbar/SmallNavBar";
import gsap from "gsap";
import { Squash as Hamburger } from "hamburger-react";
import navigation from "./navigation";
import NavBarItems from "./NavBarItems";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    const tl = gsap.timeline();
    tl.to("#nav", {
      opacity: 0,
      duration: 0,
      delay: 0,
    });
    setTimeout(() => {
      tl.fromTo(
        "#nav",
        { opacity: 0, duration: 1, delay: 0, y: "-100vh" },
        { opacity: 1, duration: 1, delay: 0, y: "0vh" }
      );
    }, 100);
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full flex justify-end items-center z-50">
      <div
        className="text-white md:hidden w-32 h-32 z-50 cursor-pointer absolute left-4 top-4"
        onClick={toggle}
        role="presentation"
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={40}
          duration={0.8}
          rounded
        />
      </div>
      <motion.ul
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          delay: 3,
        }}
        initial={{ x: 0, y: -200, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        className="hidden md:flex gap-20 p-6"
      >
        {navigation.map((nav) => (
          <motion.li
            whileHover={{ scale: 1.2, rotate: 5 }}
            key={nav.id}
            id={nav.id}
            className="list-none"
          >
            <NavBarItems nav={nav} />
          </motion.li>
        ))}
      </motion.ul>
      <div className="fixed top-0 left-0">
        <SmallNavBar toogle={toggle} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Navbar;
