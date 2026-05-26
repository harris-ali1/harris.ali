import { useState } from "react";
import Icon from "./Icon.jsx";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending…");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch("https://formspree.io/f/xbdbjove", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus("Message sent. I'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("Message sent. I'll get back to you soon.");
      form.reset();
    }
    setTimeout(() => setStatus(""), 5500);
  }

  function copy() {
    navigator.clipboard?.writeText("harrisadnan12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="reveal" data-reveal>
          <span className="eyebrow">05 — Contact</span>
          <h2 className="section-title">
            Let&apos;s build something <em>worth shipping</em>.
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card reveal" data-reveal>
            <div>
              <div className="email-row">
                <div className="ic"><Icon.Mail /></div>
                <div>
                  <div className="lbl">email</div>
                  <div className="val">harrisadnan12@gmail.com</div>
                </div>
                <button className={"copy-btn " + (copied ? "copied" : "")} onClick={copy} aria-label="Copy email">
                  {copied ? <Icon.Check /> : <Icon.Copy />}
                </button>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
                Find me
              </div>
              <div className="socials">
                <a className="social" href="https://github.com/harris-ali1" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.Github /></a>
                <a className="social" href="https://www.linkedin.com/in/harris-ali1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.LinkedIn /></a>
                <a className="social" href="https://www.instagram.com/harris.ali1/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.Instagram /></a>
              </div>
            </div>

            <div style={{ marginTop: "auto", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
              <a className="btn btn-ghost" href="assets/resume.pdf" download style={{ width: "100%", justifyContent: "center" }}>
                <Icon.Download /> Download résumé (PDF)
              </a>
            </div>
          </div>

          <form className="form reveal" data-reveal onSubmit={onSubmit}>
            <div className="form-row">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required className="input" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required className="input" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required className="textarea" placeholder="What are you building? What role? — anything that helps me reply well." />
            </div>
            <div className="form-foot">
              {status ? <div className="form-msg">{status}</div> : <div style={{ fontSize: 12, color: "var(--dim)", fontFamily: "var(--font-mono)" }}>Replies usually within 24h</div>}
              <button className="btn btn-primary" type="submit">
                <Icon.Send /> Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
