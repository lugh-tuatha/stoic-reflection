import './app.css'

import MainLayout from '@/components/layouts/main-layout'
import Button from '@/components/button';

import Image from 'next/image';

import { expertise } from '../data/Expertise'

export default function Home() {
  return (
    <MainLayout>
      <div className='lg:flex justify-between'>
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
          className='mx-auto lg:mx-0 w-full md:w-1/2'/>
      </div>

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
    </MainLayout>
  );
}
