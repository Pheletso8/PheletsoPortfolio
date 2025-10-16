import idPhoto from '../assets/IMG_1362.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import NavBar from './NavBar';

export default function Hero() {
  return (
    <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex flex-1 items-center justify-center">
            <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center'>
                <img src={idPhoto} alt="ID like photo of me here" className='rounded-2xl object-contain mt-6 w-70 border-4 border-[#5b3e31]'/>
                <div className='flex flex-col items-center md:ml-8'>
                <h3 className='text-lg text-[#5b3e31] font-semibold my-4 '>Hello, I'm</h3>
                <h1 className='text-4xl font-bold animate-pulse mb-4'>Pheletso Marumoloe</h1>
                <h2 className='text-blue-600 text-lg font-medium mb-8 mx-4'>
                    Data Scientist and Software Developer
                </h2>
                <a 
                  href="https://www.linkedin.com/in/pheletso-marumoloe-422372281" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin 
                    size={40} 
                    color="#5b3e31" 
                    className="transition hover:-translate-y-1 hover:scale-110 mb-2" 
                  />
                </a>

                <a 
                  href="https://github.com/Pheletso8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub 
                    size={40} 
                    color="#5b3e31" 
                    className="transition hover:-translate-y-1 hover:scale-110" 
                  />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}
