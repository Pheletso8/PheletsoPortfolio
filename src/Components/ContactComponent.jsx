import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ContactComponent() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-background1 text-text-main1 border-t border-primary1/10"
    >
      <div className="flex flex-col md:flex-row justify-between gap-12 px-6 md:px-12 lg:px-24 xl:px-40 py-16 md:py-24">
        <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-xl">
          <h2 className="font-medium text-lg opacity-80">Get in touch</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight bg-linear-to-r from-primary1 to-secondary1 bg-clip-text text-transparent">
            Let&apos;s Create <br /> Something Great
          </h1>

          <a href="mailto:pheletso.marmoloe8@gmail.com" className="group mt-6 flex items-center gap-3 w-fit">
            <div className="p-3 rounded-full border border-secondary1/70 bg-secondary1/30 text-secondary1 group-hover:bg-secondary1 group-hover:text-text-main1 transition-all duration-300">
              <Mail size={22} />
            </div>
            <span className="font-medium text-lg md:text-xl bg-linear-to-r from-text-main1 to-secondary1 bg-clip-text text-transparent group-hover:to-accent1 transition-all duration-300">
              pheletso.marmoloe8@gmail.com
            </span>
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col items-start md:items-end gap-12">
          <div className="flex gap-8">
            {[{ Icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/pheletso-marumoloe-422372281/" },
              { Icon: Github, label: "GitHub", link: "https://github.com/Pheletso8" }].map(({ Icon, label, link }) => (
              <a key={label} href={link} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                <div className="p-3 rounded-full border border-secondary1/70 bg-secondary1/30 text-secondary1 group-hover:bg-secondary1 group-hover:text-text-main1 transition-all duration-300">
                  <Icon size={22} />
                </div>
                <span className="text-xs md:text-sm font-medium opacity-80 group-hover:text-accent1 transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="text-sm opacity-70 md:text-right">
            <p>© {new Date().getFullYear()} — All rights reserved</p>
            <p className="mt-2 text-accent1 text-xs uppercase tracking-widest font-semibold">
              Crafted by Pheletso Marmoloe
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
