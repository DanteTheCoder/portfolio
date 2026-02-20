// src/components/Projects.tsx
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

const projects = [
  {
    title: "ILA Europe — Nonprofit Platform",
    description: "Rebuilt the entire organization website from a legacy PHP system into a modern Next.js application. Features a fully integrated headless CMS, multi-language/multi-currency support, two-factor authentication, and full e-commerce with PayPal & Stripe.",
    tags: ["Next.js", "TypeScript", "Headless CMS", "Stripe", "PayPal", "CI/CD"],
    metrics: ["+33% donations", "+19% donors", "+24% ad performance"],
    accent: "from-violet-600 to-purple-600",
    link: null,
  },
  {
    title: "Internal Operations Dashboard",
    description: "Built an internal Next.js web application for personnel, providing secure access and tools to manage daily operations including donor communication via SMS and WhatsApp, data tracking, and CRM interfaces.",
    tags: ["Next.js", "React", "PostgreSQL", "REST API", "Metabase"],
    metrics: ["+25% efficiency", "Real-time CRM", "SMS/WhatsApp integration"],
    accent: "from-blue-600 to-cyan-600",
    link: null,
  },
  {
    title: "Data Visualization Suite",
    description: "Developed interactive dashboards for internal reporting and performance tracking at Aurora Bilişim. Performed data analysis with PostgreSQL and Metabase to support business decisions across the organization.",
    tags: ["React", "PostgreSQL", "Metabase", "Python", "Data Analysis"],
    metrics: ["Multiple KPI dashboards", "Automated reports", "Performance insights"],
    accent: "from-cyan-600 to-teal-600",
    link: null,
  },
  {
    title: "Media Processing Automation",
    description: "Developed Python-based automation tools for media processing and internal workflows, increasing operational efficiency by ~25%. Integrated with existing web applications and data pipelines.",
    tags: ["Python", "Automation", "REST API", "GitLab CI/CD"],
    metrics: ["+25% operational efficiency", "Automated workflows", "Media pipeline"],
    accent: "from-teal-600 to-green-600",
    link: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 bg-[#060610] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">02 / Projects</span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Things I've{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              built
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg mb-16 max-w-xl">
            Professional projects I've delivered with measurable impact.
          </motion.p>

          {/* Grid */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Glow blob */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                <h3 className="text-white font-bold text-lg mb-3 relative z-10" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {p.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-4 relative z-10 flex-1">
                  {p.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {p.metrics.map((m, j) => (
                    <span key={j} className={`px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${p.accent} text-white opacity-80`}>
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {p.tags.map((t, j) => (
                    <span key={j} className="px-2.5 py-1 text-xs text-white/40 rounded-full border border-white/5 bg-white/[0.02] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <a
              href="https://github.com/DanteTheCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white/60 rounded-xl border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              See more on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
