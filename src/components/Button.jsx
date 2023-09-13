import React from "react";

const Button = ({ onClick, children }) => {
  //* Use Hooks at here

  // function handleClick() {
  //   console.log("Clicked");
  // }

  const x = 1;

  function handleClick(e) {
    onClick(e, x);
  }

  return (
    <button
      // onClick={() => {
      //   console.log("Clicked"); /* should avoid */
      // }}

      // onClick={(e) => onClick(e, x)}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
