import React from "react";
import NavigationDropListLinks from "./NavigationDropListLinks";
import NavigationDropListLine from "./NavigationDropListLine";

const NavigationDropList = () => {
  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <NavigationDropListLinks />
      </li>
      <li>
        <NavigationDropListLine />
      </li>
      <li>
        <NavigationDropListLinks />
      </li>
      <li>
        <NavigationDropListLinks />
      </li>
    </ul>
  );
};

export default NavigationDropList;
