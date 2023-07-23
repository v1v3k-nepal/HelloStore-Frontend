import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../utils/context";
import "./Shipping.scss";
import { useFormik } from "formik";
import { shippingDataSchema } from "../../../schemas";
import { handleKhaltiPayment } from "../../PaymentStatus/paymentHandle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  fullname: "",
  mobile: "",
  email: "",
  province: "",
  city: "",
  area: "",
  address: "",
  landmark: "",
};

const Shipping = () => {
  const { cartItems, cartSubTotal, shippingCost } = useContext(Context);

  const { values, errors, isValid, touched, handleSubmit, submitForm, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: shippingDataSchema,
    onSubmit: (values, action) => {
      placeOrder(values);
      // action.resetForm();
    },
  });

  const placeOrder = (shippingData) => {
    console.log(shippingData);

    const customerInfo = {
      name: shippingData.fullname,
      email: shippingData.email,
      phone: shippingData.mobile,
    };

    console.log(customerInfo);

    const paymentResponse = handleKhaltiPayment(cartItems, cartSubTotal, customerInfo);
    if (paymentResponse.payment_url == undefined) {
      toast.error("Payment Validation Error");
    }
  };

  const handleToast = () => {
    toast.error("Please Enter Valid Shipping Data");
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <ToastContainer />
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
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Full Name"
                // required
              />
              {errors.fullname && touched.fullname ? <p className="form-errors">{errors.fullname}</p> : null}
            </div>

            <div className="input-box">
              <label htmlFor="mobile">
                Mobile Number <span>*</span>
              </label>
              <input
                id="mobile"
                type="phone"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Mobile Number"
                // required
              />
              {errors.mobile && touched.mobile ? <p className="form-errors">{errors.mobile}</p> : null}
            </div>

            <div className="input-box">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email Address"
                // required
              />
              {errors.email && touched.email ? <p className="form-errors">{errors.email}</p> : null}
            </div>

            <div className="select-box">
              <label htmlFor="province">
                Province <span>*</span>
              </label>
              <select name="province" value={values.province} onChange={handleChange} onBlur={handleBlur} id="province">
                <option hidden>Province</option>
                <option value="koshi">Koshi</option>
                <option value="madesh">Madesh</option>
                <option value="bagmati">Bagmati</option>
                <option value="gandaki">Gandaki</option>
                <option value="lumbini">Lumbini</option>
                <option value="karnali">Karnali</option>
                <option value="sudurpaschim">Sudur Paschim</option>
              </select>
              {errors.province && touched.province ? <p className="form-errors">{errors.province}</p> : null}
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
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="City Name"
                // required
              />
              {errors.city && touched.city ? <p className="form-errors">{errors.city}</p> : null}
            </div>

            <div className="input-box">
              <label htmlFor="area">
                Area <span>*</span>
              </label>
              <input
                id="area"
                type="text"
                name="area"
                value={values.area}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Area"
                // required
              />
              {errors.area && touched.area ? <p className="form-errors">{errors.area}</p> : null}
            </div>

            <div className="input-box">
              <label htmlFor="address">
                Address <span>*</span>
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Street Name/ House Number"
                // required
              />
              {errors.address && touched.address ? <p className="form-errors">{errors.address}</p> : null}
            </div>

            <div className="input-box">
              <label htmlFor="landmark">
                Landmark <span className="optional">(optional)</span>
              </label>
              <input
                id="landmark"
                type="text"
                name="landmark"
                value={values.landmark}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="E.g. Besides Bus Station"
              />
              {errors.landmark && touched.landmark ? <p className="form-errors">{errors.landmark}</p> : null}
            </div>

            {/* <div className="submit-btn">
              <button type="submit">Submit</button>
            </div> */}
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
                <div className="product-subtotal">&#8377;{item.attributes.price}</div>
              </div>

              <div className="product-image">
                <img src={item.attributes.img.data[0].attributes.url} alt="" />
              </div>

              <div className="quantity">Quantity: {item.attributes.quantity}</div>

              <div className="product-total">
                <div>Product Total:</div>
                <div>
                  <span>
                    {item.attributes.quantity} * &#8377;{item.attributes.price} = &#8377;
                    {item.attributes.quantity * item.attributes.price}
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

          <button
            onClick={() => {
              submitForm();
              if (!isValid) {
                handleToast();
              }
            }}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
