import React from "react";
import ProductButtonContent from "./ProductButtonContent";

const ProductCardActionButton = () => {
  return (
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        <ProductButtonContent />
      </div>
    </div>
  );
};

export default ProductCardActionButton;
