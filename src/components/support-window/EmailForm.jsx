import React, { useState } from 'react'
import './support-window.css'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Avatar from '../avatar'

function EmailForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    console.log('Sending email to ', email)
  }
  return (
    <div className='w-full duration-500 h-full opacity-100 overflow-hidden'>
      <div className='h-0'>
        <div className='relative -top-11 w-full h-72 bg-primary -z-10  -skew-y-12'></div>
      </div>

      <div className="flex justify-center mt-16 w-full">
        <Avatar hoverable={false}/>
      </div>
      <div className='w-full text-2xl font-semibold text-white text-center mb-2'>
        Welcome to my <br /> support
      </div>

      <form className='text-center'
        onSubmit={e => handleSubmit(e)}>
          <input className='px-2 py-2 text-md z-10 relative outline-none border-primary border-2 rounded-md w-10/12'
            type="email" 
            placeholder='Your Email'
            onChange={e => setEmail(e.target.value)}/>
      </form>

      <p className='text-2xl text-primary font-semibold mt-2 text-center'>Enter your email to <br /> get started.</p>
    </div>
  )
}

export default EmailForm