// src/components/Hero.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Aurora from "../bits/Aurora";

// Typing animation hook
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          speed
        );
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay(display.slice(0, -1)),
          speed / 2
        );
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, typing, wordIdx, words, speed, pause]);

  return display;
}

// Stagger container variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ROLES = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060610]"
    >
      {/* Aurora Background */}
      <Aurora
        colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060610]/30 via-transparent to-[#060610]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={item}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.9] mb-2"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Talha
          </h1>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
              Kekik
            </span>
          </h1>
        </motion.div>

        {/* Typewriter Role */}
        <motion.div variants={item} className="mb-6 h-8">
          <p className="text-lg md:text-xl text-white/60 font-light tracking-widest uppercase font-mono">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          I build fast, scalable web apps with clean code and great UX.
          <br />
          4+ years turning ideas into polished products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 shadow-[0_0_30px_rgba(109,40,217,0.4)] hover:shadow-[0_0_50px_rgba(109,40,217,0.6)] transition-shadow duration-300 overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            {/* shine */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>

          <motion.a
            href="/CV_Talha_Kekik.pdf"
            download
            className="px-8 py-3.5 text-sm font-semibold text-white/80 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Tech Pills */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-2 mt-12"
        >
          {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs text-white/40 rounded-full border border-white/5 bg-white/[0.02] font-mono"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
