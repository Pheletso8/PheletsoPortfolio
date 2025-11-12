import Logo from '../assets/PH-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className=''>

        {/* Mobile Nav Bar */}
        <div className='flex items-center justify-between px-[3rem] pt-[1rem] md:hidden bg-[#5b3e31] p-2'>
            <img src={Logo} alt="Logo" className='w-[6rem] h-[6rem] rounded-full'/>
            <details className="dropdown">
                <summary className="btn m-1 ml-[40px]"><GiHamburgerMenu size={30}/></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a className='hover:bg-[#5b3e31] hover:text-white font-semibold text-blue-600 hover:text-lg delay-150 ease-in-out transition-all duration-300' href='#projects'>PROJECTS</a></li>
                    <li><a className='hover:bg-[#5b3e31] hover:text-white font-semibold text-blue-600 hover:text-lg delay-150 ease-in-out transition-all duration-300' href='#experiences'>EXPERIENCES</a></li>
                </ul>
            </details>
        </div>

        {/* Desktop Nav Bar */}
        <div className='md:flex items-center md:px-[10rem] lg:px-[20rem] justify-between px-[3rem] py-[1.3rem] hidden bg-linear-to-r from-[#D2B48C] to-[#E5D3B3]'>
            <a href=""><img src={Logo} alt="Logo" className='w-[4rem] h-[4rem] rounded-full'/></a>
            <div className='flex gap-4 text-xl font-semibold'>
                <a href="#home" className='text-[#5b3e31] p-2 hover:bg-blue-400 rounded-full hover:text-white/80 transition-colors duration-300'>Home</a>
                <a href="#projects" className='text-[#5b3e31] p-2 hover:bg-blue-400 rounded-full hover:text-white/80 transition-colors duration-300'>Projects</a>
                <a href="#experiences" className='text-[#5b3e31] p-2 hover:bg-blue-400 rounded-full hover:text-white/80 transition-colors duration-300'>Experience</a>
            </div>
        </div>
    </div>
  );
}

