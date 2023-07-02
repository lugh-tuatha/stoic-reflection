import React from 'react'

import MainLayout from '@/components/layouts/main-layout'
import AboutIntro from '@/components/about/AboutIntro'

import '../../app/globals.css'

import Image from 'next/image'
import AboutMVO from '@/components/about/AboutMVO'

function About() {
  return (
    <MainLayout>
      <AboutIntro />
      <AboutMVO />
    </MainLayout>
  )
}

export default About