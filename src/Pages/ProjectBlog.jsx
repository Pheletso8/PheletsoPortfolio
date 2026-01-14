import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

import BackLink from "../components/BackLink";
import ProjectHero from "../components/ProjectHero";
import ProjectMetaCard from "../components/ProjectMetaCard";
import ProjectSection from "../components/ProjectSection";
import InsightCard from "../components/InsightCard";
import InfoPill from "../components/InfoPill";

export default function ProjectBlog() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <div className="bg-background1 min-h-screen px-6 md:px-12 lg:px-24 xl:px-40 py-16 pt-28">
      <BackLink />

      <ProjectHero project={project} />

      {/* Meta */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        <ProjectMetaCard title="Project Type" value={project.projectType} />
        <ProjectMetaCard title="Role" value={project.role} />
      </div>

      {/* About */}
      <ProjectSection number="01" title="About the Project">
        <p className="max-w-3xl text-text-main1/70 leading-relaxed">
          {project.about}
        </p>
      </ProjectSection>

      {/* Tech Stack */}
      <ProjectSection number="02" title="Tech Stack">
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <InfoPill key={tech} label={tech} />
          ))}
        </div>
      </ProjectSection>

      {/* Challenges */}
      <ProjectSection number="03" title="Challenges Faced">
        <div className="grid md:grid-cols-2 gap-6">
          {project.challenges.map((item, i) => (
            <InsightCard
              key={item.title}
              index={`0${i + 1}`}
              {...item}
            />
          ))}
        </div>
      </ProjectSection>

      {/* Lessons */}
      <ProjectSection number="04" title="Lessons Learned">
        <div className="grid md:grid-cols-2 gap-6">
          {project.lessons.map((item, i) => (
            <InsightCard
              key={item.title}
              index={`0${i + 1}`}
              {...item}
            />
          ))}
        </div>
      </ProjectSection>
    </div>
  );
}