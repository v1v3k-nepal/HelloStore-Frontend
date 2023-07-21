// import { makePaymentRequest } from "../../utils/api";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const handleKhaltiPayment = async(cartItems,cartSubTotal)=>{
      // Generate a unique purchase_order_id for the transaction
      const purchaseOrderId = "testOrder123";
  
                // Prepare the payload for the payment request
                const payload = {
                  return_url: "http://localhost:3000/Payment",
                  website_url: "http://localhost:3000/",
                  amount: cartSubTotal * 100, // Convert to paisa (assuming cartSubTotal is in rupees)
                  purchase_order_id: purchaseOrderId,
                  purchase_order_name: "Product Name",
                  customer_info: {
                    "name": "Vivek Nepal",
                    "email": "example@gmail.com",
                    "phone": "9811496763"
                  },

                  product_details : cartItems.map((item) => ({
                    identity: item.id,
                    name: item.attributes.title,
                    total_price: item.attributes.quantity*item.attributes.price*100,
                    quantity: item.attributes.quantity,
                    unit_price: item.attributes.price*100,
                  })),
                };

      // Make a POST request to initiate the payment
      try {
        const response = await fetch("https://a.khalti.com/api/v2/epayment/initiate/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Key 53b79d5239224f2dbefe1365e5655d78",
          },
          body: JSON.stringify(payload),
        });
  
        const data = await response.json();
        localStorage.setItem("pidxValue", data.pidx);
        // Redirect the user to the payment_url obtained from the response
        window.location.href = data.payment_url;

        console.log(data);
      } catch (error) {
        console.log(error);
      }
  }

export const paymentVerificationKhalti = async (pidxValue)=>{

  try {
    const verificationPayload = { pidx: pidxValue};
    const response = await fetch("https://a.khalti.com/api/v2/epayment/lookup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Key 53b79d5239224f2dbefe1365e5655d78",
      },
      body: JSON.stringify(verificationPayload),
    });

    const data = await response.json();

    return(data);

  } catch (error) {
    console.log(error);
  }
  
}



//   export const handleStripePayment = async(cartItems)=>{
//       try {
//         const stripe = await stripePromise;
//         const res = await makePaymentRequest.post("/api/orders", {
//             products: cartItems,
//         });
//         await stripe.redirectToCheckout({
//             sessionId: res.data.stripeSession.id,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }