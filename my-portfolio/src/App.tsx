// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SplashCursor from "./bits/SplashCursor";

function App() {
  return (
    <div className="bg-[#060610] min-h-screen">
      {/* Splash cursor — sits above everything, pointer-events: none */}
      <SplashCursor
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={5000}
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={2}
        CURL={4}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
