import React from 'react';
import { wcuItems } from '../constant/data';

const WhyChooseUs = () => {
  return (
    <section className='section' id='services'>
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <div className="content-wrapper">
          <h2>Why Choose Us</h2>
          <p className='max-w-[444px] mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus dolor, eius ratione voluptatum quam.
          </p>

          <div className='grid gap-5 xs:grid-cols-2 mt-20'>
            {wcuItems.map(({ id, icon, title, text }) => (
              <div key={id} className="feature-item">
                <div className="icon-wrapper">
                  <img 
                    src={icon} 
                    alt={title} 
                    width={40} 
                    height={40}
                    loading="lazy"
                  />
                </div>

                <div className="text-wrapper">
                  <h4 className='my-2'>{title}</h4>
                  <p className="feature-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <figure>
          <img 
            src="/images/wcu-banner.png" 
            alt="Why choose us illustration" 
            width={589} 
            height={715}
            loading="lazy"
            className="w-full h-auto"
          />
        </figure>
      </div>
    </section>
  );
};

export default WhyChooseUs;