import React from "react";
import NavigationMenuBar from "./navigation-collapse-components/NavigationMenuBar";
import NavigationCartButton from "./navigation-collapse-components/NavigationCartButton";

const NavigationCollapse = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavigationMenuBar />
      <NavigationCartButton />
    </div>
  );
};

export default NavigationCollapse;
