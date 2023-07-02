import React from 'react'
import '../globals.css'
import ContactForm from '@/components/contact/ContactForm'

function Contact() {
  return (
    <>
      <div className='text-center w-full lg:w-3/4 mx-auto'>
        <h1 className='heading'>Contact us</h1>
        <p className='desc font-semibold mt-4'>If you’re looking for a winning digital resource combinations for your business, then it’s time to contact The Know How Tech. Our team is a cohesive, highly experienced persons that is here to help you know the difference about being traditional to modernized.</p>

        <ContactForm />
      </div>
    </>
  )
}

export default Contact