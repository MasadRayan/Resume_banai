import React from 'react'
import Hero from '../components/Home/Hero';
import FeaturedSection from '../components/Home/FeaturedSection';
import Testimonial from '../components/Home/Testimonial';
import CTASection from '../components/Home/CTASection';
import FAQ from '../components/Home/FAQ';
import PricingSection from '../components/Home/PricingSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedSection></FeaturedSection>
      <Testimonial></Testimonial>
      <PricingSection></PricingSection>
      <FAQ></FAQ>
      <CTASection></CTASection>
    </div>
  )
}

export default Home;