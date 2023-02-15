import React from "react";
import { MdOutlineClose } from "react-icons/all";
import gsap from "gsap";
import NavBarItems from "@components/Navbar/NavBarItems";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import navigation from "./navigation";

function SmallNavBar({ toogle, isOpen }) {
  const handleClick = () => {
    gsap.to("#nav", { duration: 1, opacity: 0 });
    toogle();
  };
  return (
    <div className="text-white z-50" id="nav">
      <ul
        id="nav"
        className={
          isOpen
            ? "h-screen w-screen flex flex-col items-center justify-center gap-6 bg-black/40 backdrop-blur-md fixed md:hidden z-50 fixed top-0 left-0"
            : "hidden -z-10"
        }
      >
        <div className="absolute left-2 top-4">
          <MdOutlineClose size="3em" onClick={handleClick} />
        </div>
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
      </ul>
    </div>
  );
}
SmallNavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogle: PropTypes.func.isRequired,
};
export default SmallNavBar;
