import ProjectCard from "./ProjectCard";
import crud from "../assets/crud.jfif";
import stream from "../assets/stream.jfif";
import recipe from '../assets/download.jfif';
import spani from '../assets/spani.jfif';
import via from '../assets/_MG_2716.jpg'

export default function Projects() {
  const personalProjects = [
    {
      img: crud,
      heading: "CRUD App",
      githubLink: "https://github.com/Pheletso8/MERN-CRUD-app",
      liveDemo: "https://mern-crud-app-jis3.vercel.app/",
      description: `A full-stack MERN application that implements Create, Read, Update, and Delete operations using TypeScript.
      The app includes secure user authentication with JWT and manages session state using Zustand on the frontend.
      Users can log in, create items, edit, and delete entries through a responsive and intuitive interface.
      This project demonstrates strong full-stack architecture, API development, and scalable React component structure.`,
      techStack: [
        "React (TypeScript)",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Zustand",
        "JWT Authentication",
        "TailwindCSS"
      ]
    },
    {
      img: stream,
      heading: "Streaming App",
      githubLink: "https://github.com/Pheletso8/streamingwebReact",
      liveDemo: "https://streamingweb-react.vercel.app/",
      description: `A dynamic React application that recreates a modern streaming platform interface.
      The app fetches real-time movie data from a free movie API, allowing users to browse, search, and view details of movies.
      The project emphasizes responsive design, modular React components, and seamless API integration.
      Users can explore trending films and interact with the UI through an intuitive and visually appealing interface.
      This project demonstrates strong front-end architecture, API handling, and clean React coding practices.`,
      techStack: [
        "React (Functional Components & Hooks)",
        "HTML5 & CSS3",
        "CSS Modules / Styled-Components",
        "Axios / Fetch API",
        "React Icons",
        "Responsive Design",
        "Free Movie API (TMDb / OMDb)",
        "Git & GitHub",
        "Vercel / GitHub Pages"
      ]
    },
    {
      img: recipe,
      heading: "Recipe Finder App",
      githubLink: "https://github.com/Pheletso8/RecipeFinder",
      liveDemo: "https://recipe-finder-ljyu.vercel.app/",
      description: `A client-side Recipe Finder built with React and Vite that allows users to search a local dataset of recipes,
      view detailed recipe information, and favorite recipes. Favorites and theme (light/dark) persist in localStorage.
      The app uses only essential React hooks for state, effects, refs, memoization, callbacks,
      and context to manage data and UI interactions efficiently. The project emphasizes responsive design, minimalistic routing,
      and clean component structure while demonstrating strong front-end architecture and state management practices.`,
      techStack: [
        "React (Functional Components & Hooks)",
        "Vite",
        "TailwindCSS",
        "React Router",
        "localStorage",
        "useState",
        "useEffect",
        "useRef",
        "useMemo",
        "useCallback",
        "useContext"
      ]
    },
    {
      img: via,
      heading: "Food Place Web Design",
      githubLink: "https://github.com/Pheletso8/VIAsamaria-web",
      liveDemo: "https://vi-asamaria-web.vercel.app/",
      description: `A client-side website design for a popular food place in South Africa, Braamfontein, Called via Samaria. 
      This was an initiative taken by my mate who asked me for help to create a 
      different design so that the food and backery place can choose from an asortment of different designs and opt for what they prferred and liked.`,
      techStack: [
        "React",
        "TailwindCSS",
        "React Router",,
      ]
    },
  ];

  const collaborationProjects = [
    {
      img: spani,
      heading: "Spani plug App",
      githubLink: "https://github.com/Kubayi-ND/spani_plug",
      liveDemo: "https://spaniplug.vercel.app/",
      description: `A marketplace for informal skilled service providers to share their work and expertise through a social network where the audience is able to rate the work,
      but the value proposition is that clients can request service providers in a radius of 1km to 10km. Think of this like Uber but for informal skilled service providers.
      Get a painter, a carpenter, or a plumber from a click away.`,
      techStack: ["SupaBase", "React", "TailwindCSS", "Vite", "TypeScript"]
    }
  ];

  const collaborators = [
    { name: "Ntsumi", link: "https://github.com/Kubayi-ND" },
    { name: "Petrus", link: "https://github.com/PETCOM1" },
    { name: "Cecilia", link: "https://github.com/cecilialetsau25" },
    { name: "Agnes", link: "https://github.com/AgnessRatsoana" },
  ];

  return (
    <div id="projects" className="scroll-mt-32 pb-10 flex flex-col items-center">
      {/* Personal Projects */}
      <h1 className="text-center mb-2 text-[#685b22ab] font-bold underline decoration-wavy">
        Browse my recent
      </h1>
      <h1 className="text-5xl font-semibold text-center mb-8 text-[#685b22ab]">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mb-12 ">
        {personalProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      {/* Collaboration Projects */}
      <section className="flex flex-col items-start">
        <h2 className="text-2xl font-semibold mb-2">Collaboration Project</h2>
        <p className="mb-4 text-center">With collaborators:</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {collaborators.map((collab, idx) => (
            <a
              key={idx}
              href={collab.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 p-2 font-semibold hover:bg-[#685b22ab] hover:text-white hover:rounded-full transition-all duration-300 ease-in"
            >
              {collab.name}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
          {collaborationProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
