// import React from 'react'

import MedicalServCard from "./MedicalServCard"
import aboutcard from '../assets/images/about-card.png'
import featureImg from '../assets/images/feature-img.png'

function MedicalServices() {
  return (  
    <section className="section py-16">
        <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Providing the best</h1>
                <h1 className="text-3xl font-bold mb-5">medical services</h1>

                <p className="md:px-80">World class care for everyone, Our health system offers unmatched, expert health care.</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-16 gap-8 mb-28">
            <MedicalServCard heading='Cancer Care' bgcolor='bg-orange-300' textcolor='bg-orange-500' />
            <MedicalServCard heading='Labour & Delivery' bgcolor='bg-purple-300' textcolor='bg-purple-500' />
            <MedicalServCard heading='Heart & Vascular' bgcolor='bg-blue-300' textcolor='bg-blue-500' />
            <MedicalServCard heading='Mental Health' bgcolor='bg-yellow-300' textcolor='bg-yellow-500' />
            <MedicalServCard heading='Neurology' bgcolor='bg-red-300' textcolor='bg-red-500' />
            <MedicalServCard heading='Burn Treatment' bgcolor='bg-green-300' textcolor='bg-green-500' />
        </div>
        {/* About */}
        <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-10">
        <div className="flex flex-col flex-1 px-5 text-left">
                <h1 className="text-3xl font-bold mb-5">Get virtual Treatment anytime.</h1>
                <p className="mb-5">1.Schedule the appointment directly</p>
                <p className="mb-5">2.Search for your physician here, and contact their office.</p>
                <p className="mb-10">3.View our physician who are accepting new patients, use the online scheduling tool to select an appointment time.</p>

                <button className="bg-blue-600 px-3 py-2 text-white rounded-2xl w-32 ">Learn More</button>
            </div>
            <div className="relative flex-1">
                <img className="w-80 ml-auto" src={featureImg} alt="" />
                <img className="absolute bottom-0 -left-0 w-72" src={aboutcard} alt="" />
            </div>
        </div>
    </section>
  )
}

export default MedicalServices