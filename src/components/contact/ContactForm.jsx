import React from 'react'
import './form.css'

function ContactForm() {
  return (
    <div>
      <form className=' text-center mx-auto mt-12'>
        <div className='grid grid-cols-2 gap-2'>
          <input type="text" placeholder='First Name' className='forms-input'/>
          <input type="text" placeholder='Last Name' className='forms-input'/>
          <input type="text" placeholder='Company Name' className='forms-input'/>
          <input type="email" placeholder='Email Address' className='forms-input'/>
          <input type="number" placeholder='Phone Number' className='forms-input'/>
          <input type="text" placeholder='Website URL' className='forms-input'/>
        </div>
        <textarea placeholder='Please provide a description of your need or project' className='form-textarea'></textarea>

        <input type="submit" className='button'/>
      </form>
    </div>
  )
}

export default ContactForm