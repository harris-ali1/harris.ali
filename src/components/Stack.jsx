export default function Stack() {
  const cards = [
    { n: "01", title: "Languages", items: ["Python", "JavaScript / TypeScript", "C++", "Go", "PHP", "SQL"] },
    { n: "02", title: "Frontend", items: ["React", "Tailwind CSS", "HTML / CSS", "Responsive UI"] },
    { n: "03", title: "Backend & Data", items: ["Node.js", "REST APIs", "PostgreSQL", "Vector Databases", "Golang services"] },
    { n: "04", title: "AI / ML", items: ["LLM Integration", "NLP", "XGBoost / Boosting", "Regression", "Naive Bayes"] },
  ];

  const marquee = [
    "Python", "React", "Go", "PostgreSQL", "TypeScript", "Tailwind",
    "Node.js", "scikit-learn", "NumPy", "SciPy", "CasADi", "IPOPT", "NLTK",
    "Pandas", "C++", "Git", "REST APIs", "Vector DBs", "XGBoost", "LLM APIs",
  ];

  return (
    <section id="stack" className="stack">
      <div className="wrap">
        <div className="reveal" data-reveal>
          <span className="eyebrow">02 — Stack</span>
          <h2 className="section-title">
            Tools I reach for <em>without thinking</em>.
          </h2>
        </div>

        <div className="stack-grid">
          {cards.map((c) => (
            <div className="stack-card reveal" data-reveal key={c.title}>
              <div className="stack-card-head">
                <h4>{c.title}</h4>
                <span className="stack-num">{c.n}</span>
              </div>
              <ul>
                {c.items.map((it) => (<li key={it}>{it}</li>))}
              </ul>
            </div>
          ))}
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((w, i) => (
              <span key={i}>{w}<span className="sep">/</span></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
