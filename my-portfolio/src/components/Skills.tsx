// src/components/Skills.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LogoLoop } from "../bits/LogoLoop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiFramer, SiRedux, SiPostgresql,
  SiPython, SiGit, SiGitlab, SiHtml5
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const techLogos = [
  { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript" },
  { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFramer color="#ffffff" />, title: "Framer Motion", href: "https://www.framer.com/motion" },
  { node: <SiRedux color="#764ABC" />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiPostgresql color="#336791" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPython color="#3776AB" />, title: "Python", href: "https://www.python.org" },
  { node: <SiGit color="#F05032" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGitlab color="#FC6D26" />, title: "GitLab", href: "https://gitlab.com" },
  { node: <SiHtml5 color="#E34F26" />, title: "HTML5" },
];

const skillGroups = [
  {
    label: "Frameworks & Libraries",
    color: "violet",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React.js", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Redux Toolkit", level: 80 },
      { name: "Material UI", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    label: "Languages",
    color: "blue",
    skills: [
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Python", level: 70 },
    ],
  },
  {
    label: "Backend & Tools",
    color: "cyan",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "REST API", level: 88 },
      { name: "Git / GitLab", level: 88 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

const colorMap: Record<string, string> = {
  violet: "from-violet-500 to-purple-500",
  blue: "from-blue-500 to-indigo-500",
  cyan: "from-cyan-500 to-teal-500",
};
const borderMap: Record<string, string> = {
  violet: "border-violet-500/20 hover:border-violet-500/40",
  blue: "border-blue-500/20 hover:border-blue-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
};
const textMap: Record<string, string> = {
  violet: "text-violet-400",
  blue: "text-blue-400",
  cyan: "text-cyan-400",
};
const glowMap: Record<string, string> = {
  violet: "bg-violet-900/10",
  blue: "bg-blue-900/10",
  cyan: "bg-cyan-900/10",
};

const languages = [
  { name: "English", level: "Professional", pct: 85 },
  { name: "Turkish", level: "Native", pct: 100 },
  { name: "German", level: "Basic", pct: 25 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-16 bg-[#060610] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">04 / Skills</span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              toolkit
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg mb-12 max-w-xl">
            Technologies I work with every day.
          </motion.p>

          {/* LogoLoop — original React Bits component */}
          <motion.div variants={fadeUp} className="mb-14" style={{ height: "80px", position: "relative", overflow: "hidden" }}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={36}
              gap={48}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#060610"
              ariaLabel="Technology stack"
            />
          </motion.div>

          {/* Skill bars */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`p-6 rounded-2xl border ${borderMap[group.color]} bg-white/[0.02] relative overflow-hidden transition-colors duration-300`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${glowMap[group.color]} blur-2xl`} />
                <h3 className={`text-xs font-mono uppercase tracking-widest ${textMap[group.color]} mb-5`}>
                  {group.label}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-white/70 font-medium">{skill.name}</span>
                        <span className="text-xs text-white/30 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${colorMap[group.color]}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + j * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Spoken Languages */}
          <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-5">Spoken Languages</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-white/70">{lang.name}</span>
                    <span className="text-xs text-white/30 font-mono">{lang.level}</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
