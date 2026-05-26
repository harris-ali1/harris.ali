import { useEffect, useState, Fragment } from "react";
import Icon from "./Icon.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about", num: "01" },
    { label: "Stack", href: "#stack", num: "02" },
    { label: "Work", href: "#work", num: "03" },
    { label: "Experience", href: "#experience", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
  ];

  return (
    <Fragment>
      <header className={"nav " + (scrolled ? "scrolled" : "")}>
        <div className="nav-row">
          <a href="#top" className="brand">
            <div className="brand-mark">H</div>
            <span>harris.ali</span>
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                <span className="num">{l.num}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="nav-cta">
            <span className="dot" />
            Available for hire
          </a>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Icon.Menu />
          </button>
        </div>
      </header>

      {open && (
        <div className="sheet" onClick={() => setOpen(false)}>
          <div className="sheet-panel" onClick={(e) => e.stopPropagation()}>
            <button className="sheet-close" onClick={() => setOpen(false)} aria-label="Close">
              <Icon.Close />
            </button>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={{ color: "var(--accent)" }}>
              Available for hire →
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
}
