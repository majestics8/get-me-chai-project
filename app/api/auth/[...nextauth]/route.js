import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import connectDb from '@/db/connectDb'
import Payment from '@/models/payment'
import User from '@/models/user'
import mongoose from 'mongoose'

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,

    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider =="github"){
        await connectDb()
        const currentUser=await User.findOne({email:user.email})
        if(!currentUser){
          const newUser=await User.create({
            email:user.email,
            username:user.email.split("@")[0],
          })
          // console.log(newUser.username)
        }
        return true
      }
    },
    async session({ session, user, token }) {
      const dbuser=await User.findOne({email:session.user.email})
      console.log(dbuser)
      session.user.name=dbuser.username
      return session
    },
  }
})

export { handler as GET, handler as POST }



// review this code