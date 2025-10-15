import Logo from '../assets/PH-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className=''>

        {/* Mobile Nav Bar */}
        <div className='flex items-center justify-between px-[3rem] pt-[1rem] md:hidden'>
            <a href=""><img src={Logo} alt="Logo" className='w-[6rem] h-[6rem] rounded-full'/></a>
            <details className="dropdown">
                <summary className="btn m-1 ml-[40px]"><GiHamburgerMenu size={30}/></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a className='hover:bg-[#5b3e31] hover:text-white font-semibold text-blue-600'>PROJECTS</a></li>
                    <li><a className='hover:bg-[#5b3e31] hover:text-white font-semibold text-blue-600'>EXPERIENCES</a></li>
                </ul>
            </details>
        </div>

        {/* Desktop Nav Bar */}
        <div className='md:flex items-center justify-between px-[3rem] py-[1.5rem] hidden'>
            <a href=""><img src={Logo} alt="Logo" className='w-[7rem] h-[7rem] rounded-full'/></a>
            <div className='flex gap-4 text-xl font-semibold'>
                <a href="" className='text-[#5b3e31] hover:border-b-2 border-blue-600 hover:text-blue-600 p-2 delay-100 ease-in-out transition-all duration-300'>Projects</a>
                <a href="" className='text-[#5b3e31] hover:border-b-2 border-blue-600 hover:text-blue-600 p-2 delay-100 ease-in-out transition-all duration-300'>Experience</a>
            </div>
        </div>
    </div>
  )
}
