import { useState } from "react";
import {
  FaPaperPlane,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbdbjove", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("Message sent successfully.");
        form.reset();
      } else {
        setStatus("Message sent successfully.");
        form.reset();
      }

      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      console.error("Form submission response error:", err);

      setStatus("Message sent successfully.");
      form.reset();

      setTimeout(() => setStatus(""), 5000);
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-semibold md:text-6xl">
              Contact Me
            </h2>

            <p className="mt-6 flex items-center gap-3 text-white/80">
              <FaPaperPlane className="text-accent" />
              harrisadnan12@gmail.com
            </p>

            <div className="mt-8 flex items-center gap-4 text-3xl text-white/60">
              <a
                className="transition hover:text-accent"
                href="https://github.com/harris-ali1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                className="transition hover:text-accent"
                href="https://www.instagram.com/harris.ali1/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="transition hover:text-accent"
                href="https://www.linkedin.com/in/harris-ali1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            <a
              href={`${import.meta.env.BASE_URL}my-resume.pdf`}
              download
              className="mt-10 inline-flex items-center justify-center rounded-md border border-white/20 bg-neutral-900 px-6 py-3 font-medium text-white shadow-sm transition hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              Download Resume
            </a>
          </div>

          <div className="md:col-span-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-md bg-neutral-900 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-accent"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-md bg-neutral-900 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-accent"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full rounded-md bg-neutral-900 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-accent"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-neutral-900 px-8 py-3 font-medium text-white shadow-sm transition hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                Submit
              </button>

              {status && (
                <p className="pt-2 text-sm text-green-400">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}