// import React from 'react'

import ServiceCard from "./ServiceCard"
import serv1 from '../assets/images/icon01.png'
import serv2 from '../assets/images/icon02.png'
import serv3 from '../assets/images/icon03.png'
import aboutimg from '../assets/images/about.png'
import aboutcard from '../assets/images/about-card.png'

function MiniService() {
  return (
    <section className="section text-center my-16">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Providing the best</h1>
            <h1 className="text-3xl font-bold mb-5">medical services</h1>

            <p className="md:px-80">World class care for everyone, Our health system offers unmatched, expert health care.</p>
        </div>
        <div className="flex md:flex-row items-center flex-col gap-8 mb-20">
            <ServiceCard img={serv1} heading="Find a Doctor" link='/doctor' />
            <ServiceCard img={serv2} heading="Find a Location" link='/doctor' />
            <ServiceCard img={serv3} heading="Book Appointment" link='/contact' />
        </div>

        {/* About */}
        <div className="flex md:flex-row flex-col items-center gap-10">
            <div className="relative flex-1">
                <img className="w-80" src={aboutimg} alt="" />
                <img className="absolute bottom-0 -right-0 w-72" src={aboutcard} alt="" />
            </div>
            <div className="flex flex-col flex-1 px-5 text-left">
                <h1 className="text-3xl font-bold mb-5">Proud to be one of the nations best</h1>
                <p className="mb-5">For 30 years in a row, US News & World report has recognized as one of the best public hospitals in the Nation and #1 in Texas.</p>

                <p className="mb-5">At Medicare, our doctors are not just professionals; they are healers, partners in your well-being journey. With a wealth of experience across various specialties, our medical experts strive to understand your unique needs, ensuring that you receive comprehensive and tailored healthcare solutions.</p>

                <button className="bg-blue-600 px-3 py-2 text-white rounded-2xl w-32 ">Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default MiniService