import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Avatar from '../avatar'

function Sidebar() {
  return (
    <div className='w-1/5 h-screen p-4'>
      <Image  
        src="/assets/logos/KH-LOGO.png"
        alt='Brand logo'
        width={35}
        height={35}/>

      <div className='mt-20 mb-16 flex flex-col items-center'>
        <Avatar hoverable={false}/>

        <h1 className='desc mt-1 font-bold'>The KH Team</h1>
        <p>CEO</p>
      </div>

      <ul className='font-semibold'>
        <li className='bg-gray px-3 py-2 rounded-md'><Link href="">Dashboard</Link></li>
        <li className='px-3 py-2 rounded-xl'><Link href="">Chat Support</Link></li>
      </ul>

      <div className='absolute bottom-6'>
        <p>exit</p>
      </div>
    </div>
  )
}

export default Sidebar
