import React from "react";
import PropTypes from "prop-types";
import ProductCardTag from "./product-components/ProductCardTag";
import ProductCardImage from "./product-components/ProductCardImage";
import ProductDetail from "./product-components/ProductDetail";
import ProductCardActionButton from "./product-components/ProductCardActionButton";

/**
 * TODO: image, name, price (default and sale), review
 */

const ProductCard = ({
  thumbnail,
  title,
  price,
  discountPercentage,
  rating,
}) => {
  return (
    <div className="card h-100">
      {/* Sale badge*/}
      {discountPercentage && <ProductCardTag />}
      {/* Product image*/}
      <ProductCardImage image={thumbnail} name={title} />
      {/* Product details*/}
      <ProductDetail
        name={title}
        review={rating}
        defaultPrice={price}
        salePrice={price - (discountPercentage * price) / 100}
      />
      {/* Product actions*/}
      <ProductCardActionButton />
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
  review: PropTypes.bool,
};

export default ProductCard;
