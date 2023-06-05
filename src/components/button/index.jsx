import React from 'react'

function Button({children}) {
  return (
    <button className='py-3 px-5 bg-black rounded-md font-semibold bg-primary'>{children}</button>
  )
}

export default Button