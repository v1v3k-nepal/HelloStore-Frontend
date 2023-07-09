import React, { useContext, useState } from "react";
import { Context } from "../../utils/context"
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

const SingleProduct = () => {

  const {handleAddToCart} = useContext(Context);

  const [quantity, setQuantity] = useState(1);
  const {id} = useParams();
  const data = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

  const increment = ()=>{
    setQuantity((prevState)=>prevState+1);
  };

  const decrement = ()=>{
    setQuantity((prevState)=>{
      if(prevState===1) return(1)
      return(prevState-1)
    })
  }

  if(!data) return;

  const productDetails = data?.data[0]?.attributes;

  return (
    <>
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={
              process.env.REACT_APP_DEV_URL + productDetails.img.data[0].attributes.url
              } alt="" />
          </div>

          <div className="right">
            <span className="name">{productDetails.title}</span>
            <span className="price">&#8377;{productDetails.price}</span>
            <span className="desc">{productDetails.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button className="add-to-cart-button"
              onClick={()=>{
                handleAddToCart(data?.data?.[0], quantity); 
                setQuantity(1);
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
                <span>{data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}</span>
              </span>

              <span className="text-bold">
                Share: 
                <span social-icons>
                  <FaFacebookF size={18}/>
                  <FaInstagram size={18}/>
                  <FaLinkedinIn size={18}/>
                  <FaTwitter size={18}/>
                  <FaPinterest size={18}/>
                </span>
              </span>
            </div>

          </div>
        </div>
        <RelatedProducts
          productId={id} 
          categoryId={productDetails.categories.data[0].id}
        />
      </div>
    </div>
    <ToastContainer autoClose={2000}/>
    </>
  );
};

export default SingleProduct;