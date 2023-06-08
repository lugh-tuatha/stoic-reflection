import Link from 'next/link'
import React from 'react'

function Navlinks() {
  const links = [
    {
      name: "Platforms",
      href: "/platforms",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Home",
      href: "/",
    },
  ]

  return (
    <>
      {links.map((link) => (
        <Link href={link.href}>
          <div className='cursor-pointer mb-4 md:mb-0'>
            <h1>{link.name}</h1>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Navlinks