import React from "react";
import { PropTypes } from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

function Nav({ nav }) {
  return (
    <div className="nav">
      <Link smooth to={`#${nav.ju}`}>
        <p
          className="text-white hover:underline decoration-green-400 text-xl"
          role="presentation"
        >
          {nav.nameNavigation}
        </p>
      </Link>
    </div>
  );
}

Nav.propTypes = {
  nav: PropTypes.objectOf.isRequired,
};

export default Nav;
