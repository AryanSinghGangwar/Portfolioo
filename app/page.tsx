import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {/* Header/Nav could go here if needed, keeping it minimal for now */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-tighter">
            Aryan<span className="text-slate-400">.</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50">
        <p>© {new Date().getFullYear()} Aryan Singh. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
