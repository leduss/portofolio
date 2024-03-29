import React from "react";
import { PropTypes } from "prop-types";
import { NavHashLink } from "react-router-hash-link";

function NavBarItems({ nav }) {
  return (
    <div className="nav">
      <NavHashLink smooth to={`#${nav.link}`}>
        <p
          className="text-white hover:underline decoration-green-400 text-xl max-md:text-4xl"
          role="presentation"
        >
          {nav.title}
        </p>
      </NavHashLink>
    </div>
  );
}

NavBarItems.propTypes = {
  nav: PropTypes.objectOf.isRequired,
};

export default NavBarItems;
