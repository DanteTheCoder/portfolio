// src/components/LatestProject.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ElectricBorder from "../bits/ElectricBorder";
import CountUp from "../bits/CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const project = {
  badge: "Latest",
  title: "MeinJobs — Job Board & Application Tracker",
  description:
    "MeinJobs scrapes thousands of company career pages to surface 25,000+ always-fresh job postings — no middlemen, no stale listings. Users can apply directly on the company website and track every application with a built-in Kanban board, status updates, and notes. Built with Next.js 16, TypeScript, Tailwind CSS, GSAP, Framer Motion, and an Express.js + Supabase backend.",
  tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Express.js", "Supabase", "REST API"],
  metrics: ["25k+ Jobs", "Full-Stack", "Live"],
  link: "https://meinjobsfrontend.vercel.app/",
};

export default function LatestProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="latest-project" className="relative py-24 bg-[#060610] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              00 / Latest Project
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Project!
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg mb-14 max-w-xl">
            Fresh off the workbench — here's what I've been building.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="w-full max-w-[580px]">
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.38}
                thickness={1.5}
                style={{ borderRadius: 22 }}
              >
                <div className="relative w-full p-6 md:p-9 bg-gradient-to-br from-[#0a141e]/95 to-[#060e16] rounded-[22px] overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                  {/* Radiating glows */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-[0.7rem] font-mono font-bold tracking-widest uppercase text-[#7df9ff] bg-[#7df9ff]/10 border border-[#7df9ff]/25 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7df9ff] shadow-[0_0_8px_#7df9ff] animate-pulse" />
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-black text-2xl md:text-3xl mb-4 leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description — Fixed Visibility */}
                  <p className="text-white/90 text-base leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Animated stats */}
                  <div className="flex flex-wrap gap-6 mb-7">
                    <div className="flex flex-col items-start">
                      <CountUp
                        to={25000}
                        suffix="+"
                        duration={2.2}
                        className="text-3xl font-black text-[#7df9ff] tabular-nums"
                      />
                      <span className="text-xs text-white/35 font-mono mt-1 tracking-widest uppercase">
                        Jobs Listed
                      </span>
                    </div>
                    <div className="h-10 w-px bg-white/10 self-center hidden sm:block" />
                    <div className="flex flex-col items-start">
                      <CountUp
                        to={8}
                        suffix="+"
                        duration={1.5}
                        className="text-3xl font-black text-[#7df9ff] tabular-nums"
                      />
                      <span className="text-xs text-white/35 font-mono mt-1 tracking-widest uppercase">
                        Tech Stack
                      </span>
                    </div>
                    <div className="h-10 w-px bg-white/10 self-center hidden sm:block" />
                    <div className="flex flex-col items-start">
                      <span className="text-3xl font-black text-[#7df9ff]">
                        Live
                      </span>
                      <span className="text-xs text-white/35 font-mono mt-1 tracking-widest uppercase">
                        Deployed
                      </span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((m, i) => (
                      <span key={i} className="px-3 py-0.5 text-[0.75rem] font-bold rounded-full text-[#7df9ff] bg-[#7df9ff]/10 border border-[#7df9ff]/20">
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-[0.7rem] font-mono text-white/60 bg-white/5 border border-white/10 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 text-[0.95rem] font-bold text-[#060610] bg-gradient-to-br from-[#7df9ff] to-[#38bdf8] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(125,249,255,0.5)] active:scale-95"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </ElectricBorder>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
