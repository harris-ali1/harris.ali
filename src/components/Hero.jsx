import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import { Magnetic } from "./Motion.jsx";

export default function Hero() {
  const fullName = "Harris";
  const roles = useMemo(
    () => ["Software Engineer", "Full-Stack Developer", "AI/ML Developer", "MS CS @ University of Houston"],
    []
  );

  const [typedName, setTypedName] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedName(fullName.slice(0, i));
      if (i >= fullName.length) clearInterval(id);
    }, 110);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 38 : 70;
    const id = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, roleText.length + 1);
        setRoleText(next);
        if (next.length === current.length) setTimeout(() => setDeleting(true), 1100);
      } else {
        const next = current.slice(0, Math.max(0, roleText.length - 1));
        setRoleText(next);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(id);
  }, [roleText, deleting, roleIndex, roles]);

  // Cursor-following spotlight
  const spotRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!spotRef.current) return;
      const x = e.clientX - 350;
      const y = e.clientY - 350;
      spotRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Scroll parallax on code card
  const cardRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!cardRef.current) return;
      const y = Math.min(window.scrollY * 0.18, 80);
      cardRef.current.style.transform = `translateY(${-y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <div ref={spotRef} className="hero-spot" />
      <div className="hero-glow-2" />

      <div className="wrap" style={{ width: "100%" }}>
        <div className="hero-inner">
          <div>
            <div className="hero-status">
              <span className="dot" />
              <span>Open to SWE / ML roles — Summer 2026</span>
            </div>

            <h1>
              Hi, I&apos;m <span className="name">{typedName}</span>
              <br />
              <span style={{ color: "var(--muted)" }}>I build </span>
              software that thinks.
            </h1>

            <div className="hero-role">
              <span className="prompt">$</span>
              <span>role —</span>
              <span className="role">{roleText}</span>
              <span className="caret" />
            </div>

            <p className="hero-desc">
              Master&apos;s student in CS at the <strong>University of Houston</strong>, building
              full-stack and <strong>AI-powered</strong> products. Currently working on{" "}
              <strong>TaskIQ</strong> — an LLM-driven project manager that estimates priority,
              effort, and next steps.
            </p>

            <div className="hero-cta-row">
              <Magnetic>
                <a href="#work" className="btn btn-primary">
                  <Icon.Bolt /> View my work
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="assets/resume.pdf" download className="btn btn-ghost">
                  <Icon.Download /> Download résumé
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="hero-card" aria-hidden="true" ref={cardRef}>
            <div className="hero-card-head">
              <div className="lights"><span /><span /><span /></div>
              <span className="filename">~/harris/about.ts</span>
            </div>
            <pre>
              <span className="k">const</span> <span className="p">harris</span> = {"{"}{"\n"}
              {"  "}<span className="k">role</span>: <span className="s">"Software Engineer"</span>,{"\n"}
              {"  "}<span className="k">based</span>: <span className="s">"Houston, TX"</span>,{"\n"}
              {"  "}<span className="k">degree</span>: <span className="s">"MS Computer Science"</span>,{"\n"}
              {"  "}<span className="k">stack</span>: [<span className="s">"React"</span>, <span className="s">"Python"</span>, <span className="s">"Go"</span>],{"\n"}
              {"  "}<span className="k">focus</span>: [<span className="s">"AI/ML"</span>, <span className="s">"Full-Stack"</span>],{"\n"}
              {"  "}<span className="k">projects</span>: <span className="n">8</span>,{"\n"}
              {"  "}<span className="k">coffee</span>: <span className="n">Infinity</span>,{"\n"}
              {"  "}<span className="c">{"// building TaskIQ — an LLM project manager"}</span>{"\n"}
              {"  "}<span className="k">status</span>: <span className="s">"open to opportunities"</span>,{"\n"}
              {"}"};
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
