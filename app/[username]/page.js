import React from 'react';
import Paymentpage from '@/components/PaymentPage'
import { notFound } from 'next/navigation';
import connectDb from '@/db/connectDb';
import User from '@/models/user';

const Username =async ({ params }) => {

  const checkuser = async () => {
    await connectDb()
    let u = await User.findOne({ username: params.username })
    if (!u) {
      notFound()
    }
  }
  await checkuser()

  return (
    <>
      <Paymentpage username={params.username} />
    </>
  );


}

export default Username;

export async function generateMetadata({params}){
  return{
    title:`Support ${params.username} - Get Me A Chai`,
  }
}
