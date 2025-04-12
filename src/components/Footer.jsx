import React from 'react'
import { footerItems } from '../constant/data'

const Footer = () => {
  return (
    <footer className="pt-[60px]">
      <div className="container">
        {/* footer top */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1fr_0.6fr_0.8fr] lg:grid-cols-[1fr_0.8fr_0.8fr_0.8fr_0.5fr]">
          <div className="">
            <a href="#" className="font-Rubik text-[33px] font-bold">stilo</a>
            <p className="mb-6 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo sit dolore nostrum cupiditate perspiciatis vero.</p>
          </div>

          {/* footer links */}
          {footerItems.map((item)=>(
            <div className="" key={item.id}>
              <p className="mb-3 text-xl font-semibold text-neutral-900">{item.title}</p>
              <ul className="grid gap-3 text-gray-700">
                {item.links.map((link,index)=>(
                  <li key={index}>
                    <a href={link.href} className="font-medium transition-colors hover:text-primaryClr">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* footer bottom */}
        <div className="mb-10">
          <div className="mb-6 mt-20 h-[1px] w-full bg-gray-300"></div>
          <p>&copy; {new Date().getFullYear()} by stilo Furniture.All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer