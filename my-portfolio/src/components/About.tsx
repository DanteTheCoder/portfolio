// src/components/About.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const experiences = [
  {
    role: "Front End Developer | React & Next.js",
    company: "ILA Europe e.V.",
    location: "Mainz, Germany",
    period: "03/2024 – Present",
    highlights: [
      "Rebuilt org website from PHP to Next.js with headless CMS — donations, SEO, multilingual",
      "Implemented 2FA, multi-language & multi-currency support",
      "Integrated PayPal & Stripe e-commerce flows",
      "Configured GitLab CI/CD pipeline, reducing manual deployment effort",
      "Contributed to 33% donation increase & 19% rise in donor count YoY",
    ],
  },
  {
    role: "Front End Developer & Data Analyst",
    company: "Aurora Bilişim",
    location: "Istanbul, Turkey",
    period: "06/2022 – 03/2024",
    highlights: [
      "Built and maintained web apps using React and Next.js with RESTful APIs",
      "Data analysis & visualization with PostgreSQL and Metabase",
      "Developed interactive dashboards for internal reporting",
      "Optimized UI performance of existing web applications",
    ],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-[#060610] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">01 / About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-16"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            A bit about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — Bio */}
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-white/60 text-lg leading-relaxed">
                I'm a <span className="text-white font-medium">Frontend Developer</span> with 4+ years of experience building responsive, modern web applications using React and Next.js.
              </p>
              <p className="text-white/60 leading-relaxed">
                I have a proven track record of delivering full-stack features including e-commerce integrations, CMS solutions, and data-driven dashboards. Currently based in <span className="text-white font-medium">Mainz, Germany</span>, I'm seeking to bring scalable, user-focused solutions to a product-driven team.
              </p>
              <p className="text-white/60 leading-relaxed">
                I studied Computer Science at <span className="text-white font-medium">Middle East Technical University</span> in Ankara (GPA: 3.29/4.00), graduating in 2021.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { value: "4+", label: "Years Experience" },
                  { value: "33%", label: "Donation Increase" },
                  { value: "25%", label: "Efficiency Boost" },
                  { value: "2", label: "Languages (code)" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 mt-1 font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Experience Timeline */}
            <motion.div variants={stagger} className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-sm leading-snug">{exp.role}</h3>
                      <p className="text-violet-400 text-xs mt-0.5 font-mono">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="shrink-0 text-xs text-white/30 font-mono">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/40">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
