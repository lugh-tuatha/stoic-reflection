import React from 'react'
import Image from 'next/image'

import { platforms } from '@/data/Platforms'

function PlatformsBox() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {platforms.map((platforms_items) => (
        <div key={platforms_items.id} className='border border-gray text-center px-6 py-8'>
          <div className='h-32 flex-middle justify-center'>
            <Image  
              src={platforms_items.logo}
              alt='platforms logo'
              width={300}
              height={10}
              className='inline mr-2'/>
          </div>

          <p className='mt-4'>{platforms_items.desc}</p>
        </div>
      ))}

    </div>
  )
}

export default PlatformsBox