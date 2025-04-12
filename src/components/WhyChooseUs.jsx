import React from 'react'
import { wcuItems } from '../constant/data'

const WhyChooseUs = () => {
  return (
    <section className='section' id='service'>
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2>Why Choose Us</h2>
          <p className="mt-4 max-w-[444px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus tenetur alias vero excepturi voluptatem!
          </p>

          <div className="mt-20 grid gap-5 xs:grid-cols-2">
            {wcuItems.map((item)=>(
              <div className="" key={item.id}>
                <div className="">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    width={40}
                    height={40}
                    loading='lazy'
                 />
                </div>
                <div>
                  <h4 className='my-2'>{item.title}</h4>
                  <p className=''>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <figure>
          <img 
            src="/images/wcu-banner.png" 
            alt="why choose us illustration"
            width={589}
            height={715}
            loading='lazy'
         />
        </figure>
      </div>
    </section>
  )
}

export default WhyChooseUs