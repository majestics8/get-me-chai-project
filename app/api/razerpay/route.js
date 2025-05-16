import payment from "@/models/payment";    //callback url
import user from "@/models/user";
import connectDb from "@/db/connectDb";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { secret } from "auth/commands";
import User from "@/models/user";

export const POST = async (req)=>{
    await connectDb()
    let body=await req.formData()
    body=Object.fromEntries(body)

    let p = await payment.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success: false, message:"Order Id not found"})
    }

  // Verify the payment  //it checks the signature from razorpay is correct or not by recreating signature using KEY_SECRET , order_id and payment_id
  
  // fetching key secret from database instead of env variable
    let user =await User.findOne({username:p.to_user})
    const secret=user.razorpaysecret

    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)

    if((xx)){
    const updatedPayment = await payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done:true}, {new: true})
         return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)   
    }
    else{   
        return NextResponse.json({success: false, message:"Payment Verification Failed"})
    }

} 
