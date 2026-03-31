// components/ProjectSection.jsx
export default function ProjectSection({ number, title, children }) {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-medium text-primary1 mb-8">
        <span className="text-primary1/80 mr-2 italic">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
