import ProjectCard from "./ProjectCard";
import crud from "../assets/crud.jfif";
import stream from "../assets/stream.jfif";
import recipe from '../assets/download.jfif'


export default function Projects() {
  return (
    <div className="pb-10">
        <h1 className="text-center mb-2">Browse my recent</h1>
        <h1 className="text-5xl font-semibold text-center mb-8">Projects</h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            <ProjectCard 
              img={crud} 
              heading="CRUD App" 
              githubLink="https://github.com/Pheletso8/MERN-CRUD-app" 
              liveDemo="https://mern-crud-app-jis3.vercel.app/"
              description="A full-stack MERN application that implements Create, Read, Update, and Delete operations using TypeScript. 
              The app includes secure user authentication with JWT and manages session state using Zustand on the frontend. 
              Users can log in, create items, edit, and delete entries through a responsive and intuitive interface. 
              This project demonstrates strong full-stack architecture, API development, and scalable React component structure."
              techStack={[
                "React (TypeScript)",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "Zustand",
                "JWT Authentication",
                "TailwindCSS"
              ]}
            />
            
            <ProjectCard 
              img={stream} 
              heading="Streaming App" 
              githubLink="https://github.com/Pheletso8/streamingwebReact" 
              liveDemo="https://streamingweb-react.vercel.app/"
              description="A dynamic React application that recreates a modern streaming platform interface. 
              The app fetches real-time movie data from a free movie API, allowing users to browse, search, and view details of movies. 
              The project emphasizes responsive design, modular React components, and seamless API integration. 
              Users can explore trending films and interact with the UI through an intuitive and visually appealing interface. 
              This project demonstrates strong front-end architecture, API handling, and clean React coding practices."
              techStack={[
                "React (Functional Components & Hooks)",
                "HTML5 & CSS3",
                "CSS Modules / Styled-Components",
                "Axios / Fetch API",
                "React Icons",
                "Responsive Design",
                "Free Movie API (e.g., TMDb or OMDb)",
                "Git & GitHub",
                "Vercel / GitHub Pages"
              ]}
            />
            <ProjectCard 
              img={recipe} 
              heading="Recipe Finder App" 
              githubLink="https://github.com/Pheletso8/RecipeFinder" 
              liveDemo="https://recipe-finder-ljyu.vercel.app/"
              description="A client-side Recipe Finder built with React and Vite that allows users to search a local dataset of recipes, 
              view detailed recipe information, and favorite recipes. Favorites and theme (light/dark) persist in localStorage. 
              The app uses only essential React hooks for state, effects, refs, memoization, callbacks, 
              and context to manage data and UI interactions efficiently. The project emphasizes responsive design, minimalistic routing, 
              and clean component structure while demonstrating strong front-end architecture and state management practices."
              techStack={[
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
              ]} 
            />
          </div>
        </div>
    </div>
  )
}
