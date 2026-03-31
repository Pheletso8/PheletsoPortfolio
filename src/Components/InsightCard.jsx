// components/InsightCard.jsx
export default function InsightCard({ icon, title, description }) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#121413] p-6 hover:scale-[1.02] transition-transform duration-200">
      <p className="text-accent1 text-sm mb-2">{icon}</p>
      <h3 className="text-lg font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-main1/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
