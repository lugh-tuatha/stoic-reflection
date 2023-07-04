import React from 'react'

import Image from 'next/image'
import { expertise } from '@/data/Expertise'

function ExpertiseItem() {
  return (
    <div className='mt-8 w-11/12 mx-auto'>
      {expertise.map((expertise_list, index) => (
        <div key={expertise_list.id} className={`lg:flex items-center gap-10 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
          <Image  
            src={expertise_list.banner}
            alt='Expertise item image'
            width={500}
            height={10}
            className='inline mr-2 lg:mb-0 mb-6'/>

            <div className='flex flex-col'>
              <Image  
                src={expertise_list.icon}
                alt='Expertise icon'
                width={75}
                height={1}/>
              <h2 className='title font-bold text-secondary mt-4'>{expertise_list.title}</h2>
              <p className='my-4 desc text-justify'>{expertise_list.detailedDesc}</p>
              <button className='button w-1/4 mt-6 lg:mt-12'>Learn More</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ExpertiseItem