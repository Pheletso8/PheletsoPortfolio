// components/ProjectMetaCard.jsx
export default function ProjectMetaCard({ title, value, icon }) {
  return (
    <div className="rounded-xl border border-primary1/20 bg-background1/60 p-6 backdrop-blur-md">
      <p className="text-xs uppercase tracking-widest text-accent1 mb-2">
        {title}
      </p>
      <h3 className="text-lg font-medium text-text-main1">
        {value}
      </h3>
    </div>
  );
}
