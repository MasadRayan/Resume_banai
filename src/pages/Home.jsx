import React from 'react'
import Hero from '../components/Home/Hero';
import FeaturedSection from '../components/Home/FeaturedSection';
import Testimonial from '../components/Home/Testimonial';
import CTASection from '../components/Home/CTASection';
import FAQ from '../components/Home/FAQ';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedSection></FeaturedSection>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <CTASection></CTASection>
    </div>
  )
}

export default Home;