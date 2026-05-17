import { useState } from "react";
import { FaTimes, FaGithub } from "react-icons/fa";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Coogs Music",
    tag: "Full-Stack · Database",
    shortDesc: "Music database with full CRUD functionality.",
    desc: "A full-featured music database application built with a team. Users can browse, add, update, and delete music records. Features include artist pages, album listings, and song management with a clean UI backed by a relational database.",
    tech: ["Golang", "SQL", "HTML", "CSS"],
    thumbnail: `${base}work-1.png`,
    screenshots: [],
    github: "https://github.com/harris-ali1",
  },
  {
    title: "Taskiq",
    tag: "Full-Stack · AI",
    shortDesc: "Project management app with an integrated LLM.",
    desc: "Taskiq is a modern project management tool that integrates a large language model to help teams plan, prioritize, and summarize tasks. The LLM can generate task breakdowns, suggest deadlines, and answer questions about ongoing projects — all within a clean kanban-style interface.",
    tech: ["React", "Node.js", "LLM API", "SQL"],
    thumbnail: `${base}TaskIQ_logo.png`,
    screenshots: [`${base}taskiqwork.png`, `${base}taskiqwork2.png`],
  },
  {
    title: "Opinion Spam Detection",
    tag: "Machine Learning · NLP",
    shortDesc: "ML model to detect fake or spam reviews.",
    desc: "A machine learning project focused on identifying deceptive and spam reviews using natural language processing techniques. Trained and evaluated multiple classifiers (Naive Bayes, SVM, and others) on labeled review datasets, achieving strong precision and recall scores for real-world applicability.",
    tech: ["Python", "scikit-learn", "NLTK", "Pandas"],
    thumbnail: `${base}OSD.png`,
    screenshots: [],
    github: "https://github.com/harris-ali1",
  },
  {
    title: "Aircraft Trajectory Optimization",
    tag: "Numerical Methods · Optimization",
    shortDesc: "Optimized aircraft climb trajectory using nonlinear methods.",
    desc: "A numerical optimization project focused on modeling and optimizing an aircraft climb trajectory. The project compares single shooting and direct collocation methods to solve nonlinear aircraft dynamics, with the goal of improving trajectory feasibility, convergence, and fuel efficiency.",
    tech: ["Python", "NumPy", "SciPy", "Matplotlib", "CasADi", "IPOPT"],
    thumbnail: `${base}ATO.png`,
    screenshots: [],
    github: "https://github.com/harris-ali1",
  },
];

// Placeholder screenshot component
function PlaceholderScreen({ title }) {
  return (
    <div className="flex h-48 w-full items-center justify-center rounded-lg bg-neutral-800 border border-white/10">
      <div className="text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <p className="text-xs text-white/40">Screenshot coming soon</p>
      </div>
    </div>
  );
}

function Modal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "modalIn 0.25s ease" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-neutral-900/95 backdrop-blur px-6 py-4 border-b border-white/10">
          <div>
            <span className="text-xs font-medium text-accent uppercase tracking-widest">
              {project.tag}
            </span>
            <h3 className="mt-1 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-white/70 leading-relaxed">{project.desc}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Screenshots */}
          <div>
            <p className="mb-3 text-sm font-medium text-white/50 uppercase tracking-widest">
              Screenshots
            </p>
            <div className="space-y-4">
              {project.screenshots.length > 0 ? (
                project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full rounded-lg object-cover border border-white/10"
                  />
                ))
              ) : (
                <>
                  <PlaceholderScreen title={project.title} />
                  <PlaceholderScreen title={project.title} />
                </>
              )}
            </div>
          </div>

          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-black hover:opacity-90 transition"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="portfolio" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-4xl font-semibold md:text-6xl">My Work</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.title}
              onClick={() => setSelected(p)}
              className="group relative overflow-hidden rounded-xl text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {/* Thumbnail */}
              {p.thumbnail ? (
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="h-72 w-full bg-neutral-800 flex flex-col items-center justify-center transition duration-500 group-hover:scale-105">
                  <span className="text-5xl mb-3">
                    {p.tag.includes("ML") ? "🧠" : p.tag.includes("AI") ? "🤖" : "🎵"}
                  </span>
                  <span className="text-xs text-white/30 uppercase tracking-widest">
                    {p.tag}
                  </span>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-x-0 bottom-0 h-0 overflow-hidden bg-gradient-to-t from-accent/90 to-black/30 transition-all duration-500 group-hover:h-full">
                <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm opacity-90">{p.shortDesc}</p>
                  <span className="mt-6 inline-flex items-center gap-1 rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium">
                    Click to view ↗
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}