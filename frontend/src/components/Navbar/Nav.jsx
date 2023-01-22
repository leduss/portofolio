import React from "react";
import { PropTypes } from "prop-types";

function Nav({ nav }) {
  return (
    <div className="nav">
      <p className="text-white hover:underline decoration-green-400 text-xl">
        {nav.nameNavigation}
      </p>
    </div>
  );
}

Nav.propTypes = {
  nav: PropTypes.objectOf.isRequired,
};

export default Nav;
