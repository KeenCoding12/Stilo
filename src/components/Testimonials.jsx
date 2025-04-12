import React from 'react'
import { Navigation,Autoplay, Pagination } from 'swiper/modules'
import { testimonialsItem } from '../constant/data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper,SwiperSlide } from 'swiper/react'


//swiper styles
import 'swiper/css'
import 'swiper/css/navigation'


const Testimonials = () => {
  return (
    <section className='section pb-[80px]' id='testimonials'>
      <div className="container relative">
        <h2 className="mb-12 text-center">Testinonials</h2>
        {/* swiper slider */}
        <Swiper 
          modules={[Navigation,Pagination,Autoplay]}
          autoplay={{
            delay:5000,
            disableOnInteraction:false,
            pauseOnMouseEnter:true
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl:'.testimonials-prev',
            nextEl:'.testimonials-next'
          }}
          className="mx-auto max-w-[760px]"  
        >
          {testimonialsItem.map((item)=>(
            <SwiperSlide key={item.id}>
              <div className="px-4 text-center sm:px-10">
                {/* Quote */}
                <blockquote className='px-4 text-center sm:px-10'>
                  "{item.text}"
                </blockquote>
                <div className="flex flex-col items-center">
                  {/* author image */}
                  <div className="mx-auto mb-5 mt-3 max-w-max">
                    <img 
                      src={item.profileImg} 
                      alt={item.author} 
                      width={77}
                      height={77}
                      className='aspect-square rounded-full object-cover'
                    />
                  </div>
                  {/* content */}
                  <h3>{item.author}</h3>
                  <p>{item.job}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          {/* Navigation buttons */}
        <div>
          <button className="testimonials-prev absolute left-0 top-1/2 z-30 rounded-full bg-gray-200 p-2 transition-colors duration-300 hover:bg-primaryClr hover:text-white focus:outline-none focus:ring-2 focus:ring-primaryClr">
            <ChevronLeft />
          </button>
          <button className="testimonials-next absolute right-0 top-1/2 z-30 rounded-full bg-gray-200 p-2 transition-colors duration-300 hover:bg-primaryClr hover:text-white focus:outline-none focus:ring-2 focus:ring-primaryClr">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials