import React from "react";
import NavigationLogo from "./navigation-components/NavigationLogo";
import NavigationCollapse from "./navigation-components/NavigationCollapse";
import NavigationToggleButton from "./navigation-components/NavigationToggleButton";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <NavigationLogo />
        <NavigationToggleButton />
        <NavigationCollapse />
      </div>
    </nav>
  );
};

export default Navigation;
