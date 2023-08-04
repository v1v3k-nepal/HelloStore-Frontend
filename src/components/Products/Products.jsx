import React from "react";
import Product from "./Product/Product";
import "./Products.scss";
import ProductSkeleton from "./Product/ProductSkeleton";

const Products = ({ innerPage, headingText, products }) => {

  if (!products) {
    return (<ProductSkeleton count={22}/>);

  } else
    return (
      <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
          {products?.data?.map((item) => (
            <Product key={item.id} id={item.id} productData={item.attributes} />
          ))}
        </div>
      </div>
    );
};

export default Products;
