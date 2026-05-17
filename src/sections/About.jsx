import { useMemo, useState } from "react";

export default function About() {
  const [tab, setTab] = useState("skills");

  const tabs = useMemo(
    () => [
      { key: "skills", label: "Skills" },
      { key: "currently", label: "Currently" },
      { key: "education", label: "Education" },
    ],
    []
  );

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src="/gradpic.jpg"
              alt="Portrait"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          <div className="md:col-span-8">
            <h2 className="text-4xl font-semibold md:text-6xl">About Me</h2>

            <div className="mt-6 space-y-5 text-lg text-white/70">
              <p>
                I’m a Computer Science master’s student at the University of
                Houston and a software engineer focused on building practical,
                AI-powered applications. I enjoy creating tools that make
                workflows smarter, faster, and easier to manage, whether through
                full-stack development, machine learning, cloud systems, or
                mobile apps.
              </p>

              <p>
                One of my current projects is{" "}
                <span className="font-medium text-white">TaskIQ</span>, an
                AI-powered project management platform that helps users estimate
                task priority, difficulty, completion time, and actionable steps.
                Through projects like this, I’m especially interested in the
                intersection of AI, productivity, and real-world business
                automation.
              </p>

              <p>
                My background also includes leadership, mentoring, and
                organization-building. I currently serve as{" "}
                <span className="font-medium text-white">
                  Director of Tutoring at CougarCS
                </span>
                , where I help support student learning and academic growth
                within the computing community. Previously, as{" "}
                <span className="font-medium text-white">
                  President of Coog Esports
                </span>
                , I helped grow a major student organization through
                sponsorships, large-scale events, and campus initiatives, working
                with brands such as Red Bull, Gen.G, TDECU, and Monster. These
                experiences taught me how to lead teams, communicate with
                stakeholders, mentor students, and turn ideas into visible
                impact.
              </p>

              <p>
                I’m currently focused on software engineering, AI-driven
                products, and building systems that are useful, scalable, and
                genuinely helpful to the people using them.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {tabs.map((t) => {
                const active = tab === t.key;

                return (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={`relative text-base font-medium ${
                      active ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {t.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[3px] bg-red-500 transition-all ${
                        active ? "w-1/2" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              {tab === "skills" && (
                <ul className="space-y-4 text-white/80">
                  <li>
                    <span className="text-red-500">Languages</span>
                    <div className="text-sm text-white/60">
                      Python, C++, JavaScript, HTML, PHP, CSS
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">Frontend</span>
                    <div className="text-sm text-white/60">
                      React, Tailwind CSS
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">Databases</span>
                    <div className="text-sm text-white/60">
                      SQL, PostgreSQL, Vector Databases
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">AI / Machine Learning</span>
                    <div className="text-sm text-white/60">
                      Ensemble Learning, Gradient Boosting (XGBoost),
                      Regression, Naive Bayes, NLP, LLM Integration
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">Other</span>
                    <div className="text-sm text-white/60">
                      Golang, REST APIs, Git
                    </div>
                  </li>
                </ul>
              )}

              {tab === "currently" && (
                <ul className="space-y-4 text-white/80">
                  <li>
                    <span className="text-red-500">
                      Director of Tutoring — CougarCS
                    </span>
                    <div className="text-sm text-white/60">
                      Leading tutoring initiatives for CS students at the
                      University of Houston
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">
                      President — Coog Esports 2024
                    </span>
                    <div className="text-sm text-white/60">
                      Led the largest esports organization in Houston
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">Working on</span>
                    <div className="text-sm text-white/60">TaskIQ</div>
                  </li>
                </ul>
              )}

              {tab === "education" && (
                <ul className="space-y-4 text-white/80">
                  <li>
                    <span className="text-red-500">2020–2022</span>
                    <div className="text-sm text-white/60">
                      Associate of Science: Computer Science — HCC
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">2022–2024</span>
                    <div className="text-sm text-white/60">
                      Bachelor of Science: Computer Science — University of
                      Houston
                    </div>
                  </li>

                  <li>
                    <span className="text-red-500">2025–Present</span>
                    <div className="text-sm text-white/60">
                      Master of Science: Computer Science — University of
                      Houston
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}