import React from "react";
import "./ProductSkeleton.scss";

const ProductSkeleton = ({ count }) => {
  return (
    <div className="prod-container">
      {Array(count).fill(0).map((item, index)=>(
        <div key={index} className="prod-card">
        <div className="thumbnail"></div>

        <div className="prod-details">
          <div className="name"></div>
          <div className="price"></div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
