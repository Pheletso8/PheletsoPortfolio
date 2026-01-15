import { useNavigate } from "react-router-dom";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-sm font-semibold cursor-pointer px-5 py-2.5 text-primary1 border-primary1/40 border rounded-full
          hover:bg-primary1/80 hover:text-white hover:border-primary1
          transition-all duration-300 bg-primary1/5 backdrop-blur-sm"
    >
      ← Back to Projects
    </button>
  );
}
