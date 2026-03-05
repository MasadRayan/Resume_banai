import React from 'react'
import Hero from '../components/Home/Hero';
import FeaturedSection from '../components/Home/FeaturedSection';
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedSection></FeaturedSection>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home;