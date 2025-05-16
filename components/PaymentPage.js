"use client"
import React from 'react'
import Script from 'next/script'
import { initiate, fetchuser, fetchpayment } from '@/actions/useractions'
import { useState } from 'react'
import { useEffect } from 'react'



const Paymentpage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({
    name: "",
    message: "",
    amount: ""
  })
  const [currentuser, setcurrentuser] = useState([])
  const [payment, setpayment] = useState([])

  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    // console.log(paymentform)
  }

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    let u = await fetchuser(username)
    setcurrentuser(u)

    let p = await fetchpayment(username)
    setpayment(p)
  }

  const pay = async (amount) => {


    let a = await initiate(amount, username, paymentform)
    let order_id = a.id
    var options = {
      "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Buy me a chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razerpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();  /* Opens Razorpay popup: */
  }


  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="relative">
        <img
          height={350}
          className="object-cover w-full"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=fmewZH-BgnFN7dTnFkQbwLI_ezETy720wuqlUU_jmK4%3D&token-time=1748995200"
          alt=""
        />
        {/* profile pic */}
        {currentuser?.profilepic && (
          <img
            width={150}
            className="size-24 md:size-28 border-4 border-white rounded-full absolute left-1/2 -translate-x-1/2 -bottom-26"
            src={currentuser.profilepic}
            alt="Profile"
          />
        )}
      </div>

      <div className=" flex justify-center items-center my-24 flex-col gap-2 ">
        <h1 className="text-xl font-bold my-2 ">@ {username}</h1>
        {/* <div className="text-slate-400 font-bold">Contributing Towards Devlopment</div> */}
        <div className="text-slate-400 ">  Lets help {username} get a chai!</div>
        <div className='text-slate-400'>
          {payment.length} payment .   ₹{payment.reduce((a, b) => a + b.amount, 0)} raised
        </div>

        {/* payements */}
        <div className="payments flex w-full px-2 lg:w-[80%] mt-11 gap-3 flex-col md:flex-row">
          <div className="names bg-slate-900 w-full p-10 rounded-lg ">
            <h2 className="text-bold text-2xl font-bold mb-5">Supporters</h2>
            <ul className="mx-2 h-[300px] overflow-y-scroll ">

              {payment.length === 0 && <div className="text-center relative top-[35%] text-slate-500">No Payments Yet</div>}

              {payment.map((item, index) => {
                return (
                  <li key={index} className="flex items-center my-4 gap-2">
                    <img className="bg-slate-500 rounded-full" src="avatar.gif" width={25} alt="" />
                    <span>
                      {item.name} donated <span className="font-bold">{item.amount} rs</span> with message: {item.message}
                    </span>
                  </li>
                );
              })}

            </ul>
          </div>
          <div className="makepayment bg-slate-900 w-full rounded-lg p-10">
            <h1 className="font-bold text-xl my-5">Make a Payment</h1>
            <div className="flex flex-col gap-2 ">
              <input onChange={handlechange} value={paymentform.name} name='name' className="border rounded-lg w-full bg-slate-800 p-3 hover:bg-slate-700 " type="text" placeholder="Enter Name" />
              <input onChange={handlechange} value={paymentform.message} name='message' className="border rounded-lg w-full bg-slate-800 p-3 hover:bg-slate-700 " type="text" placeholder="Enter Message" />
              <input onChange={handlechange} value={paymentform.amount} name='amount' className="border rounded-lg w-full bg-slate-800 p-3 hover:bg-slate-700 " type="text" placeholder="Enter Amount" />
              <button onClick={() => pay(Number.parseInt(paymentform.amount))} type="button" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>


            </div>
            <div className="flex items-center gap-2 mt-5">
              <button className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700  disabled:bg-slate-800 disabled:cursor-not-allowed" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(10)} >Pay ₹10</button>
              <button className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 disabled:bg-slate-800 disabled:cursor-not-allowed" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(20)} >Pay ₹20</button>
              <button className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 disabled:bg-slate-800 disabled:cursor-not-allowed" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(30)} >Pay ₹30</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Paymentpage