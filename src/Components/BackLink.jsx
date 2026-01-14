import { useNavigate } from "react-router-dom";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-sm text-accent1 hover:text-primary1 transition mb-8"
    >
      ← Back to Projects
    </button>
  );
}
