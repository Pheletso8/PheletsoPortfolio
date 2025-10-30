import { FcInfo } from "react-icons/fc";

export default function ProjectCard({ img, heading, githubLink, liveDemo, description, techStack }) {
  return (
    <div className="flex flex-col w-80 border-3 border-black rounded-3xl p-4 items-center justify-center shadow-md shadow-[#5b3e31] hover:scale-102 ease-in-out transition-all duration-700">
      <img 
        src={img} 
        alt={heading} 
        className="w-60 h-48 object-cover rounded-4xl"
      />
      
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {heading}
        </h3>
        
        <div className="flex space-x-4 mb-2">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full border p-2 hover:bg-[#5b3e31] delay-150 hover:text-white"
          >
            Github repo
          </a>
          
          <a 
            href={liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full border p-2 hover:bg-[#5b3e31] delay-150 hover:text-white"
          >
            Live Demo
          </a>
        </div>
        <button 
          className="m-2 border w-[8rem] flex justify-center items-center gap-2 bg-[#5b3e31] text-white px-4 py-2 rounded-full transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#5b3e31]" 
          onClick={() => document.getElementById(`modal_${heading}`).showModal()}
        >
          More info <FcInfo />
        </button>
        <dialog id={`modal_${heading}`} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg mb-2 border-b-2 border-blue-600">{heading}</h3>
            <p className="py-2 font-semibold">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack && techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 border rounded-full text-sm shadow animate-pulse text-white bg-[#5b3e31] border-[#5b3e31]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

