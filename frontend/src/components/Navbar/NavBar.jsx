import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import navigation from "./navigation";

function Navbar() {
  return (
    <motion.ul
      transition={{
        duration: 5,
        type: "spring",
        stiffness: 100,
        delay: 3,
      }}
      initial={{ x: 0, y: -200, scale: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      className="fixed right-0 flex gap-20 mt-3 mr-8 z-50"
    >
      {navigation.map((navlink) => (
        <motion.li
          whileHover={{ scale: 1.2, rotate: 5 }}
          key={navlink.id}
          id={navlink.id}
          className="list-none"
        >
          <Nav navlink={navlink} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Navbar;
