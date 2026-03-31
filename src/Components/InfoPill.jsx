
export default function InfoPill({ label }) {
  return (
    <span className="bg-transparent text-text-main1/70 text-[10px]
                      uppercase tracking-widest border border-white/10
                      px-3 py-1 rounded-full">
      {label}
    </span>
  );
}
