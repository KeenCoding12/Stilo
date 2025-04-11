import React from 'react'
import { footerItems } from '../constant/data'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const FooterSec = () => {
  return (
    <footer className='pt-[60px]'>
      <div className="container">
        <div className='grid sm:grid-cols-2 md:grid-cols-[1fr_0.6fr_0.8fr] lg:grid-cols-[1fr_0.8fr_0.8fr_0.8fr_0.5fr] gap-10'>
            <div className="">
              <a href="#" className='text-[33px] font-bold font-Rubik'>stilo</a>
              <p className='mt-3 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, magni velit! Impedit velit harum qui nobis vero! Harum, nihil adipisci!</p>
            </div>

              {footerItems.map((item)=>(
                  <div className="" key={item.id}>
                    <p className='text-xl text-neutral-900 font-semibold mb-3'>{item.title}</p>
                    <ul className='grid gap-3 text-gray-700 '>
                      {item.links.map((link,index)=>(
                        <li key={index}>
                          <a href={link.href} className='hover:text-primaryClr transition-colors font-medium'>{link.link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              }
            </div>
        <div className="mb-10">
          <div className="w-full h-[1px] bg-gray-300 mt-20 mb-6"></div>
          <div className="">
            <p>&copy; {new Date().getFullYear()} by Stilo Furniture. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSec