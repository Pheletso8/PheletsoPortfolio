import React, { useEffect, useRef, useState } from "react";

const experiences = [
   {
    role: "Co-founder & ML Engineer",
    company: "Omentics Technologies",
    duration: "July 2024 - feb 2025",
    description:
      "At Omentics, I developed and deployed predictive models that transformed complex mining operations data into actionable insights. I designed data pipelines to integrate and clean information from sensors, SCADA systems, and production logs, enabling predictive maintenance, operational optimization, and safety improvements. By collaborating with cross-functional teams, monitoring model performance, and leveraging tools like Python, TensorFlow, and cloud platforms, I helped mining operations reduce downtime, optimize resource usage, and make data-driven decisions that enhanced efficiency and safety.",
    technologies: ["Apache Spark","Python", "TensorFlow", "scikit-learn", "MongoDB", "TimeScaleDB(Time-series data)", "Docker", "PostgreSQL", "RL Model development and deployment"]
  },
];

export default function AnimatedExperienceTimeline() {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = windowHeight - rect.top;
      const totalHeight = rect.height;
      const progress = Math.min(Math.max(visibleHeight / totalHeight, 0), 1);
      setLineHeight(progress * totalHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experiences" className=" bg-[#fdfaf7] py-16 px-6 relative">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-bold text-[#5b3e31] mb-4 text-center">
          My <span className="text-[#8b5e3c]">Experience</span>
        </h2>
        <p className="text-center text-[#5b3e31] mb-12">
          Journey through Data Science and Software Development intern roles
        </p>

        {/* Timeline Container */}
        <div className="relative pl-12" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div
            className="absolute left-6 w-[3px] bg-[#5b3e31]/50 origin-top transition-all duration-200"
            style={{ height: `${lineHeight}px` }}
          />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 opacity-0 translate-y-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-[#5b3e31] shadow-md transition-all group-hover:scale-125" />

              {/* Card */}
              <div className="ml-8 border border-[#5b3e31] rounded-3xl p-6 bg-[#fffaf6] shadow-md hover:shadow-blue-600 transition-all duration-300 hover:scale-101 ease-in-out">
                <h3 className="text-xl font-bold text-blue-500 mb-1">{exp.role}</h3>
                <p className="text-black font-medium">{exp.company}</p>
                <p className="text-sm text-black mt-1">{exp.duration}</p>
                <p className="mt-3 text-[#5b3e31]/80 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-white text-sm bg-[#5b3e31] shadow hover:bg-[#8b5e3c] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

