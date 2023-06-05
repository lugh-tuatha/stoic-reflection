import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function MainLayout({ children }) {
  return (
    <div  className='w-10/12 mx-auto'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout