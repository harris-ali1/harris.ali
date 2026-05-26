import Icon from "./Icon.jsx";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="reveal" data-reveal>
          <span className="eyebrow">01 — About</span>
          <h2 className="section-title">
            CS student by day, <em>builder</em> by every other hour.
          </h2>
        </div>

        <div className="about-grid">
          <div className="portrait-wrap reveal" data-reveal>
            <img className="portrait" src="assets/portrait.jpg" alt="Harris Ali" />
            <div className="portrait-frame" />
            <div className="portrait-tag">
              <Icon.Pin className="pin" />
              Houston, TX
            </div>
          </div>

          <div className="about-copy reveal" data-reveal>
            <p>
              I&apos;m a <strong>Computer Science master&apos;s student</strong> at the
              University of Houston and a software engineer focused on practical,{" "}
              <strong>AI-powered applications</strong>. I enjoy building tools that make
              workflows smarter, faster, and easier — full-stack, ML, cloud, or mobile.
            </p>
            <p>
              I&apos;m currently working on <strong>TaskIQ</strong>, an AI-powered project
              manager that estimates task priority, difficulty, completion time, and the
              concrete next steps to take. It&apos;s how I think about software:{" "}
              <strong>AI that earns its place in the workflow.</strong>
            </p>
            <p>
              Outside of code, I lead. I currently serve as{" "}
              <strong>Director of Tutoring at CougarCS</strong>, supporting student learning
              across the CS program. Previously, in 2024, I was{" "}
              <strong>President of Coog Esports</strong>, where I grew a major student org
              through sponsorships and campus events with <strong>Red Bull, Gen.G, TDECU,
              and Monster</strong>.
            </p>

            <div className="about-quote">
              I care about software that is genuinely useful — not impressive on a slide,
              but felt by the person using it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
