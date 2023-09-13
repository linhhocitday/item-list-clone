import React from "react";
import PropTypes from "prop-types";

const NavigationMenuLinks = ({ name, dropdown, active }) => {
  if (dropdown) {
    return (
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </a>
    );
  }

  return (
    <a
      className={active ? "nav-link active" : "nav-link"}
      aria-current="page"
      href="#!"
    >
      {name}
    </a>
  );
};

NavigationMenuLinks.propTypes = {
  name: PropTypes.string.isRequired,
  dropdown: PropTypes.bool,
  active: PropTypes.bool,
};

export default NavigationMenuLinks;
