// components/ProjectMetaCard.jsx
export default function ProjectMetaCard({ title, value, icon }) {
  return (
    <div className="rounded-xl border border-primary1/20 bg-gradient-to-b from-primary1/10 to-background1/40 p-6 backdrop-blur-md flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        {/* Icon Container */}
        <div className="text-accent1 p-2 border border-accent1/30 rounded-lg bg-accent1/10 flex items-center justify-center">
          {icon}
        </div>
        {/* Title */}
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary1/80">
          {title}
        </p>
      </div>
      
      {/* Value Container */}
      <div className="text-lg font-medium text-text-main1 leading-relaxed">
        {value}
      </div>
    </div>
  );
}