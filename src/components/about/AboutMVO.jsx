import React from 'react'
import './about.css'

import Image from 'next/image'

function AboutMVO() {
  return (
    <div className=' mt-6'>
    <h1 className='mb-4 heading-3 font-bold text-secondary'>With The Know How Tech, business function better.</h1>

      <div className='lg-flex-between gap-8 text-white text-center'>
        <div className='mv-container mb-6 lg:mb-0'>
          <Image  
            src="/assets/svg/mission.svg"
            alt='About hero'
            width={100}
            height={300}
            className='mx-auto'/>
          <h1 className='mv-title title'>MISSION</h1>
          <p className='text-justify'>Our team of experts is working to revolutionize your business, making it a leader in digital solutions and strategies. We are determined to make sure your business is at the forefront of technological advancement.</p>
        </div>
        <div className='mv-container'>
          <Image  
            src="/assets/svg/vision.svg"
            alt='About hero'
            width={100}
            height={300}
            className='mx-auto'/>
          <h1 className='mv-title title'>VISION</h1>
          <p className='text-justify'>The Know How Tech hopes to see all of our clients taking advantage of the digital world and creating content to reach a larger audience. We are dedicated to enhancing your online presence, formulating your digital strategy, and executing digital marketing plans to help you reach your goal.</p>
        </div>
      </div>
      <h1 className='text-secondary mt-2 title font-bold'>COMPANY OBJECTIVES</h1>
      <p className='text-justify'>The main goal of Know How Tech is to give our clients digital opportunities and help them make a profit. We strive to create comprehensive solutions for businesses that are transitioning from traditional to digital. Our aim is not to make money, but to make a life for your business. Additionally, we offer digital solutions that are cost-effective, dependable, and have a great user experience. We also provide training and education for businesses in the digital world. Our team of experts is highly knowledgeable in the field and has a thorough understanding of what it takes to achieve success.</p>
    </div>
  )
}

export default AboutMVO