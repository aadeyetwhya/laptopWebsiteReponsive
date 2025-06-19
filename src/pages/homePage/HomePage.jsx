import React from 'react'
import Layout from '../../components/layout/Layout'
import NavBar from '../../components/navbar/NavBar'
import HeroSection from '../../components/heroSection/HeroSection'
import HomeCardSection from '../../components/homeCardSection/HomeCardSection'

function HomePage() {
  return (
   
    <Layout>
        <HeroSection/>
      <HomeCardSection/>
    </Layout>
   
  )
}

export default HomePage