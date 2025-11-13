import { IoInformationCircle } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";

export default function ProjectCard({ img, heading, githubLink, liveDemo, description, techStack }) {
  return (
    <div className="group relative overflow-hidden transform border-t-2 border-[#df8c66] flex flex-col w-80 shadow-[#df8c66] shadow-md hover:shadow-blue-400 hover:border-blue-400 transition-all duration-300 rounded-lg p-4 items-center justify-center">
      <img 
        src={img} 
        alt={heading} 
        className="w-60 h-48 object-cover rounded-4xl border-2 border-[#df8c66] group-hover:scale-105 transition-transform duration-300"
      />
      
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-400">
          {heading}
        </h3>
        
        <div className="flex space-x-4 mb-2">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#685b22ab] text-white hover:bg-[#5b3e31] transition-all duration-300 ease-in font-semibold flex items-center gap-2"
          >
            Repo <FaGithubAlt size={20} />
          </a>
          
          <a 
            href={liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#685b22ab] text-white hover:bg-[#5b3e31] transition-all duration-300 ease-in font-semibold flex items-center gap-2"
          >
            Demo <CiLink size={26}/>
          </a>
        </div>
        <button 
          className="p-2 rounded-lg bg-blue-400 text-white hover:bg-blue-300 transition-all duration-300 ease-in font-semibold flex items-center gap-2 cursor-pointer" 
          onClick={() => document.getElementById(`modal_${heading}`).showModal()}
        >
          More info <IoInformationCircle />
        </button>
        <dialog id={`modal_${heading}`} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg mb-2 border-b-2 border-blue-600 text-blue-400">{heading}</h3>
            <p className="py-2 font-semibold text-[#685b22ab]">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack && techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-lg text-sm animate-pulse text-white bg-blue-500"
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

