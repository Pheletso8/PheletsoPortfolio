// components/InsightCard.jsx
export default function InsightCard({ index, title, description }) {
  return (
    <div className="rounded-xl border border-primary1/20 bg-background1/60 p-6 backdrop-blur-md">
      <p className="text-accent1 text-sm mb-2">{index}</p>
      <h3 className="text-lg font-medium text-text-main1 mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-main1/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
