import { Menu, ShoppingCart, User, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { navItems } from '../constant/data'
import Link from './Link'

const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  const handleClick = function(){
    setIsOpen(!isOpen)
  }
  const headerRef = useRef(null);
  useEffect(()=>{
    const headerSlideIn = function(){
      if(this.scrollY > 50){
        headerRef.current.classList.add('active')
      }else{
        headerRef.current.classList.remove('active')
      }
    }
    window.addEventListener('scroll',headerSlideIn)

    return ()=>{
      window.removeEventListener('scroll',headerSlideIn)
    }
  },[])
  return (
    <header ref={headerRef} className='header'>
      <div className="container flex items-center justify-between py-6">
        <a href="#home" className='font-Rubik text-3xl font-bold'>Stilo</a>

        {/* Mobile menu */}
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <button className='ml-auto block' onClick={handleClick}>
            <X size={30} />
          </button>
          <ul className="mt-10 grid gap-8">
            {navItems.map((item)=>(
              <li key={item.id} onClick={handleClick}>
                <Link label={item.label} path={item.path} />
              </li>
            ))}
          </ul>
        </nav>

        <ul className="hidden md:flex md:gap-[52px]">
          {navItems.map((item)=>(
            <li key={item.id}>
              <Link path={item.path} label={item.label} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[14px]">
          <button className="transition-colors duration-300 hover:text-secondaryClr">
            <ShoppingCart size={30} />
          </button>
          <button className="transition-colors duration-300 hover:text-secondaryClr">
            <User size={30} />
          </button>
          <button className="inline-block transition-colors duration-300 hover:text-secondaryClr md:hidden" onClick={handleClick}>
            <Menu size={30} />
          </button>
        </div>
        <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick}></div>
      </div>
    </header>
  )
}

export default Header