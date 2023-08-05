import React, { useContext, useState } from "react";
import { Context } from "../../utils/context";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SingleProduct = () => {
  const { handleAddToCart } = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();


    const apiData = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const productDetails = apiData?.data?.[0].attributes;

  // let singleProduct = products.data.filter((item)=> item.id ==id);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  // if (!apiData) return <SingleProductSkeleton/>;

    return (
      <>
        <div className="single-product-main-content">
          <div className="layout">
            <div className="single-product-page">
              <div className="left">
                {productDetails? (<img
                  src={
                    // process.env.REACT_APP_DEV_URL + productDetails.img.data[0].attributes.url
                    productDetails?.img.data[0].attributes.url
                  }
                  alt="" />): (<div className="skeleton-img">
                    <Skeleton height={"100%"}/>
                    </div>)}
              </div>

              <div className="right">
                <span className="name">{productDetails?.title || <Skeleton count={1.8}/>}</span>
                <span className="price"><span>{(productDetails?.price)? "NRs " : ""}</span>{productDetails?.price || <Skeleton count={0.4}/>}</span>
                <span className="desc">{productDetails?.desc || <Skeleton count={7.8}/>}</span>

                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <span onClick={decrement}>-</span>
                    <span>{quantity || 1}</span>
                    <span onClick={increment}>+</span>
                  </div>

                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      // handleAddToCart(data?.data?.[0], quantity);
                      handleAddToCart(apiData[0], quantity);
                      toast.success("Product Added To Cart");
                    }}>
                    <FaCartPlus size={20} />
                    ADD TO CART
                  </button>
                </div>

                <div className="divider"></div>

                <div className="info-item">
                  <span className="text-bold">
                    Category:
                    <span>{productDetails?.categories?.data[0]?.attributes?.title}</span>
                  </span>

                  <span className="text-bold">
                    Share:
                    <span className="social-icons">
                      <FaFacebookF size={18} />
                      <FaInstagram size={18} />
                      <FaLinkedinIn size={18} />
                      <FaTwitter size={18} />
                      <FaPinterest size={18} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {productDetails? (<RelatedProducts productId={id} categoryId={productDetails?.categories.data[0].id} />) : ""}
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </>
    );
};

export default SingleProduct;
