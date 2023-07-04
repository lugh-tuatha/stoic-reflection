import React from 'react'

import Image from 'next/image'
import Carousell from './Carousell'

function Login() {
  return (
    <div className='w-full flex-between'>
      <div className='w-2/5 h-screen px-10 pt-4'>
        <Image  
          src="/assets/logos/KH-LOGO.png"
          alt='BRAND LOGO'
          width={40}
          height={40}/> 

        <div className='text-center'>
          <h1 className='heading-2 mt-16'>Welcome back</h1>
          <p className='desc mb-8'>Please enter your details</p>

          <form className='flex flex-col gap-2'>
            <input type="text" placeholder='Username' className='outline-none border-b bg-transparent border-black py-2'/>
            <input type="password" placeholder='Password' className='outline-none border-b bg-transparent border-black py-2'/>
          
            <input type="submit" value="Log in" className='button my-4'/>
          </form>

        </div>
      </div>
      
      <Carousell />
    </div>
  )
}

export default Login
