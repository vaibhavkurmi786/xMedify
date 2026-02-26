import React from 'react'
import Heading from '../Components/Heading'
import Nav from '../Components/Nav'
import HeroSection from '../Components/HeroSection'
import ServiceIcons from '../Components/ServiceIcons'
import OffersCarousel from '../Components/OffersCarousel'
import Specialization from '../Components/Specialization'
import MedicalSpecialists from '../Components/MedicalSpecialists'
import PatientCaring from '../Components/PatientCaring'
import LatestNews from '../Components/LatestNews'
import Statistics from '../Components/Statistics'
import FAQ from '../Components/FAQ'
import AppDownload from '../Components/AppDownload'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <Heading />
      <Nav />
      <HeroSection />
      <OffersCarousel />
      <Specialization />
      <MedicalSpecialists />
      <PatientCaring />
      <LatestNews />
      <Statistics />
      <FAQ />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default HomePage
