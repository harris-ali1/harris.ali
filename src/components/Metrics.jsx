import { Count } from "./Motion.jsx";

export default function Metrics() {
  const items = [
    { num: 3.8, suffix: "", label: "GPA", sub: "MS Computer Science · UH" },
    { num: 8, suffix: "+", label: "Projects built", sub: "Full-stack · AI · ML" },
    { num: 500, suffix: "+", label: "Students supported", sub: "Director of Tutoring, CougarCS" },
    { num: 4, suffix: "", label: "Brand partners led", sub: "Red Bull · Gen.G · TDECU · Monster — Coog Esports, 2024" },
  ];
  return (
    <section className="metrics" aria-label="Highlights">
      <div className="metrics-row">
        {items.map((m, i) => (
          <div className="metric" key={i}>
            <div className="metric-num">
              <Count to={m.num} suffix={m.suffix} />
              <span className="accent">.</span>
            </div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-sub">{m.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
