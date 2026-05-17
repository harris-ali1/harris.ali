import { useState } from "react";
import { FaPaperPlane, FaPhoneAlt, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    // If you want the same Google Sheets behavior, paste your script URL:
    const scriptURL = ""; // was "< add you own link here >" :contentReference[oaicite:12]{index=12}
    if (!scriptURL) {
      setStatus("Hook up your form endpoint (scriptURL) to enable submissions.");
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      await fetch(scriptURL, { method: "POST", body: formData });
      setStatus("Message sent successfully");
      e.currentTarget.reset();
      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      setStatus("Error sending message.");
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-semibold md:text-6xl">Contact Me</h2>

            <p className="mt-6 flex items-center gap-3 text-white/80">
              <FaPaperPlane className="text-accent" />
              harrisadnan1@hotmail.com
            </p>

            <p className="mt-4 flex items-center gap-3 text-white/80">
              <FaPhoneAlt className="text-accent" />
              +1 (346)-373-2237
            </p>

            <div className="mt-8 flex items-center gap-4 text-3xl text-white/60">
              <a className="hover:text-accent transition" href="https://www.facebook.com/psychoticdraven/" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a className="hover:text-accent transition" href="https://github.com/harris-ali1" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a className="hover:text-accent transition" href="https://www.instagram.com/harris.ali1/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a className="hover:text-accent transition" href="https://www.linkedin.com/in/harris-ali1/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>

            <a
              href={`${import.meta.env.BASE_URL}my-resume.pdf`}
              download
              className="mt-10 inline-block rounded-md bg-accent px-6 py-3 font-medium text-black hover:opacity-90 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="md:col-span-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                name="Name"
                placeholder="Your Name"
                required
                className="w-full rounded-md bg-neutral-900 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-accent"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full rounded-md bg-neutral-900 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-accent"
              />
              <textarea
                name="Message"
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-md bg-neutral-900 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-8 py-3 font-medium text-black hover:opacity-90 transition"
              >
                Submit
              </button>

              {status && <p className="pt-2 text-sm text-green-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}