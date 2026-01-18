import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 xl:px-40 flex items-center justify-between
        transition-all duration-500 ease-in-out
        ${isScrolled
          ? 'bg-background1/80 backdrop-blur-lg py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <a href="#home" className="group flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary1/10 border border-primary1/30 flex items-center justify-center group-hover:bg-primary1/20 transition-all duration-300">
          <span className="font-serif text-lg md:text-xl text-primary1">PM</span>
        </div>
        <span className="text-lg md:text-xl hidden sm:flex text-text-main1 hover:text-primary1 transition-colors duration-300 font-medium">
          Pheletso Marumoloe
        </span>
      </a>

      <div className="flex items-center gap-2 md:gap-6 text-sm text-text-main1 font-medium">
        <a href="#projects" className="p-2 text-primary1 hover:text-text-main1 transition-colors duration-300">
          My Work
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 text-primary1 border-primary1/40 border rounded-full
          hover:bg-primary1/80 hover:text-white hover:border-primary1
          transition-all duration-300 bg-primary1/5 backdrop-blur-sm"
        >
          Let&apos;s Talk
        </a>
      </div>
    </motion.nav>
  );
}