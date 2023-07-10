import React, { useContext } from 'react'
import { MdClose } from "react-icons/md";
import "./CartItem.scss"
import {Context} from "../../../utils/context"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const CartItem = () => {

  const {cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context)

  return (
    <div className='cart-products'>
      {cartItems.map((item) => (
              <div className="cart-product" key={item.id}>
              <div className="img-container">
                <img src={
                  process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url
                  } alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <MdClose className='close-btn' 
                onClick={()=>{handleRemoveFromCart(item);
                  toast.info("Product Removed from Cart")}}/>
                <ToastContainer/>
                <div className="quantity-buttons">
                      <span onClick={()=> handleCartProductQuantity("decrement", item)}>-</span>
                      <span>{item.attributes.quantity}</span>
                      <span onClick={()=> handleCartProductQuantity("increment", item)}>+</span>
                </div>
      
                <div className="text">
                  <span>{item.attributes.quantity}</span>
                  <span>x</span>
                  <span>&#8377;{item.attributes.price}</span>
                  <span>=</span>
                  <span className='highlight'>&#8377;{item.attributes.quantity*item.attributes.price}</span>
                </div>
              </div>
            </div>
      ))}
    </div>
  )
}

export default CartItem;