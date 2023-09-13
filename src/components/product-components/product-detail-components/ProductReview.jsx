import React from "react";
import ProductReviewStar from "./ProductReviewStar";

const ProductReview = ({ review }) => {
  return (
    <div className="d-flex justify-content-center small text-warning mb-2">
      <ProductReviewStar />
      <ProductReviewStar />
      <ProductReviewStar />
      <ProductReviewStar />
      <ProductReviewStar />
    </div>
  );
};

export default ProductReview;
