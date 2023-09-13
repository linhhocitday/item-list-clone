import React from "react";
import HeaderHeading from "./HeaderHeading";
import HeaderIntroduceText from "./HeaderIntroduceText";

const HeaderTextContainer = () => {
  return (
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
        <HeaderHeading />
        <HeaderIntroduceText />
      </div>
    </div>
  );
};

export default HeaderTextContainer;
