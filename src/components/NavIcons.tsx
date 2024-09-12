"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'



const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const router = useRouter()

    const isLaoggedIn = false

    const handleProfile = () => {
    if(!isLaoggedIn) {
        router.push("/login")
    }
    setIsProfileOpen((prev)=> !prev)
}
  return (
    <div className='relative hidden md:flex items-center gap-4'>
        <Image src='/profile.png' alt='user' width={22} height={22} className='cursor-pointer' onClick={handleProfile} />
        {
            isProfileOpen && (
                <div className='absolute p-4 top-12 left-0 text-sm border border-gray-200 rounded-lg shadow-lg z-20'>
                    <Link href='/'>Profile</Link>
                    <div className='mt-2 cursor-pointer'>Logout</div>
                </div>
            )
        }
        <Image src='/notification.png' alt='notification' width={22} height={22} className='cursor-pointer' />
        <div className='relative cursor-pointer'>
            <Image src='/cart.png' alt='cart' width={22} height={22} onClick={()=>setIsCartOpen((prev)=> !prev)} />
            <span className='absolute -top-4 -right-4 w-6 h-6 rounded-full text-white text-sm flex items-center justify-center bg-primary'>2</span>
        </div>
        {isCartOpen && (
            <CartModal />
        )}
    </div>
  )
}

export default NavIcons