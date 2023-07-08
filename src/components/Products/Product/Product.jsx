import React from 'react'
import "./Product.scss"
import {useNavigate} from "react-router-dom";

const Product = ({productData, id}) => {
  const navigate = useNavigate();
  return (
    <div className='product-card' 
    onClick={ ()=> navigate("/product/"+id)}>

      <div className="thumbnail">
        <img src={
          process.env.REACT_APP_DEV_URL + productData?.img?.data[0].attributes.url
          } alt="" />
      </div>

      <div className="prod-details">
        <div className="name">{productData.title}</div>
        <div className="price">&#8377;{productData.price}</div>
      </div>

    </div>
  )
}

export default Product;