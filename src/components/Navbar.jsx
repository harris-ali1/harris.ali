import { useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "Home", href: "#header" },
      { label: "About", href: "#about" },
      { label: "What I Build", href: "#services" },
      { label: "Projects", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Harris logo"
            className="h-26 w-auto object-contain"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/90 transition hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile button */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div
            className="absolute right-0 top-0 h-full w-72 bg-neutral-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-white">Menu</div>

              <button
                className="text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="mt-10 space-y-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-white transition hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}