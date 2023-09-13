import React from "react";
import NavigationDropList from "./navigation-menu-components/NavigationDropList";
import NavigationMenuLinks from "./navigation-menu-components/NavigationMenuLinks";

// TODO: name, active and toggle dropdown

const NavigationMenuBar = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
      <li className="nav-item">
        <NavigationMenuLinks active name={"Home"} />
      </li>
      <li className="nav-item">
        <NavigationMenuLinks name={"About"} />
      </li>
      <li className="nav-item dropdown">
        <NavigationMenuLinks dropdown name={"Shop"} />
        <NavigationDropList />
      </li>
    </ul>
  );
};

export default NavigationMenuBar;
