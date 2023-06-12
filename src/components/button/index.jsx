import React from 'react'

function Button({children}) {
  return (
    <button className='py-2 px-4 rounded-md font-semibold bg-primary'>{children}</button>
  )
}

export default Button