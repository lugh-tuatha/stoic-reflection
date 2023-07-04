import React from 'react'

import Image from 'next/image'

function Avatar({ style, hoverable = true, ...props}) {
  return (
    <div style={style}>
      <div className="group flex items-center gap-2">
        {hoverable && (
          <div className='hidden px-4 py-4 duration-300 group-hover:block bg-primary rounded-full'>
            <p>Hey it&apos;s kh team!!!</p>
          </div>
        )}

        <div onClick={() => props.onClick && props.onClick()} 
          className='rounded-full w-20 h-20 border-4 duration-200 box-shadow border-primary hover:border hover:border-accent'>
          <Image  
            src="/assets/logos/chat.png"
            alt='Avatar'
            width={80}
            height={80}
            className='rounded-full'/>
        </div>
      </div>

    </div>
  )
}

export default Avatar