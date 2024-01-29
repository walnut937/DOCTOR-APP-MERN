// import React from 'react'

import DoctorsMini from "./DoctorsMini"


import doc1 from '../assets/images/doctor-img01.png'
import doc2 from '../assets/images/doctor-img02.png'
import doc3 from '../assets/images/doctor-img03.png'

function DoctorSection() {
  return (
    <section className='section py-16'>
        <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Our Great Doctors</h1>
                {/* <h1 className="text-3xl font-bold mb-5">medical services</h1> */}

                <p className="md:px-80">World class care for everyone, Our health system offers unmatched, expert health care.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 mx-auto">
          <DoctorsMini profile={doc1} occupation="Sergeon" name="Dr. Philip Bosch" rating="4.5" feedback="2" hospital="At Mount Adora Hospital, Sylnet" />
          <DoctorsMini profile={doc2} occupation="Neurologist" name="Dr. Samuel Singh" rating="5" feedback="2" hospital="At Mount Adora Hospital, Sylnet" />
          <DoctorsMini profile={doc3} occupation="Dermatologist" name="Dr. Regina Albert" rating="4.3" feedback="4" hospital="At in error blanditils" />
        </div>
    </section>
  )
}

export default DoctorSection