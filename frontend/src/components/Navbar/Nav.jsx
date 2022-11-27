import React from "react";
import { PropTypes } from "prop-types";

function Nav({ navlink }) {
  return (
    <div className="nav">
      <p className="text-white hover:underline decoration-green-400 text-xl">
        {navlink.nameNavigation}
      </p>
    </div>
  );
}

Nav.propTypes = {
  navlink: PropTypes.string.isRequired,
};

export default Nav;
