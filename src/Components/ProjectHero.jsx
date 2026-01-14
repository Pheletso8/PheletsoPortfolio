// components/ProjectHero.jsx
export default function ProjectHero({ project }) {
  return (
    <div className="relative overflow-hidden mb-24">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 max-w-5xl">
        <p className="text-accent1 mb-2">{project.id}</p>
        <h1 className="text-5xl md:text-6xl font-serif text-primary1 mb-4">
          {project.title}
        </h1>
        <p className="text-text-main1/70 max-w-xl">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
}
