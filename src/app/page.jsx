import './app.css'

import MainLayout from '@/components/layouts/main-layout'
import Button from '@/components/button';

import Image from 'next/image';

import * as Fa from "react-icons/fa";
import * as Gr from "react-icons/gr";

import { expertise } from '@/data/Expertise'
import { platforms } from '@/data/Platforms'

export default function Home() {
  return (
    <MainLayout>
      {/*--------------- Home hero ---------------*/}
      <div className='lg-flex-between'>
        <div className="w-full lg:w-1/2 mt-4 home">
          <h1 className='bold font-bold heading'>Forms Holistic Digital Approaches to Grow Online Presence.</h1>
          <p className='desc mt-2 mb-4'>The Know How Tech is a leader in the digital realm, providing businesses with the tools to transition from traditional to digital operations. Our platform offers a comprehensive set of resources to help businesses increase their profitability.</p>
          <Button>Get started</Button>
        </div>

        <Image  
          src="/assets/illustration/ai4.jpeg"
          alt='Home hero'
          width={500}
          height={500}
          className='mx-auto lg:mx-0 w-full h-full home-hero'/>
      </div>

      {/*--------------- Expertise ---------------*/}
      <div>
        <h1 className='heading-2 font-bold text-secondary'>Our expertise</h1>
        <div className='my-4 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {expertise.map((expertise_items) => (
            <div className='flex flex-col'>
              <Image  
                src={expertise_items.icon}
                alt='Expertise icon'
                width={75}
                height={75}/>
              <h2 className='title font-bold text-secondary'>{expertise_items.title}</h2>
              <p className='my-2'>{expertise_items.desc}</p>
              <p className='font-bold hover:underline cursor-pointer text-secondary hover:text-primary mt-auto'>Learn more &gt;</p>
            </div>
          ))}
        </div>
      </div>  

      {/*--------------- Platforms ---------------*/}
      <div className='mt-8 xl:flex gap-8'>
        <div className='xl:w-1/3'>
          <h1 className='heading-2 font-bold text-secondary'>Platforms</h1>
          <p className="desc my-2">We collaborate with top technology providers worldwide and offer diverse expertise in implementing various solutions. Our platform-agnostic approach ensures we recommend the best solution for success. </p>
          <Button>Explore Platforms</Button>
        </div>

        <div className="xl:w-2/3 mt-4 xl:mt-0 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {platforms.slice(0, 10).map((platforms_item) => (
          <div className='flex-middle'>
            <Image
              src={platforms_item.logo}
              alt='Progress icon'
              width={300}
              height={75}/>
          </div>
          ))}
        </div>
      </div>  

      {/*--------------- Newsletter ---------------*/}
      <div className='mt-10 lg-flex-between gap-10'>
        <div className='lg:w-1/2'>
          <p className='title'>Stay Connected with TheKHTech NewsLetter</p>
          <h1 className='heading-2 font-bold text-secondary lg:mb-12'>Be the first to know about our latest posts and updates</h1>
          <p className='desc my-4 lg:mb-16'>Sign up for our newsletter and never miss a thing! Get exclusive access to our latest posts, updates on our website, and other special offers.</p>
          <p className='opacity-80 mb-1'>FOLLOW US ON SOCIAL MEDIA</p>
          <div className="flex gap-4 cursor-pointer text-primary mb-4 lg:mb-0">
            <Fa.FaFacebookF size={26} />
            <Fa.FaTwitter size={26} />
            <Fa.FaLinkedinIn size={26} />
            <Fa.FaYoutube size={26} />
          </div>
        </div>

        <div className='bg-secondary h-96 rounded-xl p-8 lg:w-1/2 xl:w-1/3'>
          <p className='title text-white'>Join Our Newsletter</p>
          <p className='desc opacity-80 text-white'>Stay Up-to-Date with EmoWall News and Updates</p>
          <div className='mt-6 mb-4'>
            <Fa.FaUserCircle className='absolute mt-1 text-primary text-2xl'/>
            <input type="text" placeholder='Full Name' className='input-styles'/> <br />
          </div>
          <div className='mt-6 mb-4'>
            <Gr.GrMail className='absolute mt-1 text-primary text-2xl'/>
            <input type="email" placeholder='Email Address' className='input-styles'/> <br />
          </div>
          <Button>SUBSCRIBE</Button>

        </div>
      </div>

    </MainLayout>
  );
}
