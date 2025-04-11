import { useEffect, useRef, useState }  from 'react'
import { navItems } from '../constant/data'
import { ShoppingCart, User, X,Menu } from 'lucide-react'
import Link from './Link';

export const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  const handleClick = function(){
    setIsOpen(prev=>!prev)
  }
  const headerRef = useRef(null);


  useEffect(()=>{
    const headerSlideIn = function(){
      if(this.scrollY > 50){
        headerRef.current.classList.add('active');
      }else{
        headerRef.current.classList.remove('active');
      }
    }

    window.addEventListener('scroll',headerSlideIn);

    return () => {
      window.removeEventListener('scroll',headerSlideIn)
    }
  },[])


  return (
    <header ref={headerRef} className='header'>
        <div className="container flex justify-between items-center py-6">
            <a href="#" className="text-3xl font-bold font-Rubik">Stilo</a>

            {/* Mobile Menu */}
            <nav className={`navbar ${isOpen ? "active" : ""}`}>
              <button className="block ml-auto" onClick={handleClick}>
                <X size={30} />
              </button>
              <ul className='grid gap-8 mt-10'>
                {navItems.map(({id,label,path})=>(
                  <li key={id}>
                    <Link label={label} path={path} />
                  </li>
                ))}
              </ul>
            </nav>

            <ul className='md:flex md:gap-[52px] hidden'>
              {navItems.map(({id,label,path})=>(
                <li key={id}>
                  <Link label={label} path={path} />
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-[14px]">
              <button className="transition-colors hover:text-secondaryClr duration-300 ">
                <ShoppingCart size={30} />
              </button>
              <button className="transition-colors hover:text-secondaryClr duration-300 ">
                <User size={30} />
              </button>
              <button className="transition-colors hover:text-secondaryClr duration-300 md:hidden" onClick={handleClick}>
                <Menu size={30} />
              </button>
            </div>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick}></div>
            
        </div>
    </header>
  )
}
