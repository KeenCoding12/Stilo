import { Send } from 'lucide-react'
import React from 'react'

const News = () => {
  return (
    <section>
        <div className="container grid md:grid-cols-2 md:items-center gap-11">
            <div className="">

                <h4>Subscribe to Newsletter</h4>

                <form action='' className="grid gap-5 mt-4 sm:grid-cols-2">
                    <div className="border max-w-[300px]">
                        <input type="text" id='' name='' placeholder='Enter your name' required className='w-full indent-3 py-2' />
                    </div>
                    <div className="max-w-[300px] border ">
                        <input type="email" name="" id="" placeholder='Enter your e-mail' required className='h-full w-full indent-3 py-2' />
                    </div>

                    <button className='bg-primaryClr text-white p-2 max-w-max hover:bg-primaryClr/90 transition-colors duration-200'>
                        <Send />
                    </button>
                </form>
            </div>

            <div className="">
                <img src="/images/news-banner.png" alt="News banner" />
            </div>
        </div>
    </section>
  )
}

export default News