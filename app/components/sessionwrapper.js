"use client"
import { SessionProvider } from "next-auth/react"

const sessionwrapper = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default sessionwrapper