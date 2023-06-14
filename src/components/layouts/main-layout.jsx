import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function MainLayout({ children }) {
  return (
    <div  className='w-11/12 container mx-auto'>
      <Navbar />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default MainLayout