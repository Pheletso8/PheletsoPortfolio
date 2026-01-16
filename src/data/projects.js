import mern from "../assets/mern.avif";
import stream from "../assets/stream.avif";
import recipe from "../assets/recipe.jpg";
import via from "../assets/via.jpg";

export const projects = [
  {
    slug: "task-manager",
    id: "01",
    title: "Task Manager",
    subtitle: "A platform to manage and visualize tasks efficiently",
    image: mern,
    projectType: "MERN Fullstack exploration to learn backend Fundamentals",
    role: "Individual Project",
    liveDemo: "https://mern-crud-app-jis3.vercel.app/",
    source: "https://github.com/Pheletso8/MERN-CRUD-app",
    techStack: [
      "React",
      "TypeScript",
      "Mongoose",
      "TailwindCSS",
      "Node.js",
      "express",
      "Zustand",
      "REST API"
    ],
    about: `
      This Task Management System is a full-stack MERN application designed to streamline productivity through a robust, type-safe architecture.
      Built using TypeScript across both the backend (Node/Express) and frontend (React), the project features a secure authentication system managed by Zustand for seamless state transitions.
      I implemented a comprehensive RESTful API integrated with MongoDB to handle full CRUD operations, allowing users to plan, commit to, and execute tasks with precision. 
      The application emphasizes secure data handling, responsive UI design, and efficient state management to provide a reliable tool for professional task organization.
    `,
    challenges: [
      {
        title: "Global error handling and validation",
        description:
          "Implementing centralized error handling and validation logic to ensure consistent error reporting and user feedback.",
      },
      {
        title: "Understanding the connection of routes, controllers, services and models",
        description:
          "Dissecting and implementing the layered architecture of the backend to ensure clear separation of concerns and maintainability.",
      },
    ],
    lessons: [
      {
        title: "Performance-first Architecture",
        description:
          "Designing with TypeScript, Zustand and global error handling from the ground up enhanced both performance and developer experience.",
      },
      {
        title: "Seaparation of Concerns",
        description:
          "The layered architecture facilitated easier maintenance and scalability, ensuring future enhancements would be straightforward.",
      },
    ],
  },
  {
    slug: "mock-movie-app",
    id: "02",
    title: "Mock Movie App",
    subtitle: "A responsive movie discovery and streaming mock-up platform",
    image: stream,
    projectType: "Frontend Application that consumes an external movie API",
    role: "Individual Project",
    liveDemo: "https://streamingweb-react.vercel.app/",
    source: "https://github.com/Pheletso8/streamingwebReact",
    techStack: [
      "React (Functional Components & Hooks)",
      "Axios / Fetch API",
      "REST APIs",
      "CSS Modules",
    ],
    about: `
      This API-driven Movie Platform is a deep dive into modern React development and external data integration. 
      The project features a pixel-perfect recreation of a streaming site frontend, utilizing React hooks for state management and dynamic UI updates. 
      By fetching and processing data from a live movie database, I implemented features like real-time search, dynamic content carousels, and detailed 
      view modals with trailer video playback capabilities. The development process adhered to industry best practices, including consistent version control and clean, modular component structures, 
      demonstrating my commitment to producing production-ready code with high design accuracy.
    `,
    challenges: [
      {
        title: "Handling Asynchronous Data Fetching",
        description:
          "Managing loading states, error handling, and conditional rendering while fetching movie data from external APIs.",
      },
      {
        title: "Applying the correct styling to match design mock-ups",
        description:
          "Translating design specifications into responsive and visually accurate UI components using CSS modules.",
      },
      {
        title: "Scalable Component Structure",
        description:
          "Designing reusable movie cards and layout components that could easily scale as new features were added.",
      },
    ],
    lessons: [
      {
        title: "API-driven UI Design",
        description:
          "Building interfaces around API responses reinforced the importance of defensive programming and fallback states.",
      },
      {
        title: "Performance-first Architecture Development",
        description:
          "Structuring components for reusability and clarity improved both development speed and code maintainability.",
      },
      {
        title: "State Management with Hooks",
        description:
          "Using React hooks effectively reduced complexity and improved readability across the application.",
      },
    ],
  },

  {
    slug: "recipe-finder-app",
    id: "03",
    title: "Recipe Finder App",
    subtitle: "Find, archive, and discover recipes through an elegant interface.",
    image: recipe,
    projectType: "Frontend Application with client-side data persistence",
    role: "Individual Project",
    liveDemo: "https://recipe-finder-ljyu.vercel.app/",
    source: "https://github.com/Pheletso8/RecipeFinder",
    techStack: [
      "Vite",
      "React",
      "TailwindCSS",
      "React Router",
      "localStorage",
    ],
    about: `
      An elegant, client-side Recipe Finder built with React and Tailwindcss that enables users to search, 
      filter, and save culinary inspiration. The app features a high-performance filtering engine powered by useMemo 
      and a persistent Dark/Light mode system. By leveraging React Router for seamless navigation and Tailwind CSS for a polished, 
      responsive UI, I created a distraction-free experience that emphasizes accessibility and smooth state transitions. 
      This project showcases my proficiency in modern React hooks and localized data persistence.
    `,
    challenges: [
      {
        title: "Persisting User Data",
        description:
          "Implementing localStorage in a way that felt seamless while keeping the UI in sync with stored data.",
      },
      {
        title: "Implementing aGlobal Dark/Light Mode",
        description:
          "Creating a theme toggle that persisted user preference across sessions and applied consistently throughout the app.",
      },
      {
        title: "Search & Filtering Logic",
        description:
          "Designing efficient search functionality that returned accurate results without unnecessary re-renders.",
      },
    ],
    lessons: [
      {
        title: "Client-side Persistence",
        description:
          "Local storage can significantly enhance UX when used thoughtfully for lightweight data persistence.",
      },
      {
        title: "Search & Filtering Optimization",
        description:
          "Efficient data handling and memoization are key to maintaining performance in dynamic search interfaces.",
      },
      {
        title: "Optimized Rendering with useMemo",
        description:
          "Memoization techniques are crucial for maintaining performance in data-intensive React applications.",
      },
      {
        title: "Theme Management",
        description:
          "A well-implemented theme system enhances user experience and accessibility across sessions.",
      },
    ],
  },

  {
    slug: "food-shop-design",
    id: "04",
    title: "Design for Food Shop",
    subtitle: "Modern UI design concept for a food retail brand",
    image: via,
    projectType: "UI / Frontend Design that helps a client visualize the end product",
    role: "Individual Project",
    liveDemo: "https://vi-asamaria-web.vercel.app/",
    source: "https://github.com/Pheletso8/VIAsamaria-web",
    techStack: [
      "React",
      "TailwindCSS",
      "React Router",
      "Responsive Design",
    ],
    about: `
      This project is a modern design concept for a food shop website, built with a focus on strong visual hierarchy, 
      clean typography, and an inviting user experience. The primary goal was to create a brand-forward layout that communicates 
      premium quality and culinary warmth through intentional design choices.
      To achieve this, I applied Color Theory to influence user perception and appetite. I curated a warm-toned color palette, 
      utilizing rich earth tones and vibrant accent colors that evoke a sense of freshness and organic quality. By balancing 
      high-chroma 'hero' colors with soft, neutral backgrounds, I created a visual rhythm that guides the user’s eye toward key calls-to-action 
      while subtly highlighting important information such as promotions and featured menu items.
    `,
    challenges: [
      {
        title: "Balancing Aesthetics and Usability",
        description:
          "Ensuring the design remained visually appealing without compromising accessibility or readability.",
      },
      {
        title: "Reducing Dependency on LLMs and Being Creative",
        description:
          "Crafting unique design elements and layouts without over-reliance on AI-generated content to maintain originality.",
      },
    ],
    lessons: [
      {
        title: "Not over-thinking Design Choices, but making them intentional",
        description:
          "Every design element should serve a purpose, contributing to the overall user experience and brand message.",
      },
      {
        title: "Learning UI/UX principles through practical application",
        description:
          "Applying theoretical knowledge in real-world projects solidifies understanding and hones design instincts.",
      },
    ],
  },
];