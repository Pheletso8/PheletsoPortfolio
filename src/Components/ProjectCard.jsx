import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  techStack,
  id,
  slug,
  liveDemo,
}) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group shadow-lg cursor-pointer hover:shadow-2xl hover:shadow-primary1/10
                 relative w-full h-[450px] overflow-hidden rounded-2xl
                 border border-white/10 transition-all duration-700 ease-out"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000
                     ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t
                        from-background1 via-background1/90 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="text-5xl font-serif text-accent1/30
                          group-hover:text-accent1 transition-colors duration-700 italic">
            {id}
          </div>

          {/* Live demo (stop navigation) */}
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-3 border rounded-full bg-background1/20 backdrop-blur-md
                       border-accent1/30 text-accent1 opacity-0 -translate-y-4
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-500 hover:bg-accent1 hover:text-background1"
          >
            <MoveUpRight size={20} />
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-medium text-primary1 tracking-tight
                         transition-transform duration-500 group-hover:-translate-y-2">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 opacity-0 translate-y-4
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-700 delay-100">
            {techStack?.map((tech) => (
              <span
                key={tech}
                className="bg-secondary1/20 text-text-main1 text-[10px]
                           uppercase tracking-widest border border-secondary1/30
                           px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
