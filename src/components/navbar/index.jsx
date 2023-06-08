'use client';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { IoMdClose, IoMdMenu } from "react-icons/io";

import Button from '../button'
import NavLinks from './NavLinks';

function Navbar() {
  const [open, setOpen] = useState(true)
  console.log(open)

  return (
    <nav className='flex items-center justify-between py-4'>
      <div className='z-50 cursor-pointer flex justify-between items-center w-10/12 mx-auto md:mx-0 md:w-auto '>
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
        <ul className='md:flex items-center hidden gap-8 cursor-pointer font-semibold'>
          <li>
            <Link href="/expertise">Expertise</Link>
          </li>
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
          md:hidden absolute w-full bg-white h-full py-20 bottom-0
          duration-500 ${open ? 'opacity-0' : 'opacity-1'}
          `}>
        <ul className='w-10/12 mx-auto'>
          <li className='mb-4 md:mb-0'>
            <Link href="">Expertise</Link>
          </li>
          
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