import { useEffect, useMemo, useRef, useState } from "react";

// Magnetic — element drifts toward cursor on hover
export function Magnetic({ children, strength = 0.35, className, ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      className={"magnetic " + (className || "")}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      <span ref={ref} className="magnetic-inner">
        {children}
      </span>
    </span>
  );
}

// TiltCard — subtle 3D tilt + shine on hover
export function TiltCard({ children, max = 6, className, style, ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -max * 2;
    const ry = (px - 0.5) * max * 2;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      className={"tilt " + (className || "")}
      style={style}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      <div className="tilt-shine" />
      <div className="tilt-content">{children}</div>
    </div>
  );
}

// Count — number that animates in when scrolled into view
export function Count({ to, suffix = "", duration = 1400 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const target = parseFloat(to);
            const start = performance.now();
            const tick = (t) => {
              const elapsed = t - start;
              const p = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(target * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setVal(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const hasDecimal = String(to).includes(".");
  const display = hasDecimal ? val.toFixed(1) : Math.round(val);

  return <span ref={ref}>{display}{suffix}</span>;
}
