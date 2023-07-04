'use client';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { IoMdClose, IoMdMenu } from "react-icons/io";

import Button from '../button'
import NavLinks from './NavLinks';

function Navbar() {
  const [open, setOpen] = useState(true)

  return (
    <nav className='flex-between items-center py-4 text-secondary font-semibold '>
      <div className='z-50 cursor-pointer flex-between items-center w-full md:mx-0 md:w-auto '>
        <Link href="/">
          <Image  
            src="/assets/logos/KH-LOGO.png"
            alt='Brand logo'
            width={40}
            height={40}/>
        </Link>
        <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
          {open ? <IoMdMenu /> : <IoMdClose /> }
        </div>
      </div>

      <div>
        <ul className='md:flex items-center hidden gap-8 cursor-pointer'>
          <NavLinks />

          <div className='md:block hidden'>
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </div>
        </ul>
      </div>

      {/* Mobile nav */}
      <div onClick={() => setOpen(!open)}  className={`
          md:hidden absolute top-0 w-full bg-white min-h-full h-auto z-20 overflow-y-hidden px-4 py-20 
          duration-200 text-lg ${open ? '-left-full' : 'left-0'}
          `}>
        <ul>
          <NavLinks />

          <div>
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </div>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar