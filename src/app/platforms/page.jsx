import React from 'react'

import '../globals.css'

import PlatformsBox from '@/components/platforms-box'

function Platforms() {
  return (
    <div>
      <h1 className='heading text-center'>Platforms Overview</h1>
      <p className='text-center desc font-semibold my-2'>By collaborating with cutting-edge industry technologies, we deliver revolutionary digital solutions that drive transformation.</p>
      
      <PlatformsBox />
    </div>
  )
}

export default Platforms