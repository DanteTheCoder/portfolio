// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-[#060610] min-h-screen">
      <Navbar />
      <Hero />

      {/* Placeholder sections - you'll build these next */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <p className="text-white/30 font-mono text-sm">// About section coming soon</p>
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <p className="text-white/30 font-mono text-sm">// Projects section coming soon</p>
      </section>
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <p className="text-white/30 font-mono text-sm">// Skills section coming soon</p>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <p className="text-white/30 font-mono text-sm">// Contact section coming soon</p>
      </section>
    </div>
  );
}

export default App;
