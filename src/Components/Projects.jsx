import ProjectCard from "./ProjectCard";
import crud from "../assets/crud.jfif";
import stream from "../assets/stream.jfif";
import recipe from '../assets/recipe.jfif';
import spani from '../assets/spani.jfif';
import via from '../assets/via.jfif'

export default function Projects() {
  const personalProjects = [
    {
      img: crud,
      projNum: "01",
      heading: "Task Manager",
      liveDemo: "https://mern-crud-app-jis3.vercel.app/",
      techStack: [
        "React (TypeScript)",
        "Node.js",
        "Mongoose",
        "JWT Authentication",
      ]
    },
    {
      img: stream,
      projNum: "02",
      heading: "Mock Movie App",
      liveDemo: "https://streamingweb-react.vercel.app/",
      techStack: [
        "React (Functional Components & Hooks)",
        "Axios / Fetch API",
      ]
    },
    {
      img: recipe,
      projNum: "03",
      heading: "Recipe Finder App",
      liveDemo: "https://recipe-finder-ljyu.vercel.app/",
      techStack: [
        "Vite",
        "TailwindCSS",
        "React Router",
        "localStorage",
      ]
    },
    {
      img: via,
      projNum: "04",
      heading: "Design for Food Shop",
      liveDemo: "https://vi-asamaria-web.vercel.app/",
      techStack: [
        "React",
        "TailwindCSS",
        "React Router",
      ]
    },
  ];

  // const collaborationProjects = [
  //   {
  //     img: spani,
  //     heading: "Spani plug App",
  //     githubLink: "https://github.com/Kubayi-ND/spani_plug",
  //     liveDemo: "https://spaniplug.vercel.app/",
  //     description: `A marketplace for informal skilled service providers to share their work and expertise through a social network where the audience is able to rate the work,
  //     but the value proposition is that clients can request service providers in a radius of 1km to 10km. Think of this like Uber but for informal skilled service providers.
  //     Get a painter, a carpenter, or a plumber from a click away.`,
  //     techStack: ["SupaBase", "React", "TailwindCSS", "Vite", "TypeScript"]
  //   }
  // ];

  // const collaborators = [
  //   { name: "Ntsumi", link: "https://github.com/Kubayi-ND" },
  //   { name: "Petrus", link: "https://github.com/PETCOM1" },
  //   { name: "Cecilia", link: "https://github.com/cecilialetsau25" },
  //   { name: "Agnes", link: "https://github.com/AgnessRatsoana" },
  // ];

  return (
    <div id="projects" className="bg-background1 scroll-mt-28 flex flex-col px-6 md:px-12 lg:px-24 w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10">
        <h1 className="text-6xl font-medium bg-gradient-to-r from-primary1 to-primary1/40 text-transparent bg-clip-text font-serif pb-4">
          Featured Projects
        </h1>
        <p className="max-w-md text-sm text-accent1 font-medium">
          A curated collection of projects that showcase<br /> my design philosophy and technical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mb-12">
        {personalProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
