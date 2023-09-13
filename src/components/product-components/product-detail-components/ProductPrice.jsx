import React from "react";

const ProductPrice = ({ defaultPrice, salePrice }) => {
  if (salePrice) {
    return (
      <>
        <span className="text-muted text-decoration-line-through">
          ${defaultPrice}
        </span>
        <span>${salePrice}</span>
      </>
    );
  }

  return <span>${defaultPrice}</span>;
};

export default ProductPrice;
