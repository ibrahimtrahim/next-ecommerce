import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import Nav from './Nav'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
    <header className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image width='28' height='28' src="/logo.png" alt="Logo" className='hidden md:block' />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Souk</span>
          </Link>
          <div className="flex justify-between md:order-2 gap-8">
            <SearchBar />
            <NavIcons />
            <Menu />
          </div>
          <Nav />
        </div>
      </nav>
    </header>
  )
}

export default Navbar