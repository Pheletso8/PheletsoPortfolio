// components/InsightCard.jsx
export default function InsightCard({ icon, title, description }) {
  return (
    <div className="rounded-xl border border-primary1/20 bg-gradient-to-t from-primary1/20 to-transparent p-6 backdrop-blur-md hover:scale-[1.02] transition-transform duration-200">
      <p className="text-accent1 text-sm mb-2">{icon}</p>
      <h3 className="text-lg font-medium text-text-main1 mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-main1/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
