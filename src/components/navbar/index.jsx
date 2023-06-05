import React from 'react'
import Image from 'next/image'
import Button from '../button'

function Navbar() {
  return (
    <div className='bg-red-500 flex justify-between pt-8 pb-4'>
      <Image 
        src="/assets/logos/KH-LOGO2023.png"
        alt='Brand logo'
        width={40}
        height={40}/>

      <ul className='flex gap-8 items-center '>
        <li>Home</li>
        <li>Page</li>
        <Button>Contact us</Button>
      </ul>
    </div>
  )
}

export default Navbar