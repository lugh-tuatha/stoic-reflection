import React from 'react'

import '../globals.css'

import ExpertiseItem from '@/components/expertise-item'

function ExpertiseOverview() {
  return (
    <div>
      <h1 className='heading text-center'>Expertise Overview</h1>
      <p className='text-center desc font-semibold my-2'>Thekhtech Inc. possesses the proficiency and adaptability to tackle any online venture, showcasing their expertise in the internet and technology realms</p>

      <ExpertiseItem />
    </div>
  )
}

export default ExpertiseOverview