import crud from "../assets/crud.jfif";
import stream from "../assets/stream.jfif";
import recipe from "../assets/recipe.jfif";
import via from "../assets/via.jfif";

export const projects = [
  {
    slug: "task-manager",
    id: "01",
    title: "Task Manager",
    subtitle: "Real-time data visualization platform",
    image: crud,
    projectType: "Technology Exploration",
    role: "Lead Frontend Developer",
    liveDemo: "https://mern-crud-app-jis3.vercel.app/",
    source: "",
    techStack: [
      "React",
      "TypeScript",
      "D3.js",
      "TailwindCSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
    about: `
      A comprehensive analytics dashboard that transforms complex datasets into
      actionable insights through intuitive visualizations. Built with a strong
      focus on performance and user experience.
    `,
    challenges: [
      {
        title: "Real-time Data Streaming",
        description:
          "Implementing efficient WebSocket connections to handle high-frequency updates without compromising UI performance.",
      },
      {
        title: "Complex Visualization Rendering",
        description:
          "Optimizing D3.js charts for thousands of data points while maintaining smooth 60fps interactions.",
      },
    ],
    lessons: [
      {
        title: "Performance-first Architecture",
        description:
          "Designing with memoization, virtualization, and data batching from day one drastically reduced rework.",
      },
      {
        title: "Data-driven UI Decisions",
        description:
          "Visual clarity improves dramatically when interaction patterns are guided by real user behavior.",
      },
    ],
  },
  {
    slug: "mock-movie-app",
    id: "02",
    title: "Mock Movie App",
    subtitle: "A responsive movie discovery and streaming preview platform",
    image: stream,
    projectType: "Frontend Application",
    role: "Frontend Developer",
    liveDemo: "https://streamingweb-react.vercel.app/",
    source: "",
    techStack: [
      "React (Functional Components & Hooks)",
      "Axios / Fetch API",
      "REST APIs",
      "CSS Modules",
    ],
    about: `
      The Mock Movie App is a React-based application that allows users to browse,
      explore, and preview movies in a clean and intuitive interface. The app
      focuses on delivering a smooth user experience while consuming external
      movie APIs to fetch real-time data.
      
      Emphasis was placed on component reusability, API integration, and responsive
      layouts to ensure usability across devices.
    `,
    challenges: [
      {
        title: "Handling Asynchronous Data Fetching",
        description:
          "Managing loading states, error handling, and conditional rendering while fetching movie data from external APIs.",
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
    subtitle: "Search, save, and explore recipes with a clean UI",
    image: recipe,
    projectType: "Frontend Web App",
    role: "Frontend Developer",
    liveDemo: "https://recipe-finder-ljyu.vercel.app/",
    source: "",
    techStack: [
      "Vite",
      "React",
      "TailwindCSS",
      "React Router",
      "localStorage",
    ],
    about: `
      The Recipe Finder App enables users to search for recipes, view detailed
      instructions, and save favorites for later use. Built with performance in
      mind using Vite, the app delivers fast load times and a smooth navigation
      experience.

      Local storage is used to persist user preferences, creating a more personal
      and engaging experience without the need for authentication.
    `,
    challenges: [
      {
        title: "Persisting User Data",
        description:
          "Implementing localStorage in a way that felt seamless while keeping the UI in sync with stored data.",
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
        title: "Performance-first Tooling",
        description:
          "Using Vite improved development speed and reinforced the value of modern build tools.",
      },
    ],
  },

  {
    slug: "food-shop-design",
    id: "04",
    title: "Design for Food Shop",
    subtitle: "Modern UI design concept for a food retail brand",
    image: via,
    projectType: "UI / Frontend Design",
    role: "UI Designer & Frontend Developer",
    liveDemo: "https://vi-asamaria-web.vercel.app/",
    source: "",
    techStack: [
      "React",
      "TailwindCSS",
      "React Router",
      "Responsive Design",
    ],
    about: `
      This project is a modern design concept for a food shop website, focused on
      strong visual hierarchy, clean typography, and an inviting user experience.
      The goal was to create a brand-forward layout that communicates quality and
      warmth through design.

      Attention was given to spacing, color balance, and responsiveness to ensure
      the design translates well across devices.
    `,
    challenges: [
      {
        title: "Balancing Aesthetics and Usability",
        description:
          "Ensuring the design remained visually appealing without compromising accessibility or readability.",
      },
      {
        title: "Consistent Design Language",
        description:
          "Maintaining consistency across pages while allowing each section to feel distinct and purposeful.",
      },
    ],
    lessons: [
      {
        title: "Design-led Development",
        description:
          "Starting with strong visual foundations made implementation faster and more cohesive.",
      },
      {
        title: "Importance of White Space",
        description:
          "Strategic use of spacing dramatically improved clarity and overall user perception.",
      },
    ],
  },
];