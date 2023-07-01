import React from 'react'

import MainLayout from '@/components/layouts/main-layout'
import '../../app/globals.css'

import ExpertiseItem from '@/components/expertise-item'

function ExpertiseOverview() {
  return (
    <MainLayout>
      <div>
        <h1 className='heading text-center'>Expertise Overview</h1>
        <p className='text-center desc font-semibold my-2'>Thekhtech Inc. possesses the proficiency and adaptability to tackle any online venture, showcasing their expertise in the internet and technology realms</p>

        <ExpertiseItem />
      </div>
    </MainLayout>
  )
}

export default ExpertiseOverview