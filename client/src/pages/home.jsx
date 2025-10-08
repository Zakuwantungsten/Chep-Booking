import React from 'react'
import Hero from '../components/Hero'
import FeaturedHouses from '../components/FeaturedHouses'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

const home = () => {
  return (
    <>
        <Hero/>
        <FeaturedHouses/>
        <Testimonials/>
        <Newsletter/>
    </>
  )
}

export default home