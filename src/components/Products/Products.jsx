import React from "react";
import Product from "./Product/Product";
import "./Products.scss";
import Loading from "../../assets/loading.png"

const Products = ({ innerPage, headingText, products }) => {
  if (!products) {
    return (
      <div className="progress-container">
        <div>
          <img className="loading-logo" src={Loading} alt="" />
        </div>
        <div><p>Fetching Product Data, Please Wait...</p></div>
      </div>
    );
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
