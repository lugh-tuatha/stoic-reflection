import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import Button from '../button'

function Navbar() {
  return (
    <div className='bg-red-500 flex justify-between pt-8 pb-4'>
      <Image 
        src="/assets/logos/KH-LOGO2023.png"
        alt='Brand logo'
        width={40}
        height={40}/>

      <ul className='flex gap-8 items-center cursor-pointer'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <Button>
          <Link href="/contact">Contact us</Link>
        </Button>
      </ul>
    </div>
  )
}

export default Navbar