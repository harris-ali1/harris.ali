import Icon from "./Icon.jsx";

export default function Experience() {
  const timeline = [
    { date: "2025 — Present", title: "M.S. Computer Science", where: "University of Houston", now: true },
    { date: "2024", title: "President, Coog Esports", where: "Largest esports org in Houston · Partners: Red Bull · Gen.G · TDECU · Monster" },
    { date: "2022 — 2024", title: "B.S. Computer Science", where: "University of Houston" },
    { date: "2020 — 2022", title: "A.S. Computer Science", where: "Houston Community College" },
  ];

  const now = [
    { icon: <Icon.Cap />, lbl: "Director of Tutoring — CougarCS", det: "Leading tutoring initiatives for CS students at the University of Houston." },
    { icon: <Icon.Brain />, lbl: "Building TaskIQ", det: "AI-powered project management with LLM-driven task breakdown and prioritization." },
    { icon: <Icon.Code />, lbl: "Studying", det: "AI systems, optimization, and scalable backend architecture." },
    { icon: <Icon.Bolt />, lbl: "Open to", det: "SWE / ML engineer roles. New grad / intern for Summer 2026." },
  ];

  return (
    <section id="experience" className="exp">
      <div className="wrap">
        <div className="reveal" data-reveal>
          <span className="eyebrow">04 — Experience</span>
          <h2 className="section-title">
            A path of <em>building</em> and <em>leading</em>.
          </h2>
        </div>

        <div className="exp-grid">
          <div className="reveal" data-reveal>
            <h3 className="exp-col-title">Timeline</h3>
            <div className="timeline">
              {timeline.map((t, i) => (
                <div className={"tl-item " + (t.now ? "now" : "")} key={i}>
                  <div className="tl-date">{t.date}</div>
                  <div className="tl-title">{t.title}</div>
                  <div className="tl-where">{t.where}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" data-reveal>
            <h3 className="exp-col-title">Currently</h3>
            <div className="now-card">
              <h4>// what I&apos;m up to</h4>
              <ul className="now-list">
                {now.map((n, i) => (
                  <li key={i}>
                    <span className="ic">{n.icon}</span>
                    <div>
                      <span className="lbl">{n.lbl}</span>
                      <span className="det">{n.det}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
