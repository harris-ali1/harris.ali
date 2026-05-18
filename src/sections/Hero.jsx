import { useEffect, useMemo, useState } from "react";

const base = import.meta.env.BASE_URL;

export default function Hero() {
  const fullName = "Harris";
  const roles = useMemo(() => ["Software Engineer", "Full-Stack Developer", "AI/ML Developer", "MS Computer Science Student"], []);

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
    const speed = deleting ? 45 : 85;

    const id = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, roleText.length + 1);
        setRoleText(next);
        if (next.length === current.length) {
          setTimeout(() => setDeleting(true), 650);
        }
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

  return (
    <section
      id="header"
      className="relative min-h-screen overflow-hidden bg-black pt-24"
    >
      {/* Spinning circle image */}
      <img
        src={`${base}circle-3041437_1280.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          animation: "spinSlow 30s linear infinite",
          transformOrigin: "center center",
        }}
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mt-28 md:mt-40 max-w-2xl">
          <p className="text-xl text-white/80 md:text-2xl">
            Computer Science Major
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m <span className="text-red-500">{typedName}</span>
            <br />
            and this is my World
          </h1>

          <p className="mt-5 text-lg md:text-2xl">
            I&apos;m a <span className="text-red-500">{roleText}</span>
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-white/60" />
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="rounded-md border border-accent px-6 py-3 hover:bg-accent hover:text-red-500 transition"
            >
              View Work
            </a>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}