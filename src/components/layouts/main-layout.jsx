import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function MainLayout({ children }) {
  return (
    <div className="div">
      <div className='w-11/12 container mx-auto'>
        <Navbar />
          <main>
            {children}
          </main>
      </div>

      <Footer />
    </div>

  )
}

export default MainLayout