import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { paymentVerificationKhalti } from './paymentHandle'
import PaymentSuccess from './PaymentSuccess'
import PaymentFailure from './PaymentFailure'
import "./PaymentRedirection.scss"
import Loading from "../../assets/loading.png"
import { Context } from '../../utils/context'

const PaymentRedirection = () => {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const location = useLocation();
  const {pidx} = useContext(Context);

    useEffect(()=>{
      const urlParams = new URLSearchParams(location.search);
      // const pidx = urlParams.get('pidx');
      const storedPidxValue = localStorage.getItem("pidxValue");
      const amount = urlParams.get('amount')/100;
      const transaction_id = urlParams.get('transaction_id')
      const purchase_order_id = urlParams.get('purchase_order_id');
      const purchase_order_name = urlParams.get('purchase_order_name');
      const mobile = urlParams.get('mobile');
      const data = {
        pidx: storedPidxValue,
        amount: amount,
        transaction_id : transaction_id,
        purchase_order_id: purchase_order_id,
        purchase_order_name: purchase_order_name,
        mobile: mobile
      }
      setData(data);
      console.log(storedPidxValue);
      checkStatus(storedPidxValue);
      navigate("/payment")
    },[])

    useEffect(()=>{
      // console.log("Payment Status Updated: "+ paymentStatus);
      setTimeout(()=>{
        setIsLoading(false);
      },2000)
    },[paymentStatus]);

    const checkStatus = async (storedPidxValue)=>{
      const responseData = await paymentVerificationKhalti(storedPidxValue);
      console.log(responseData);
      setPaymentStatus(responseData.status);
    }

    if(isLoading) {
      return(
        <div className="progress-container">
        <div>
          <img className="loading-logo" src={Loading} alt=""/>
        </div>
        <div className="verifying-text">Verifying Payment Status</div>
        <div className="progress-bar">
            <div className="progress-bar-fill"></div>
        </div>
    </div>
      )
    }

  return (
    <div>
      {paymentStatus=="Completed" ? <PaymentSuccess data={data}/> : <PaymentFailure paymentStatus={paymentStatus}/>}
    </div>
  )
}

export default PaymentRedirection;