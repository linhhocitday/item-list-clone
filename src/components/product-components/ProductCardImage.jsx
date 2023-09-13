import React from "react";

const ProductCardImage = ({ image, name }) => {
  return <img className="card-img-top" src={image} alt={name} />;
};

export default ProductCardImage;
