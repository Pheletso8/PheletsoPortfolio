import { ArrowDown, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
// LangflowChat moved to top-level layout so it remains fixed across pages

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Hero() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show alert after 3 seconds to let the hero animation finish first
    const timer = setTimeout(() => setShowAlert(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-background1 flex flex-col justify-center relative overflow-hidden"
    >
      {/* --- Notification Alert --- */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-20 right-6 z-100 max-w-70 md:max-w-xs"
          >
            <div className="bg-primary1/20 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-md relative overflow-hidden group">
              {/* Subtle gradient glow to match your text */}
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary1 to-secondary1" />
              
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-accent1/40 rounded-lg border-2 border-accent1 text-accent1">
                  <MessageSquare size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="text-text-main1 text-sm font-medium">AI Assistant Online</h4>
                  <p className="text-text-main1/80 text-xs mt-1 leading-relaxed">
                    Have questions about my projects? Ask my chatbot below!
                  </p>
                </div>
                <button 
                  onClick={() => setShowAlert(false)}
                  className="text-text-main1/40 cursor-pointer hover:text-text-main1 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-12 lg:px-24 xl:px-40 w-full max-w-400"
      >
        <motion.h2 variants={fadeUp} className="text-text-main1 font-medium text-base md:text-lg mb-2">
          Software developer & Data Scientist
        </motion.h2>

        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-large mb-6 leading-tight">
          <span className="bg-linear-to-r from-primary1 to-secondary1 bg-clip-text text-transparent font-serif">
            Complex data to <br className="hidden md:block" /> Actionable insights
          </span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="bg-linear-to-r from-text-main1 to-secondary1 bg-clip-text text-transparent
          font-medium text-lg md:text-xl max-w-2xl"
        >
          I build scalable software solutions that blend aesthetics with functionality
        </motion.h2>

        <motion.a
          variants={fadeUp}
          href="#projects"
          className="flex gap-4 items-center pt-10 group cursor-pointer w-fit"
        >
          <span className="p-3 text-accent1 border-white/10 border-[1.5px] rounded-full
            group-hover:bg-accent1/80 group-hover:text-text-main1 transition-all duration-300">
            <ArrowDown size={20} />
          </span>
          <span className="text-text-main1 font-medium group-hover:text-accent1/80 transition-colors duration-300">
            See Featured work
          </span>
        </motion.a>
      </motion.div>

      {/* Stats & Chat Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-12 right-6 md:right-12 lg:right-24 xl:right-40 flex flex-col items-end gap-8 md:gap-12"
      > 
        <div className="text-right">
          <span className="text-accent1/80 text-4xl md:text-5xl font-serif">1+</span>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-text-main1/40 mt-1">
            Years Experience
          </p>
        </div>
        <div className="text-right">
          <span className="text-accent1/80 text-4xl md:text-5xl font-serif">5+</span>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-text-main1/40 mt-1">
            Projects Delivered
          </p>
        </div>
      </motion.div>
    </section>
  );
}