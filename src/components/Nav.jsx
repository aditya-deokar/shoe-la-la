import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../contants'


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} 
              alt="Shoe La La"
              width={130}
              height={40}
          />
        </a>
         
         <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
            {
              navLinks.map((item)=>(
                <li className='font-montserrat leading-normal text-lg text-slate-gray '>

                  <a href={item.href}>{item.label}</a>
                  
                </li>
              ))
            }
         </ul>

         <div>
          <ul className='flex flex-1 justify-center items-center max-lg:hidden'>

          {
              ["login/" , "signup"].map((item)=>(
                <li className='font-montserrat leading-normal font-medium text-lg text-slate-gray '>{item}</li>
              ))
          }

           
          </ul>
         </div>

         <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
         </div>

      </nav>
     
     
    </header>
  )
}

export default Nav