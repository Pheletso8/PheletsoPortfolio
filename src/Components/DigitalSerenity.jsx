import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DigitalSerenity = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
    }),
  };

  return (
    <div className="relative w-full py-20 flex flex-col items-start">
      {/* Animated Background Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary1 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div custom={1} variants={fadeIn} initial="hidden" animate="visible">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase text-accent1 mb-6 inline-block">
          Innovation Meets Data
        </span>
      </motion.div>

      <motion.h1 
        custom={2} 
        variants={fadeIn} 
        initial="hidden" 
        animate="visible"
        className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-white"
      >
        Complex data to <br />
        <span className="bg-linear-to-r from-primary1 to-secondary1 bg-clip-text text-transparent">
          Actionable insights
        </span>
      </motion.h1>

      <motion.p 
        custom={3} 
        variants={fadeIn} 
        initial="hidden" 
        animate="visible"
        className="text-lg md:text-xl text-text-main1/60 max-w-2xl mb-10 leading-relaxed"
      >
        I am a Software Developer & Data Scientist dedicated to building scalable solutions that blend technical excellence with aesthetic functionality.
      </motion.p>

      <motion.div 
        custom={4} 
        variants={fadeIn} 
        initial="hidden" 
        animate="visible"
        className="flex flex-wrap gap-6"
      >
        <button className="px-8 py-4 bg-primary1 text-white rounded-full font-medium hover:bg-primary1/90 transition-all flex items-center gap-2 group">
          View Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-all">
          Contact Me
        </button>
      </motion.div>
    </div>
  );
};

export default DigitalSerenity;