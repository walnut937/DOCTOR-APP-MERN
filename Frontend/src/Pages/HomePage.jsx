// import React from 'react'

import DocAccordian from "../Components/DocAccordian"
import DoctorSection from "../Components/DoctorSection"
import HeroSection from "../Components/HeroSection"
// import Loader from "../Components/Loader"
import MedicalServices from "../Components/MedicalServices"
import MiniService from "../Components/MiniService"
import Testimonial from "../Components/Testimonial"

function HomePage() {
  return (
    <>
    <div className="hero">
      <HeroSection />
    </div>
    <MiniService />
    <MedicalServices />
    <DoctorSection />
    <DocAccordian />
    <Testimonial />
    {/* <Loader /> */}
    </>
  )
}

export default HomePage