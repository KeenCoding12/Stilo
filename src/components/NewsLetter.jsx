import { Send } from 'lucide-react'
import React from 'react'

const NewsLetter = () => {
  return (
    <section className='section'>
      <div className="container grid gap-11 md:grid-cols-2 md:items-center">
        {/* content */}
        <div className="">
          <h2>Subscribe to NewsLetter</h2>
          {/* form */}
          <form action="" className="mt-4 grid gap-5 sm:grid-cols-2">
            {/* input field */}
            <div className="max-w-[300px] border">
              <input 
                type="text" placeholder='Your name'
                className='w-full py-2 indent-3' 
              />
            </div>
            <div className="max-w-[300px] border">
              <input 
                type="email" placeholder='E-mail' 
                className='w-full py-2 indent-3'
              />
            </div>

            <button className="max-w-max bg-primaryClr p-2 text-white transition-colors duration-200 hover:bg-primaryClr/90">
              <Send />
            </button>
          </form>
        </div>
        {/* banner */}
        <figure>
          <img src="/images/news-banner.png" alt="News banner" />
        </figure>
      </div>
    </section>
  )
}

export default NewsLetter