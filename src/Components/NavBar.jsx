import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 lg:px-24 py-[1.3rem] flex items-center justify-between
        ${isScrolled 
          ? 'bg-background1/70 backdrop-blur-md py-[0.8rem] shadow-sm' 
          : 'bg-transparent'
        }`}
    >
      <a href="#home" className='group flex items-center gap-3'>
        <div className='w-12 h-12 rounded-full bg-primary1/10 border border-primary1/30 flex items-center justify-center group-hover:bg-primary1/20 transition-all duration-300'>
          <span className="font-serif text-xl text-primary1">PM</span>
        </div>
        <span className="text-xl hidden md:flex text-text-main1 hover:text-primary1 transition-colors duration-300">
          Pheletso Marumoloe
        </span>
      </a>

      <div className='flex gap-4 text-sm text-text-main1 font-medium'>
        <a href="#projects" className='p-2 text-primary1 hover:text-text-main1/80 transition-colors duration-300'>My Work</a>
        <a href="#contact" className='p-2 px-4 text-primary1 hover:border-primary1/80 hover:text-text-main1 border-primary1/40 border rounded-full hover:bg-primary1/80 bg-primary1/20 transition-colors duration-300'>
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

