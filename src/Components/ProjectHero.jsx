import BackLink from "./BackLink";

export default function ProjectHero({ project }) {
  return (
    <div className="relative h-140 w-full overflow-hidden mb-24 flex flex-col">
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background1/60 to-background1" />

      {/* Top Navigation Layer */}
      <div className="relative z-20 p-8 sm:p-12 lg:px-32 xl:px-40">
        <BackLink />
      </div>

      {/* Content Container */}
      <div className="relative mt-auto p-8 sm:p-16 lg:px-32 xl:px-40 z-10 max-w-6xl">
        <span className="inline-block text-5xl font-serif text-accent1/30 mb-2 
                         transition-colors duration-700 italic">
          {project.id}
        </span>
        
        <h1 className="text-5xl md:text-7xl bg-linear-to-r from-primary1 to-secondary1 bg-clip-text text-transparent font-serif mb-4 leading-tight">
          {project.title}
        </h1>
        
        <p className="bg-linear-to-r from-text-main1 to-secondary1 bg-clip-text text-transparent
          font-medium text-lg md:text-xl max-w-2xl">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
}