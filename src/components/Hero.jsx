import React from 'react'
import Button from './Button'

export const Hero = () => {
  return (
    <section className='bg-primaryClr py-[120px] md:py-[150px]' id='home'>
      <div className="container grid gap-14 md:grid-cols-2 md:items-center">
        <div className="text-center md:text-left">
          <h1 className='text-4xl text-white sm:text-5xl lg:text-7xl'>Redesign Your Space, Refine Your Look.</h1>
          <p className="mx-auto mb-8 mt-5 max-w-[500px] text-white md:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero numquam nisi, illum laboriosam ea!</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button label='Shop Now' aria-label='Shop Now' className='primary-btn' />
            <Button label='Explore' aria-label='Shop Now' className='secondary-btn' />
          </div>
        </div>
        <figure>
          <img src="/images/hero-banner.png" alt="Modern interior design showcase" loading='lazy' />
        </figure>
      </div>
    </section>
  )
}
