import Logo from '../assets/PH-logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion'

export default function NavBar() {
  return (
    <>
      {/* Mobile Nav Bar */}
      <div className="flex sticky top-0 z-50 items-center justify-between px-12 py-2 md:hidden bg-[#5b3e31] dark:bg-brown-900">
        <a href="/">
          <motion.img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} whileHover={{ scale: 1.05 }} />
        </a>
        <details className="dropdown">
          <summary className="btn m-1 ml-10">
            <GiHamburgerMenu size={30} />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
            <li>
              <a
                className="hover:bg-[#5b3e31] hover:text-white font-semibold text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
                href="#projects"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#5b3e31] hover:text-white font-semibold text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
                href="#experiences"
              >
                EXPERIENCES
              </a>
            </li>
          </ul>
        </details>
      </div>

      {/* Desktop Nav Bar */}
      <div className="sticky top-0 z-50 hidden md:flex items-center justify-between px-32 lg:px-80 py-6 backdrop-blur-sm bg-gradient-to-r from-[#D2B48C] to-[#E5D3B3]">
        <a href="/" className="flex gap-3 items-center">
          <motion.img src={Logo} alt="Logo" className="w-16 h-16 rounded-full" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.03, rotate: 2 }} />
        </a>
        <div className="flex gap-4 text-xl font-semibold">
          <motion.a
            href="#home"
            className="text-[#5b3e31] p-2 hover:text-white hover:bg-blue-400 hover:rounded-full transition-all duration-300 ease-in"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#projects"
            className="text-[#5b3e31] p-2 hover:text-white hover:bg-blue-400 hover:rounded-full transition-all duration-300 ease-in"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#experiences"
            className="text-[#5b3e31] p-2 hover:text-white hover:bg-blue-400 hover:rounded-full transition-all duration-300 ease-in"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Experience
          </motion.a>
        </div>
      </div>
    </>
  );
}

