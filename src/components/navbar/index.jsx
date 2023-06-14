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
        <Image  
          src="/assets/logos/KH-LOGO2023.png"
          alt='Brand logo'
          width={40}
          height={40}/>
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
      <div  className={`
          md:hidden absolute top-0 w-11/12 bg-white min-h-full h-auto py-20 
          duration-500 text-lg ${open ? 'opacity-0' : 'opacity-1'}
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