import React from 'react'

function Navlinks() {
  const links = [
    {
      name: "Platforms"
    },
    {
      name: "Careers"
    },
    {
      name: "About"
    },
    {
      name: "Home"
    },
  ]

  return (
    <>
      {links.map((link) => (
        <div>
          <div className='cursor-pointer mb-4 md:mb-0'>
            <h1>{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  )
}

export default Navlinks