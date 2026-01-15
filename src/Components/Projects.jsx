import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-background1 scroll-mt-28 flex flex-col
                 px-6 md:px-12 lg:px-24 xl:px-40
                 w-full overflow-x-hidden pb-16"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between
                      items-start md:items-end pb-12 gap-y-4">
        <h1 className="text-5xl pb-8 md:text-6xl font-medium
                       bg-gradient-to-r from-primary1 to-primary1/40
                       text-transparent bg-clip-text font-serif">
          Featured Projects
        </h1>

        <p className="max-w-md text-sm md:text-base text-accent1
                      font-medium leading-relaxed">
          A curated collection of projects that showcase
          <br className="hidden md:block" />
          my design philosophy and technical expertise.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
                      gap-8 md:gap-10 place-items-center mb-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}