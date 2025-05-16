"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const [menuopen, setmenuopen] = useState(false)
  const { data: session } = useSession()
  // if (session) {
  //   return (
  //     <>
  //     <div className=''>
  //       Signed in as {session.user.email} <br />
  //       <button className='bg-red-950' onClick={() => signOut()}>Sign out</button>
  //       </div>
  //     </>
  //   )
  // }

  return (
    <nav className='flex text-white bg-black justify-between px-4 md:h-15 '>

      <div className='flex items-center justify-between px-4 py-2 w-full md:w-fit'>
        <Link href={'/'} className='logo font-bold text-xl flex items-center'>
          <Image className='pb-1' src="/tea.gif" width={44} height={20} alt="" />
          <span>GetMeChai</span>
        </Link>

        {/* <ul className='flex font-bold gap-4 '>
        <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign up</li>
            <li>Login</li>
      </ul> */}
  
        {/* hamburger */}
        {session &&
          <button onClick={() => {
            setmenuopen(!menuopen)
          }} className='md:hidden text-2xl relative'>
            ☰
          </button>
        }
      </div>

      {menuopen &&

        <div className='bg-indigo-900  w-[300px] absolute top-10 right-5 z-10 flex flex-col items-center justify-center rounded-xl'>
          {session &&
            <ul className='flex flex-col font-bold gap-4 p-4'>
              <li>
                <ul className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Welcome, {session.user.email}</ul>
              </li>
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={() => { signOut() }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">signOut</button></Link>
              </li>
            </ul>
          }
          <div>
            {!session &&
              <ul>
                <li>
                  <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LogOut</button></Link>
                </li>
              </ul>
            }
          </div>
        </div>

      }

      <div className='relative gap-4  '>
        <div className='hidden md:block '>
          {session &&
            <>
              <button onClick={() => { setshowdropdown(!showdropdown) }} onBlur={() => {
                setTimeout(() => {   /* i was getting error because to load dashboard it takes some time and before that the dropdown wondow was getting close */
                  setshowdropdown(false)
                }, 300);
              }} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className=" text-white mx-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome, {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownHover" className={`absolute top-[50px] left-[125px] z-10 ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => { signOut() }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                  </li>
                </ul>
              </div></>
          }
          {/* logout */}
          {session &&
            <button
              className="cursor-pointer relative inline-flex items-center justify-center  px-6 py-2 border border-purple-700 rounded-lg overflow-hidden text-purple-300 hover:text-white transition-colors duration-300"
              onClick={() => signOut()}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-950 via-violet-800 to-violet-600 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></span>

              <span className="relative z-10 w-full text-center font-bold">
                LogOut
              </span>
            </button>

          }</div>

        {!session &&
          <Link href={'/login'}>
            <button className="cursor-pointer relative inline-flex items-center justify-center  px-6 py-2 border border-purple-700 rounded-lg overflow-hidden text-purple-300 hover:text-white transition-colors duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-violet-950 via-violet-800 to-violet-600 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0">
              </span>
              <span className="relative z-10 w-full text-center font-bold">
                Login
              </span>
            </button>

          </Link>}

        {/* for hambutger menu */}


      </div>
    </nav>
  )
}

export default Navbar