import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className='bg-primaryClr py-[120px] md:py-[150px]' id='home'>
      <div className="container grid gap-14 md:grid-cols-2 md:items-center">
        <div className="text-content">
          <h1 className='text-4xl sm:text-5xl lg:text-7xl text-white'>
            Modern Interior <br />Design Studio
          </h1>
          <p className="text-lightClr mt-5 mb-8 max-w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, asperiores dignissimos.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button 
              label='Shop Now' 
              className='primary-btn' 
              aria-label="Shop Now"
            />
            <Button 
              label='Explore' 
              className='secondary-btn' 
              aria-label="Explore More"
            />
          </div>
        </div>

        <figure>
          <img 
            src="/images/hero-banner.png" 
            alt="Modern interior design showcase" 
            loading='lazy' 
            width={744} 
            height={614}
            className='w-full h-auto'
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;