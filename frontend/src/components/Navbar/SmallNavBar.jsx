import React from "react";
import NavBarItems from "@components/Navbar/NavBarItems";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import navigation from "./navigation";

function SmallNavBar({ isOpen }) {
  return (
    <div className="text-white z-50 ">
      <ul
        id="nav"
        className={
          isOpen
            ? "h-screen w-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-md gap-6 fixed md:hidden z-50 fixed top-0 left-0"
            : "hidden -z-10"
        }
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
      </ul>
    </div>
  );
}
SmallNavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default SmallNavBar;
