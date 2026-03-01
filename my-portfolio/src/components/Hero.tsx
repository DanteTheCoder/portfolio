// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Aurora from "../bits/Aurora";
import SplitText from "../bits/SplitText";
import GradientText from "../bits/GradientText";

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, wordIdx, words, speed, pause]);

  return display;
}

const ROLES = ["Frontend Developer", "React & Next.js Specialist", "UI/UX Enthusiast"];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060610]"
    >
      <Aurora colorStops={["#7c3aed", "#2563eb", "#dfed83"]} amplitude={1.2} blend={0.6} speed={1.0} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060610]/20 via-transparent to-[#060610] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Fully centered content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name — each word on its own line so SplitText inline-block doesn't clip */}
        <div className="mb-8 w-full">
          {/* "Talha" */}
          <div className="flex justify-center mb-1 overflow-visible">
            <SplitText
              text="Talha"
              tag="h1"
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1, display: "block" }}
              delay={130}
              duration={1.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60, rotateX: -40 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0}
              rootMargin="0px"
              textAlign="center"
            />
          </div>
          {/* "Kekik" — gradient via wrapper since SplitText owns the element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-2"
          >
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#dff0a3"]}
              animationSpeed={8}
              showBorder={false}
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight font-semibold"
            >
              Kekik
            </GradientText>
          </motion.div>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-6 h-8"
        >
          <p className="text-lg md:text-xl text-white/60 font-light tracking-widest uppercase font-mono">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* Bio — SplitText words */}
        <div className="mb-10 max-w-xl w-full">
          <SplitText
            text="I build fast, scalable web apps with clean code and great UX. 4+ years turning ideas into polished products."
            tag="p"
            className="text-white/50 text-base md:text-lg leading-relaxed"
            delay={18}
            duration={0.7}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
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

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs text-white/40 rounded-full border border-white/5 bg-white/[0.02] font-mono">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors z-10"
      >
        <span className="text-xs tracking-widest uppercase font-mono">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
