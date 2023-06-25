import React from 'react'
import './form.css'

function ContactForm() {
  return (
    <div>
      <form className='w-full md:w-3/4 text-center mx-auto mt-12'>
        <div className='grid grid-cols-2 gap-2'>
          <input type="text" placeholder='First Name' className='forms-input'/>
          <input type="text" placeholder='Last Name' className='forms-input'/>
          <input type="text" placeholder='Company Name' className='forms-input'/>
          <input type="text" placeholder='Email Address' className='forms-input'/>
          <input type="text" placeholder='Phone Number' className='forms-input'/>
          <input type="text" placeholder='Website URL' className='forms-input'/>
        </div>
        <textarea placeholder='Please provide a description of your need or project' className='w-full h-40 mt-2 py-2 px-4 border border-black outline-none'></textarea>

        <input type="submit" className='button'/>
      </form>
    </div>
  )
}

export default ContactForm