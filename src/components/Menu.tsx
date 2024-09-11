"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const Menu = () => {

    const [open, setOpen] = useState();
  return (
    <div>
        <Image src='/menu.png' alt='hambergur menu' width={28} height={28} className='cursor-pointer' onClick={() => setOpen((prev) => !prev) }/>
    </div>
  )
}

export default Menu