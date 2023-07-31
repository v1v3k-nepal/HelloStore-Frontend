import React, { useContext } from 'react'
import {Context} from "../../utils/context"
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem"
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const navigate = useNavigate();
  const {cartItems, setShowCart, cartSubTotal, setShippingCost} = useContext(Context);
  // const cartItems = localStorage.getItem("cartItemsLocal");

  return (
    <div className='cart-panel'>
      <div className="opac-layer"></div>
      <div className="cart-content">

        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={()=> setShowCart(false)}>
            <MdClose size={18}/>
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItems?.length && (
                  <div className="empty-cart">
                  <BsCartX/>
                  <span>No Products in the Cart.</span>
                  <button className="return-cta" 
                  onClick={()=> {navigate("/hellostore"); setShowCart(false)}}>
                    RETURN TO SHOP
                  </button>
                </div>
          )
        }

        {!!cartItems?.length && (
                  <>
                  <CartItem/>
                  <div className="cart-footer">
                    <div className="subtotal">
                      <span className="text">Subtotal:</span>
                      <span className="text total">&#8377;{cartSubTotal}</span>
                    </div>
          
                    <div className="button">
                      {/* <button className='checkout-cta' onClick={()=>handleKhaltiPayment(cartItems,cartSubTotal)}>Checkout</button> */}
                      <button className='checkout-cta' onClick={()=>{navigate("/shipping"); setShowCart(false)}}>Checkout</button>
                    </div>
                    
                  </div>
                  </>
        )}

      </div>
    </div>
  )
}

export default Cart;