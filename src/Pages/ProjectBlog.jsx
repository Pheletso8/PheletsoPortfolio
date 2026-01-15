import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

import ProjectHero from "../Components/ProjectHero";
import ProjectMetaCard from "../Components/ProjectMetaCard";
import ProjectSection from "../Components/ProjectSection";
import InsightCard from "../Components/InsightCard";
import InfoPill from "../Components/InfoPill";
import BackLink from "../Components/BackLink";

import { Lightbulb, Link, UsersRound, Github, Wrench, BookText } from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } // Custom cubic-bezier for a "smoother" feel
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

export default function ProjectBlog() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="bg-background1 min-h-screen pb-32"
    >
      {/* Hero Section - Full width but internal padding matches container */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pt-24 md:pt-24"
      >
        <ProjectHero project={project} />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Meta Section - Staggered cards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-20 lg:my-12"
        >
          <motion.div variants={fadeInUp}>
            <ProjectMetaCard title="Project Type" icon={<Lightbulb />} value={project.projectType} />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectMetaCard title="Team / Individual" icon={<UsersRound />} value={project.role} />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectMetaCard 
              title="Project Links" 
              icon={<Link />} 
              value={
                <div className="flex flex-col gap-2">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:opacity-70 transition-all duration-300 flex items-center gap-2 group">
                      Live Demo <Link size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {project.source && (
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:opacity-70 transition-all duration-300 flex items-center gap-2 group">
                      Source Code <Github size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              } 
            />
          </motion.div>
        </motion.div>

        {/* Content Sections - Spaced out for high-end readability */}
        <div className="space-y-18 md:space-y-22">
          <motion.div {...fadeInUp}>
            <ProjectSection number="01" title="About the Project">
              <p className="max-w-3xl text-text-main1/70 leading-relaxed text-lg md:text-xl font-medium">
                {project.about}
              </p>
            </ProjectSection>
          </motion.div>

          <motion.div {...fadeInUp}>
            <ProjectSection number="02" title="Tech Stack">
              <div className="flex flex-wrap gap-3 md:gap-5">
                {project.techStack.map((tech) => (
                  <InfoPill key={tech} label={tech} />
                ))}
              </div>
            </ProjectSection>
          </motion.div>

          <motion.div {...fadeInUp}>
            <ProjectSection number="03" title="Challenges Faced">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {project.challenges.map((item, i) => (
                  <InsightCard
                    key={item.title}
                    index={`0${i + 1}`}
                    icon={<Wrench className="text-accent1/50"/>}
                    {...item}
                  />
                ))}
              </div>
            </ProjectSection>
          </motion.div>

          <motion.div {...fadeInUp}>
            <ProjectSection number="04" title="Lessons Learned">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-20">
                {project.lessons.map((item, i) => (
                  <InsightCard
                    key={item.title}
                    index={`0${i + 1}`}
                    icon={<BookText className="text-accent1/50"/>}
                    {...item}
                  />
                ))}
              </div>
            </ProjectSection>
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center  text-center pt-18 border-t border-primary1 px-0">
          <p className="bg-linear-to-r text-lg from-text-main1 to-secondary1 bg-clip-text text-transparent font-medium">Look at more Projects</p>
          <BackLink />
        </div>
      </div>
    </motion.div>
  );
}