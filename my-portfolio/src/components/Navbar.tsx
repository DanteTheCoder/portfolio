// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnet from "../bits/Magnet";

const NAV_ITEMS = ["Home", "About", "Experience", "Projects", "Skills", "Contact"] as const;

const SOCIALS = {
  github: "https://github.com/DanteTheCoder",
  linkedin: "https://www.linkedin.com/in/talhakekik/",
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.toLowerCase()));
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id.charAt(0).toUpperCase() + section.id.slice(1));
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#060610]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_0_30px_rgba(109,40,217,0.15)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button onClick={() => scrollTo("home")} className="relative group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <span className="font-bold text-xl tracking-tight text-white font-mono">
              TK<span className="text-violet-400">.</span>
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-blue-400 group-hover:w-full transition-all duration-300" />
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => scrollTo(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === item ? "text-white" : "text-white/50 hover:text-white/90"
                }`}
              >
                {activeSection === item && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
                {activeSection === item && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400" />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Socials + Magnet Hire Me */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                <GitHubIcon />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                <LinkedInIcon />
              </a>
            </div>

            {/* ✨ Original React Bits Magnet wrapping the Hire Me button */}
            <div className="hidden md:block">
              <Magnet padding={60} magnetStrength={4}>
                <a
                  href="mailto:talhakekik@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(109,40,217,0.3)] hover:shadow-[0_0_30px_rgba(109,40,217,0.5)]"
                >
                  Hire Me
                </a>
              </Magnet>
            </div>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden flex flex-col gap-1.5 p-2 group">
              <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px w-4 bg-white/60 transition-all duration-300 group-hover:w-6 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-4 right-4 z-40 rounded-2xl bg-[#0a0a18]/95 backdrop-blur-xl border border-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:hidden"
          >
            <nav className="flex flex-col gap-1 mb-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    activeSection === item ? "text-white bg-white/5 border border-white/10" : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white transition-colors"><GitHubIcon /></a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white transition-colors"><LinkedInIcon /></a>
              <a href="mailto:talhakekik@gmail.com" className="ml-auto px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-violet-600 to-blue-600">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
