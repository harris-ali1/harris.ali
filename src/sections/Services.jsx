import { FaCode, FaBrain, FaMobileAlt } from "react-icons/fa";

const items = [
  { icon: FaCode, title: "Full-Stack Development", desc: "I build responsive web applications with clean frontends, backend logic, databases, and API integrations." },
  { icon: FaBrain, title: "AI & Machine Learning Solutions", desc: "I develop AI-powered features, ML models, and data-driven tools using Python, NLP, LLMs, and modern ML workflows." },
  { icon: FaMobileAlt, title: "Web & Mobile App Design", desc: "I design and build user-focused web and mobile interfaces that are clean, practical, and easy to use." },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-4xl font-semibold md:text-6xl">What I Build</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="rounded-xl bg-neutral-900 p-8 transition hover:-translate-y-2 hover:bg-accent hover:text-red-500"
              >
                <Icon className="text-4xl" />
                <h3 className="mt-6 text-2xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm opacity-80">{it.desc}</p>
                <a href="#" className="mt-6 inline-block text-sm underline">
                  Learn more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
