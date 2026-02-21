// src/components/About.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProfileCard from "../bits/ProfileCard";
import talhaImg from "../assets/talha3.png";
import iconPattern from "../assets/iconpattern.png";
import grainUrl from "../assets/grain.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-16 bg-[#060610] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

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

          {/* Profile card + bio side by side */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

            {/* Left — Original React Bits ProfileCard */}
            <motion.div variants={fadeUp} className="shrink-0">
              <ProfileCard
                name="Talha Kekik"
                title="Software Engineer"
                avatarUrl={talhaImg}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl={iconPattern}
                grainUrl={grainUrl}
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              />
            </motion.div>

            {/* Right — Bio text */}
            <motion.div variants={stagger} className="flex-1 space-y-5 md:pt-2">
              <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed">
                I'm a <span className="text-white font-semibold">Frontend Developer</span> with 4+ years of experience building responsive, modern web applications using React and Next.js.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/55 leading-relaxed">
                I have a proven track record of delivering full-stack features including{" "}
                <span className="text-white/80">e-commerce integrations</span>,{" "}
                <span className="text-white/80">CMS solutions</span>, and{" "}
                <span className="text-white/80">data-driven dashboards</span>. Currently based in Mainz, Germany, I'm seeking to bring scalable, user-focused solutions to a product-driven team.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/55 leading-relaxed">
                I studied Computer Science at{" "}
                <span className="text-white/80">Middle East Technical University</span> in Ankara, graduating in 2021 with a GPA of 3.29/4.00. I speak English professionally, Turkish natively, and have basic German skills — which I'm actively improving while living in Germany.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/55 leading-relaxed">
                Outside of code, I'm passionate about clean UI design, performance optimization, and staying up to date with the ever-evolving frontend ecosystem. I believe great software is both technically sound <em>and</em> a pleasure to use.
              </motion.p>

              {/* Education card */}
              <motion.div
                variants={fadeUp}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] mt-2"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600/30 to-blue-600/30 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">B.Sc. Computer Science</p>
                  <p className="text-white/40 text-xs font-mono mt-0.5">Middle East Technical University · 2017–2021 · GPA 3.29/4.00</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
