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
        <div className="container flex items-center justify-between py-6">
            <a href="#" className="font-Rubik text-3xl font-bold">Stilo</a>

            {/* Mobile Menu */}
            <nav className={`navbar ${isOpen ? "active" : ""}`}>
              <button className="ml-auto block" onClick={handleClick}>
                <X size={30} />
              </button>
              <ul className='mt-10 grid gap-8'>
                {navItems.map(({id,label,path})=>(
                  <li key={id} onClick={handleClick}>
                    <Link label={label} path={path} />
                  </li>
                ))}
              </ul>
            </nav>

            <ul className='hidden md:flex md:gap-[52px]'>
              {navItems.map(({id,label,path})=>(
                <li key={id}>
                  <Link label={label} path={path} />
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
              <button className="transition-colors duration-300 hover:text-secondaryClr md:hidden" onClick={handleClick}>
                <Menu size={30} />
              </button>
            </div>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick}></div>
            
        </div>
    </header>
  )
}
