import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../utils/context";
import "./Shipping.scss";

const Shipping = () => {
  const { cartItems, cartSubTotal, shippingCost } = useContext(Context);

  const placeOrder = ()=>{
    
  }

  return (
    <div className="container">
      <div className="billing-details">
        <h1>Billing Details</h1>
        <form action="" className="form">
          <div className="column-left">
            <div className="input-box">
              <label htmlFor="fullname">
                Full Name <span>*</span>
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="mobile">
                Mobile Number <span>*</span>
              </label>
              <input
                id="mobile"
                type="phone"
                placeholder="Mobile Number"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="select-box">
              <label htmlFor="province">
                Province <span>*</span>
              </label>
              <select name="province" id="province">
                <option hidden>Province</option>
                <option value="koshi">Koshi</option>
                <option value="madesh">Madesh</option>
                <option value="bagmati">Bagmati</option>
                <option value="gandaki">Gandaki</option>
                <option value="lumbini">Lumbini</option>
                <option value="karnali">Karnali</option>
                <option value="sudurpaschim">Sudur Paschim</option>
              </select>
            </div>
          </div>

          <div className="column-right">
            <div className="input-box">
              <label htmlFor="city">
                Your City <span>*</span>
              </label>
              <input
                id="city"
                type="text"
                placeholder="City Name"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="area">
                Area <span>*</span>
              </label>
              <input
                id="area"
                type="text"
                placeholder="Area"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="address">
                Address <span>*</span>
              </label>
              <input
                id="address"
                type="text"
                placeholder="Street Name/ House Number"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="landmark">
                Landmark <span className="optional">(optional)</span>
              </label>
              <input
                id="landmark"
                type="text"
                placeholder="E.g. Besides Bus Station"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="order-details">
        <h1>Order Summary</h1>
        <div className="content">
          <div className="title">
            <div>Product</div>
            <div>Subtotal</div>
          </div>
          {cartItems.map((item) => (
            <>
              <div className="product-details">
                <div className="product-title">{item.attributes.title}</div>
                <div className="product-subtotal">
                  &#8377;{item.attributes.price}
                </div>
              </div>

              <div className="product-image">
                <img src={item.attributes.img.data[0].attributes.url} alt="" />
              </div>

              <div className="quantity">
                Quantity: {item.attributes.quantity}
              </div>

              <div className="product-total">
                <div>Product Total:</div>
                <div>
                  <span>
                    {item.attributes.quantity} * &#8377;{item.attributes.price}{" "}
                    = &#8377;{item.attributes.quantity * item.attributes.price}
                  </span>
                </div>
              </div>
            </>
          ))}

          <div className="shipping-cost">
            <div>Shipping Cost:</div>
            <div>&#8377;{shippingCost}</div>
          </div>

          <div className="total">
            <div>Total Payment:</div>
            <div>&#8377;{cartSubTotal + shippingCost}</div>
          </div>

          <button onClick={()=> placeOrder()}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
