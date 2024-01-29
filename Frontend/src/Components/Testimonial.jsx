import SwiperElement from "./Swiper"


function Testimonial() {
  return (
    <section className='section py-16'>
        <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">What our patients say</h1>
                {/* <h1 className="text-3xl font-bold mb-5">medical services</h1> */}

                <p className="md:px-80">World class care for everyone, Our health system offers unmatched, expert health care.</p>
        </div>
        <div>
            <SwiperElement />
        </div>
    </section>
  )
}

export default Testimonial