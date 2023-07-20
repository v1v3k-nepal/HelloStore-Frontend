import React from 'react'
import "./PaymentSuccess.scss"
import { useNavigate } from 'react-router-dom'
import { MdClose } from "react-icons/md";

const PaymentSuccess = ({data}) => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <MdClose onClick={()=>navigate("/")} size={20}/>
        <div className='content'>
          <i className="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p>We received your purchase request <br/> we'll be in touch shortly!</p>
          <div className='details'>
            <p>Transaction By: {data.mobile}</p>
            <p>Amount Paid: &#8377;{data.amount}</p>
            <p>Purchase Order Name: {data.purchase_order_name}</p>
            <p>Purchase OrderId: {data.purchase_order_id}</p>
            <p>TransactionId: {data.transaction_id}</p>
          </div>
      </div>
    </div>
  )
}

export default PaymentSuccess;