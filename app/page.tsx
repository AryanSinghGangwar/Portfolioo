import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />


      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50">
        <p>© {new Date().getFullYear()} Aryan Singh.</p>
      </footer>
    </main>
  );
}
