"use client"
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import SearchBar from "./SearchBar"

const Menu = () => {

  const [open, setOpen] = useState(false)
  return (
    <button 
      data-collapse-toggle="navbar-search" 
      type="button" 
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false"
      onClick={()=> setOpen((prev)=> !prev)}
    >
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
      {
        open && (
          <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
            <Link href='/'>Home</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Deals</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Logout</Link>
            <Link href='/'>Cart(1)</Link>
          </div>
        )
      }
    </button>
  )
}

export default Menu