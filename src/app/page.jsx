import './app.css'

import MainLayout from '@/components/layouts/main-layout'
import Button from '@/components/button';

export default function Home() {
  return (
    <MainLayout>
      <div className="w-1/2 mt-4">
        <h1 className='bold text-6xl font-bold'>Forms Holistic Digital Approaches to Grow Online Presence.</h1>
        <p className='text-xl my-4'>The Know How Tech is a leader in the digital realm, providing businesses with the tools to transition from traditional to digital operations. Our platform offers a comprehensive set of resources to help businesses increase their profitability.</p>
        <Button>Get started</Button>
      </div>
    </MainLayout>
  );
}
