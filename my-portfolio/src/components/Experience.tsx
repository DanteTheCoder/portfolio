// src/components/Experience.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const experiences = [
  {
    role: "Front End Developer | React & Next.js",
    company: "ILA Europe e.V.",
    location: "Mainz, Germany",
    period: "03/2024 – Present",
    current: true,
    highlights: [
      "Rebuilt org website from legacy PHP to Next.js with a fully integrated headless CMS (donations, SEO, multilingual content)",
      "Implemented secure user system with two-factor authentication and multi-language / multi-currency support",
      "Developed e-commerce functionality with seamless PayPal & Stripe payment integration",
      "Integrated Google & Meta marketing tools, resulting in 24% increase in ad performance",
      "Built internal Next.js app for personnel — donor communication (SMS, WhatsApp) and data tracking",
      "Developed automation tools (Python-based) for media processing and internal workflows, increasing operational efficiency by ~25%.",
      "Configured GitLab CI/CD pipeline, reducing manual deployment effort significantly",
      "Contributed to 33% increase in donations and 19% rise in donor count year-over-year",
      "Collaborated on data visualization and CRM interfaces for efficient donor management.",
    ],
  },
  {
    role: "Front End Developer & Data Analyst",
    company: "Aurora Bilişim",
    location: "Istanbul, Turkey",
    period: "06/2022 – 03/2024",
    current: false,
    highlights: [
      "Built and maintained web applications using React and Next.js, integrating RESTful APIs",
      "Performed data analysis and visualization with PostgreSQL and Metabase for business decisions",
      "Developed interactive dashboards for internal reporting and performance tracking",
      "Optimized UI and performance of existing web applications",
      "Collaborated with design and backend teams to deliver consistent UX",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-16 bg-[#060610] overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-900/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">02 / Experience</span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Where I've{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              worked
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg mb-16 max-w-xl">
            4+ years of professional experience delivering impactful frontend solutions.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[18px] top-6 hidden md:block">
                    <div className={`w-4 h-4 rounded-full border-2 ${exp.current ? "border-violet-400 bg-violet-400/30" : "border-blue-500/60 bg-blue-500/20"}`}>
                      {exp.current && <span className="absolute inset-0 rounded-full bg-violet-400/30 animate-ping" />}
                    </div>
                  </div>

                  <div className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 hover:bg-white/[0.035] transition-all duration-300 relative overflow-hidden">
                    {/* Top hover accent */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/60 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/20 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
                          {exp.role}
                        </h3>
                        <p className="text-violet-400 text-sm font-mono mt-0.5">
                          {exp.company}
                          <span className="text-white/30"> · {exp.location}</span>
                        </p>
                      </div>
                      <span className="shrink-0 text-sm text-white/30 font-mono">{exp.period}</span>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/50 group-hover:text-white/60 transition-colors">
                          <span className="mt-2 w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
