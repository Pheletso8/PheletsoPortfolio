// components/ProjectSection.jsx
export default function ProjectSection({ number, title, children }) {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-serif text-text-main1 mb-8">
        <span className="text-accent1 mr-2">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
