import idPhoto from '../assets/IMG_1362.jpeg'
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

export default function Hero() {

  return (
    <div id='home' className="min-h-screen bg-gradient-to-r from-[#f9f9f9] to-[#ffffff] p-4 flex flex-col">
        <div className="flex flex-1 items-center justify-center">
            <div className='flex flex-col md:gap-8 lg:gap-20 items-center md:flex-row md:items-center md:justify-center'>
                <img src={idPhoto} alt="ID like photo of me here" className='rounded-2xl object-contain mt-6 w-70 border-4 border-[#bc9b5e] shadow-xl shadow-blue-300'/>
                <div className='flex flex-col items-center md:ml-8'>
                <h3 className='text-lg text-[#5b3e31] font-semibold my-4 '>Hello, I'm</h3>
                <h1 className='text-4xl font-bold text-[#5b3e31] mb-4 md:text-4xl lg:text-6xl'>Pheletso Marumoloe</h1>
                <h2 className='text-blue-400 text-lg font-medium mb-8 mx-4'>
                    Data Scientist and Software Developer
                </h2>
                <p className='text-center mb-5 font-medium text-[#5b3e31] md:text-lg lg:text-xl'>Transforming complex data into actionable insights and<br /> building scalable software solutions.<br /> Specialized in machine learning, data pipelines, <br /> and full-stack development.</p>
                <span className='flex gap-3 text-[#5b3e31]'>
                  <a 
                    href="https://www.linkedin.com/in/pheletso-marumoloe-422372281" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='p-4 border-2 border-blue-600 rounded-full bg-blue-400 hover:bg-[#5b3e31] hover:border-blue-300 text-white transition-all duration-300 ease-in'
                  >
                    <Linkedin />
                  </a>

                  <a 
                    href="https://github.com/Pheletso8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='p-4 border-2 border-blue-600 rounded-full bg-blue-400 hover:bg-[#5b3e31] hover:border-blue-300 text-white transition-all duration-300 ease-in'
                  >
                    <Github />
                  </a>
                </span>
                </div>
            </div>
        </div>
    </div>
  )
}
