import React from 'react'

import MainLayout from '@/components/layouts/main-layout'
import '../../../app/globals.css'

import PlatformsBox from '@/components/platforms-box'

function PlatformsOverview() {
  return (
    <MainLayout>
      <h1 className='heading text-secondary text-center font-bold'>Platforms Overview</h1>
      <p className='text-center desc my-2'>By collaborating with cutting-edge industry technologies, we deliver revolutionary digital solutions that drive transformation.</p>
      
      <PlatformsBox />
    </MainLayout>
  )
}

export default PlatformsOverview