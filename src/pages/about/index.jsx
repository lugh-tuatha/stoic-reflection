import React from 'react'

import MainLayout from '@/components/layouts/main-layout'
import AboutIntro from '@/components/about/AboutIntro'

import '../../app/globals.css'

import Image from 'next/image'

function About() {
  return (
    <MainLayout>
      <AboutIntro />
    </MainLayout>
  )
}

export default About