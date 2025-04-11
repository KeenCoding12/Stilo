import React, { useRef } from 'react'
import { testimonialsItem } from '../constant/data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper,SwiperSlide } from 'swiper/react'
import {Navigation, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
    const paginationRef = useRef<HTMLDivElement>(null);
  return (
    <section className='section pb-[80px]' id='testimonials'>
        <div className="container relative">
            <h2 className='text-center mb-12'>Testimonials</h2>
            <Swiper 
                modules={[Navigation,Pagination,Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl:'.testimonials-prev',
                    nextEl:'.testimonials-next'
                }}
                pagination={{
                    clickable:true,
                    el:paginationRef.current,
                    bulletClass:'testimnials-bullet',
                    bulletActiveClass:'testimonial-bullet-active'
                }}
                loop={true}
                autoplay={{
                    delay:5000,
                    disableOnInteraction:false,
                    pauseOnMouseEnter:true
                }}
                
            className="max-w-[760px] mx-auto">
                {testimonialsItem.map(({id,text,profileImg,author,job})=>(
                    <SwiperSlide key={id}>
                        <div className="px-4 sm:px-10 text-center">
                            <blockquote className="text-lg italic mb-8">
                                "{text}"
                            </blockquote>

                            <div className="flex flex-col items-center">
                                <div className="max-w-max mx-auto mt-3 mb-5">
                                    <img src={profileImg} alt={author} 
                                    width={77} 
                                    height={77} className='rounded-full aspect-square object-cover' />
                                </div>

                                <h3>{author}</h3>
                                <p>{job}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="">
                <button className="testimonials-prev absolute top-1/2 left-0 bg-gray-200 p-2 hover:bg-primaryClr rounded-full focus:outline-none focus:ring-2 focus:ring-primaryClr/50 transition-colors duration-300">
                    <ChevronLeft  />
                </button>
                <button className="testimonials-next absolute top-1/2 right-0 bg-gray-200 p-2 hover:bg-primaryClr rounded-full transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-primaryClr/50">
                    <ChevronRight />
                </button>
            </div>

            {/* <div
                ref={paginationRef}
                role='group'
                aria-label='Testimnials navigation dots'
            /> */}
            
            
            {/* <div className="flex justify-center gap-2 my-5">
                <div className="w-2 h-2 bg-primaryClr rounded-full"></div>
                <div className="w-2 h-2 bg-primaryClr/25 rounded-full"></div>
                <div className="w-2 h-2 bg-primaryClr/25 rounded-full"></div>
                <div className="w-2 h-2 bg-primaryClr/25 rounded-full"></div>
            </div> */}
        </div>
    </section>
  )
}

export default Testimonials