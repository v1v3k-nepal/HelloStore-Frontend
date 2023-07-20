import React from 'react'
import "./PaymentFailure.scss"
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const PaymentFailure = ({paymentStatus}) => {

  const navigate = useNavigate();

  return (
  <div className="failure-container">
    <div className="card">
      <MdClose onClick={()=>navigate("/")} size={20}/>
      <div className='content'>
        <i className="checkmark">❌</i>
      </div>
        <h1>Failure</h1> 
        <p>Sorry, your payment status is in {paymentStatus.toLowerCase()} state. <br/>For any support drop your query to <br/>support@hellostore.com.np</p>
    </div>
  </div>
  )
}

export default PaymentFailure