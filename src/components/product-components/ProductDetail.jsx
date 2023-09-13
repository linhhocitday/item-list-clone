import React from "react";
import ProductName from "./product-detail-components/ProductName";
import ProductReview from "./product-detail-components/ProductReview";
import ProductPrice from "./product-detail-components/ProductPrice";

const ProductDetail = ({ name, defaultPrice, salePrice, review }) => {
  return (
    <div className="card-body p-4">
      <div className="text-center">
        {/* Product name*/}
        <ProductName name={name} />
        {/* Product reviews*/}
        {review && <ProductReview />}
        {/* Product price*/}
        <ProductPrice defaultPrice={defaultPrice} salePrice={salePrice} />
      </div>
    </div>
  );
};

export default ProductDetail;
