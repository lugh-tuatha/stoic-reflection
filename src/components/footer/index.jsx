import React from 'react'

import Image from 'next/image'
import Button from '../button'

import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Gr from "react-icons/gr";

import { links } from '@/data/NavLinks';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-secondary text-white">
      <div className='lg-flex-between mt-20 py-10 gap-10 w-11/12 container mx-auto '>
        <div className='w-full lg:w-1/4 mb-6'>
          <Image  
            src="/assets/logos/KH-LOGO2023.png"
            alt='Brand logo'
            width={40}
            height={40}/>
          <p className='mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore repudiandae cumque id distinctio perspiciatis!</p>
          <input placeholder='ex. johndoe@gmail.com' type="email" className='mb-4 w-full border rounded-md py-2 px-4 focus:outline-none bg-transparent border-primary'/>
          <Button>Subscribe to newsletter</Button>
        </div>

        <div className='md-flex-between w-full lg:w-3/4'>
          <div className='mb-6'>
            <h1 className='title font-bold mb-4'>Contact</h1>
            <ul>
              <li>
                <div className='flex-middle font-bold gap-1 mr-2'>
                  <p>Phone</p>
                  <Ai.AiFillPhone/>
                </div>
                <div className='mb-2'>
                  <Image  
                    src="/assets/icons/flag/usa.png"
                    alt='Brand logo'
                    width={25}
                    height={10}
                    className='inline mr-2'/>
                  <span>(516) 366-2659</span>
                </div>

              </li>

              <li>
                <div className='flex-middle font-bold gap-1 mr-2'>
                  <p>Email</p>
                  <Gr.GrMail/>
                </div>
                <span className='block mb-2'>info@thekhtech.com</span>
                <span>sales@thekhtech.com</span>
              </li>
            </ul>
          </div>

          <div className='mb-6'>
            <h1 className='title font-bold mb-4'>Locations</h1>
            <ul>
              <li className='mb-2'>New york</li>
            </ul>
          </div>

          <div>
            <h1 className='title font-bold mb-4'>Quick Links</h1>
            <ul className='cursor-pointer'>
              {links.map((page_links) => (
                <li key={page_links.id} className='mb-2 hover:underline'>
                  <Link href={page_links.href}>{page_links.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=''>
            <h1 className='title font-bold mb-4'>Follow Us</h1>
            <div className="flex gap-4 cursor-pointer">
              <Fa.FaFacebookF size={26} />
              <Fa.FaTwitter size={26} />
              <Fa.FaLinkedinIn size={26} />
              <Fa.FaYoutube size={26} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer