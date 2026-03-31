// components/ProjectMetaCard.jsx
export default function ProjectMetaCard({ title, value, icon }) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#121413] p-6 flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        {/* Icon Container */}
        <div className="text-accent1 p-2 border border-accent1/10 rounded-lg bg-accent1/5 flex items-center justify-center">
          {icon}
        </div>
        {/* Title */}
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent1/80">
          {title}
        </p>
      </div>
      
      {/* Value Container */}
      <div className="text-lg font-medium text-white/90 leading-relaxed">
        {value}
      </div>
    </div>
  );
}