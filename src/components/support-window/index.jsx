import React from 'react'
import './support-window.css'

import EmailForm from './EmailForm'

function SupportWindow(props) {
  return (
    <div className={`duration-500 rounded-xl bg-white border-2 border-primary window-container
      ${props.visible ? 'opacity-100' : 'opacity-0'}
      `}>
      <EmailForm />
    </div>
  )
}

export default SupportWindow