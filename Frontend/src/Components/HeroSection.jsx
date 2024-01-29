// import React from 'react'
import ColouredScore from "./colouredScore"
import doc1 from "../assets/images/hero-img01.png"
import doc2 from "../assets/images/hero-img02.png"
import doc3 from "../assets/images/hero-img03.png"

function HeroSection() {
  return (
    <section className='section px-4'>
        <div className="flex md:flex-row flex-col items-center gap-10 py-16">
            {/* text-section */}
            <div className="flex-1">
                <h1 className="text-5xl font-bold mb-3">We help patients</h1>
                <h1 className="text-5xl font-bold mb-3">live a healthy,</h1>
                <h1 className="text-5xl font-bold mb-5">longer life.</h1>


                <p className="mb-8">Welcome to a place where expertise meets compassion. Our team of dedicated doctors is committed to providing you with the highest standard of care, combining cutting-edge medical knowledge with a personalized approach.</p>

                <button className="px-3 py-2 bg-blue-500 mb-8 rounded-2xl text-white">Request an appointment</button>

                <div className="flex items-center gap-10">
                    <ColouredScore num="30" mark="+" color="bg-orange-500" text="Years of Experience" />
                    <ColouredScore num="15" mark="+" color="bg-purple-500" text="Clinic Location" />
                    <ColouredScore num="100" mark="%" color="bg-blue-500" text="Patient Satisfaction" />
                </div>
            </div>

            {/* img-section */}
            <div className="flex-1 flex gap-5">
                    <div className="flex flex-col mb-auto">
                        <img className="w-72 h-[400px]" src={doc1} alt="" />
                    </div>
                    <div className="flex flex-col gap-5 mt-auto">
                        <img className="w-48 h-40" src={doc2} alt="" />
                        <img className="w-48 h-40" src={doc3} alt="" />
                    </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection