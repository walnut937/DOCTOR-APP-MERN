import { useState } from 'react';
import doc from '../assets/images/faq-img.png'
import Accordian from './Accordian'

function DocAccordian() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordiansData = [
    { heading: "What is medical care?" },
    { heading: "What happens if I need to go to a hospital?" },
    { heading: "What will be the services?" },
    { heading: "Can I visit your medical office?" },
    { heading: "Do you provide urgent care?" },
  ];


  return (
    <section className='section py-16'>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='flex-1'>
            <img className='w-[400px]' src={doc} alt="" />
          </div>
          <div className='flex-1 md:p-10'>
            <h1 className='text-3xl font-bold mb-5'>Most questions by our beloved patients</h1>
            <div className='flex flex-col gap-2'>
              {accordiansData.map((data, index) => (
              <Accordian
                key={index}
                heading={data.heading}
                isOpen={index === openAccordionIndex}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default DocAccordian

