import { useEffect, useState, Fragment } from "react";
import Icon from "./Icon.jsx";
import { TiltCard } from "./Motion.jsx";

const PROJECTS = [
  {
    title: "TaskIQ",
    tag: "Full-Stack · AI · LLM",
    shortDesc: "AI project manager that estimates priority, effort, and next steps.",
    desc: "TaskIQ is a modern project management tool with an integrated large language model. It helps teams plan, prioritize, and summarize tasks — the LLM generates breakdowns, suggests deadlines, and answers questions about ongoing work inside a clean kanban-style interface. Designed around the idea that AI should earn its place in the workflow, not just decorate it.",
    tech: ["React", "Node.js", "LLM API", "SQL", "Tailwind"],
    thumbnail: "assets/taskiq-1.png",
    screenshots: ["assets/taskiq-1.png", "assets/taskiq-2.png"],
    featured: true,
    github: "https://github.com/harris-ali1",
  },
  {
    title: "Coogs Music",
    tag: "Full-Stack · Database",
    shortDesc: "Music database with full CRUD, built with a team.",
    desc: "A full-featured music database application built with a team. Users can browse, add, update, and delete music records. Features artist pages, album listings, and song management with a clean UI backed by a relational database.",
    tech: ["Golang", "SQL", "HTML", "CSS"],
    thumbnail: "assets/coogs-music.png",
    screenshots: [],
    github: "https://github.com/harris-ali1",
  },
  {
    title: "Opinion Spam Detection",
    tag: "Machine Learning · NLP",
    shortDesc: "ML model that detects fake or spam product reviews.",
    desc: "A machine learning project focused on identifying deceptive and spam reviews using natural language processing. Trained and evaluated multiple classifiers (Naive Bayes, SVM, and others) on labeled review datasets, achieving strong precision and recall scores for real-world applicability.",
    tech: ["Python", "scikit-learn", "NLTK", "Pandas"],
    thumbnail: "assets/osd.png",
    screenshots: [],
    github: "https://github.com/harris-ali1",
  },
  {
    title: "Aircraft Trajectory Optimization",
    tag: "Numerical Methods · Optimization",
    shortDesc: "Optimized aircraft climb trajectory using nonlinear methods.",
    desc: "A numerical optimization project modeling and optimizing an aircraft climb trajectory. Compares single shooting vs. direct collocation to solve nonlinear aircraft dynamics — the goal: improving trajectory feasibility, convergence, and fuel efficiency.",
    tech: ["Python", "NumPy", "SciPy", "Matplotlib", "CasADi", "IPOPT"],
    thumbnail: "assets/ato.png",
    screenshots: [],
    github: "https://github.com/harris-ali1",
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="proj-tag">{project.tag}</div>
            <h3 style={{ margin: "6px 0 0", fontSize: 22, fontWeight: 500 }}>{project.title}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <Icon.Close />
          </button>
        </div>
        <div className="modal-body">
          <p>{project.desc}</p>

          <h4>Tech</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tech.map((t) => (<span key={t} className="tech-chip">{t}</span>))}
          </div>

          <h4>Screens</h4>
          <div className="modal-shots">
            {project.screenshots.length > 0 ? (
              project.screenshots.map((s, i) => (<img key={i} src={s} alt={`${project.title} ${i + 1}`} />))
            ) : (
              <Fragment>
                <div className="placeholder-shot">screenshot · coming soon</div>
                <div className="placeholder-shot">screenshot · coming soon</div>
              </Fragment>
            )}
          </div>

          {project.github && (
            <div style={{ marginTop: 28 }}>
              <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">
                <Icon.Github /> View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState(null);
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="work-head-row reveal" data-reveal>
          <div>
            <span className="eyebrow">03 — Selected work</span>
            <h2 className="section-title">
              Things I&apos;ve <em>built</em>, not just listed.
            </h2>
          </div>
          <p>
            A mix of full-stack products, ML models, and numerical methods.
            Click any project for screens and detail.
          </p>
        </div>

        {featured && (
          <button
            className="featured reveal"
            data-reveal
            onClick={() => setSelected(featured)}
            style={{ all: "unset", cursor: "pointer", display: "grid" }}
          >
            <div className="featured-tag">
              <Icon.Spark /> Featured project
            </div>
            <div className="featured-media">
              <img src={featured.thumbnail} alt={featured.title} />
            </div>
            <div className="featured-body">
              <div className="proj-tag">{featured.tag}</div>
              <h3>{featured.title}</h3>
              <p>{featured.desc}</p>
              <div className="featured-tech">
                {featured.tech.map((t) => (<span key={t} className="tech-chip">{t}</span>))}
              </div>
              <div className="row-links">
                <span className="link-pill">Case study <Icon.Arrow /></span>
                {featured.github && (
                  <a
                    className="link-pill"
                    href={featured.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon.Github /> GitHub
                  </a>
                )}
              </div>
            </div>
          </button>
        )}

        <div className="work-grid">
          {rest.map((p) => (
            <TiltCard
              key={p.title}
              max={4}
              className="proj reveal"
              data-reveal
            >
              <button
                className="proj-inner"
                onClick={() => setSelected(p)}
                style={{ all: "unset", display: "block", cursor: "pointer", width: "100%" }}
              >
                <div className="proj-media">
                  <img src={p.thumbnail} alt={p.title} />
                </div>
                <div className="proj-body">
                  <div className="proj-tag">{p.tag}</div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.shortDesc}</p>
                  <div className="proj-foot">
                    <div className="proj-tech">
                      {p.tech.slice(0, 3).map((t) => (<span key={t} className="tech-chip">{t}</span>))}
                    </div>
                    <span className="proj-open">Open <Icon.Arrow /></span>
                  </div>
                </div>
              </button>
            </TiltCard>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
