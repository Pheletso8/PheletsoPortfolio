import { useNavigate } from "react-router-dom";

export default function BackLink({ variant = "solid" }) {
  const navigate = useNavigate();

  const baseClasses = "text-sm font-semibold cursor-pointer px-5 py-2.5 rounded-full transition-all duration-300 flex items-center justify-center";
  
  const solidClasses = "bg-primary1 text-[#0B0F0E] hover:bg-primary1/90 border border-transparent";
  const outlineClasses = "bg-transparent text-primary1 border border-primary1/40 hover:bg-primary1/10 hover:border-primary1";

  return (
    <button
      onClick={() => navigate("/")}
      className={`${baseClasses} ${variant === "outline" ? outlineClasses : solidClasses}`}
    >
      ← Back to Projects
    </button>
  );
}
