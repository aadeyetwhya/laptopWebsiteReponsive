import React from 'react'
import Layout from '../../components/layout/Layout'
import NavBar from '../../components/navbar/NavBar'
import HeroSection from '../../components/heroSection/HeroSection'
import HomeCardSection from '../../components/homeCardSection/HomeCardSection'
import ContactUs from '../../components/contact/ContactUs'

function HomePage() {
  return (
   
    <Layout>
        <HeroSection/>
      <HomeCardSection/>
      <ContactUs/>
    </Layout>
   
  )
}

export default HomePage