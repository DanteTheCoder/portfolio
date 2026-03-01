// src/components/Projects.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardSwap, { Card } from "../bits/CardSwap";

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
    description: "Rebuilt the entire organization website from legacy PHP to Next.js with headless CMS, multi-language/multi-currency support, 2FA, and PayPal & Stripe e-commerce.",
    tags: ["Next.js", "TypeScript", "Headless CMS", "Stripe", "PayPal"],
    metrics: ["+33% donations", "+19% donors", "+24% ads"],
    accent: "from-violet-600 to-purple-600",
    link: "https://ilaeurope.de/de",
    emoji: "🌍",
  },
  {
    title: "Skies — Weather Forecast",
    description: "A side project that I have built with React 18 + Vite to discover some scroll transition animations. Used Open-Meteo API for forecast data. Deployed via Vercel.",
    tags: ["React18", "Vite", "TypeScript", "RestAPI"],
    metrics: ["Scroll Transitions"],
    accent: "from-violet-600 to-purple-600",
    link: "https://skies-weather-app.vercel.app/",
    emoji: "🌦️",
  },
  {
    title: "Internal Operations Dashboard",
    description: "Built an internal Next.js web app for personnel with donor communication via SMS and WhatsApp, data tracking, and CRM interfaces.",
    tags: ["Next.js", "React", "PostgreSQL", "REST API"],
    metrics: ["+25% efficiency", "Real-time CRM", "SMS/WhatsApp"],
    accent: "from-blue-600 to-cyan-600",
    link: null,
    emoji: "📊",
  },
  {
    title: "Data Visualization Suite",
    description: "Interactive dashboards for internal reporting and performance tracking. Data analysis with PostgreSQL and Metabase to support business decisions.",
    tags: ["React", "PostgreSQL", "Metabase", "Python"],
    metrics: ["KPI dashboards", "Automated reports", "Performance insights"],
    accent: "from-cyan-600 to-teal-600",
    link: null,
    emoji: "📈",
  },
  {
    title: "Media Processing Automation",
    description: "Python-based automation tools for media processing and internal workflows, increasing operational efficiency by ~25%. Integrated with existing pipelines.",
    tags: ["Python", "Automation", "REST API", "GitLab CI/CD"],
    metrics: ["+25% efficiency", "Automated workflows", "Media pipeline"],
    accent: "from-teal-600 to-green-600",
    link: null,
    emoji: "⚙️",
  },
];

// Individual project card content (used inside CardSwap Card)
function ProjectCardContent({ project }: { project: typeof projects[0] }) {
  return (
    <div className="w-full h-full flex flex-col p-6 relative overflow-hidden">
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent}`} />

      {/* Glow */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-2xl pointer-events-none`} />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{project.emoji}</span>
          <h3 className="text-white font-bold text-base leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
            {project.title}
          </h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="shrink-0 p-1.5 rounded-lg border border-white/10 border-violet-500/40 bg-violet-500/10 transition-all text-white/30 text-violet-400"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.metrics.map((m, j) => (
          <span key={j} className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${project.accent} text-white opacity-80`}>
            {m}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t, j) => (
          <span key={j} className="px-2 py-0.5 text-xs text-white/35 rounded-full border border-white/5 bg-white/[0.02] font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

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
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">03 / Projects</span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Things I've{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">built</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg mb-16 max-w-xl">
            Professional projects delivered with measurable impact.
          </motion.p>

          {/* Layout: left = card grid list, right = CardSwap */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — small project cards (all 4, quick reference) */}
            <motion.div variants={stagger} className="space-y-4">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <span className="text-xl shrink-0 mt-0.5">{p.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white/90 font-semibold text-sm truncate" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {p.title}
                      </h3>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer"
                          className="shrink-0 text-violet-400 transition-colors">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 3).map((t, j) => (
                        <span key={j} className="text-xs text-white/30 font-mono">{t}{j < Math.min(p.tags.length, 3) - 1 ? " ·" : ""}</span>
                      ))}
                    </div>
                  </div>
                  {/* Accent dot */}
                  <div className={`shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${p.accent} mt-2 ml-auto opacity-60`} />
                </motion.div>
              ))}

              {/* GitHub link */}
              <motion.div variants={fadeUp}>
                <a
                  href="https://github.com/DanteTheCoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/60 rounded-xl border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  See more on GitHub
                </a>
              </motion.div>
            </motion.div>

            {/* Right — CardSwap */}
            <motion.div
              variants={fadeUp}
              className="relative hidden lg:block"
              style={{ height: "420px" }}
            >
              <CardSwap
                width={340}
                height={300}
                cardDistance={55}
                verticalDistance={60}
                delay={4000}
                pauseOnHover={true}
                easing="elastic"
                skewAmount={4}
              >
                {projects.map((p, i) => (
                  <Card key={i}>
                    <ProjectCardContent project={p} />
                  </Card>
                ))}
              </CardSwap>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
