import Link from 'next/link'
import React, { useState } from 'react'
import { links } from '../../data/NavLinks'

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Navlinks() {
  const [menu, setMenu] = useState("")

  return (
    <>
      {links.map((link) => (
        <div className='cursor-pointer mb-4 md:mb-0 group'>
          <Link href={link.href}>
            <h1 className='flex justify-between items-center md:pr-0 pr-5 group mx-auto hover:underline' onClick={() =>menu !== link.name ? setMenu(link.name) : setMenu("")}>
              {link.name}

              <span className='md:hidden'>
                {link.name === "Expertise" || link.name === "Platforms" ? (menu === link.name ? <BsChevronUp /> : <BsChevronDown />) : null }
              </span>

              <span className='mt-1 ml-1 md:block hidden group-hover:rotate-180'>
                {link.name === "Expertise" || link.name === "Platforms" ? <BsChevronDown /> : null }
              </span>
            </h1>
          </Link>
          {link.submenu && (
            <div>
              <div className='absolute top-12 hidden group-hover:md:block hover:md:block'>
                <div className='py-3'>
                  <div className='w-4 h-4 left-3 absolute mt-1 bg-secondary rotate-45'></div>
                </div>

                <div className='bg-white shadow-md shadow-gray rounded-md p-4 font-normal border-t-12 border-secondary'>
                  {
                    link.sublinks.map((mysublinks) => (
                      <li className='mb-2 hover:underline'>
                        <Link href={mysublinks.link}>
                          {mysublinks.name}
                        </Link>
                      </li>
                    ))
                  }
                </div>
              </div>

              {/* mobile menus */}
              <div className={`
                ${menu === link.name ? 'md:hidden bg-gray px-4 my-1 py-3 mx-auto w-full text-sm font-normal' : 'hidden'}
              `}>
                {
                  link.sublinks.map((slinks)=>(
                    <div>
                      <li className='py-2 hover:underline'>
                        <Link href={slinks.link}>{slinks.name}</Link>
                      </li>
                    </div>
                  ))
                }
              </div>

            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default Navlinks