import React from "react";
import NavigationCartIcon from "./navigation-cart-components/NavigationCartIcon";
import NavigationCartItemAmount from "./navigation-cart-components/NavigationCartItemAmount";

const NavigationCartButton = () => {
  return (
    <form className="d-flex">
      <button className="btn btn-outline-dark" type="submit">
        <NavigationCartIcon />
        Cart
        <NavigationCartItemAmount />
      </button>
    </form>
  );
};

export default NavigationCartButton;
