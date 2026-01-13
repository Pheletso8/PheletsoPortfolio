import { ArrowDown } from 'lucide-react';

export default function Hero() {

  return (
    <div id='home' className="min-h-screen bg-background1 flex flex-col gap-6 items-start justify-center px-6 md:px-12 lg:px-24">
      <h2 className="text-text-main1 font-medium text-lg">Software developer & Data Scientist</h2>
      <h1 className="text-4xl md:text-6xl font-large mb-6">
          <span className="bg-linear-to-r from-primary1 to-secondary1 bg-clip-text text-transparent font-serif">
            Complex data to <br className="hidden md:block" /> Actionable insights
          </span>
        </h1>
        <h2 className="bg-linear-to-r from-text-main1 to-secondary1 
                      bg-clip-text text-transparent font-medium text-lg"> 
          I build scalable software solutions that blend aesthetics with functionality
        </h2>

      <a href='#projects' className='flex gap-3 items-center pt-8 group cursor-pointer'>
        <span className='p-2 text-accent1 border-white/10 border-solid border-[1.5px] rounded-full group-hover:bg-accent1/80 group-hover:text-text-main1 transition-all duration-300 ease-in-out'>
          <ArrowDown />
        </span>
        <span className='text-text-main1 font-medium group-hover:text-accent1/80 transition-colors duration-300 ease-in-out'>
          See Featured work
        </span>
      </a>
      <div className='absolute bottom-12 right-6 md:right-12 lg:right-24 flex flex-col gap-12'>
          <div className="text-right">
            <span className="text-accent1/80 text-4xl font-serif">1+</span>
            <p className="text-xs text-text-main1/40 mt-1">Years Experience</p>
          </div>
          <div className="text-right">
            <span className="text-accent1/80 text-4xl font-serif">5+</span>
            <p className="text-xs text-text-main1/40 mt-1">Projects Delivered</p>
          </div>
        </div>
    </div>
  )
}
