"use server"
import Razorpay from "razorpay"
import connectDb from "@/db/connectDb"
import payment from "@/models/payment"
import User from "@/models/user"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    //fetching key secret from database instead of env variable
    let user=await User.findOne({username:to_username})
    const secret=user.razorpaysecret
    
    var instance = new Razorpay({ key_id: user.razorpayid , key_secret: secret })

    let options = {
        amount: Number.parseInt(amount) * 100,
        currency: "INR",
    }
    let x = await instance.orders.create(options)

    await payment.create({ oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message })
    return x
}

//  export const fetchuser=async (username)=>{
//         await connectDb()
//         let u=await User.findOne({username:username})
//         let user= u.toObject({flattenObjectIds: true})
//         return user
//     }

// export const fetchpayment=async (username)=>{
//         await connectDb()
//         let p =await payment.find({to_user:username}).sort({amount: -1}).lean()
//         return p
//     }


// ✅ fetchuser fixed
export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username }).lean()
    if (!u) return null
    u._id = u._id.toString()
    return u
}

// ✅ fetchpayment fixed
export const fetchpayment = async (username) => {
    await connectDb()
    let payments = await payment.find({ to_user: username, done:true }).sort({ amount: -1 }).lean()
    payments = payments.map(p => ({
        ...p,
        _id: p._id.toString()
    }))
    return payments
}

//update profile

export const updateprofile = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "username already exists" }
        }
        
        //  await payment.updateMany({to_user:oldusername}, {to_user:ndata.username})
            // await payment.updateMany({ to_user: oldusername }, { to_user: ndata.username });
        await User.updateOne({ email: ndata.email }, ndata)
        // Now update all the usernames in the Payments table 
        await payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
    }
    else{

        await User.updateOne({ email: ndata.email }, ndata)
    }



}
