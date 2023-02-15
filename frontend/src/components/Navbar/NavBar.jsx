import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineMenu } from "react-icons/all";
import SmallNavBar from "@components/Navbar/SmallNavBar";
import gsap from "gsap";
import navigation from "./navigation";
import NavBarItems from "./NavBarItems";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    gsap.to("#nav", { duration: 1, opacity: 1 });
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full flex justify-end items-center z-50">
      <div className="text-white absolute left-2 top-4 md:hidden">
        <MdOutlineMenu onClick={toggle} size="3em" />
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
