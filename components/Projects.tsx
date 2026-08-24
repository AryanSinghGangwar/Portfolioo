"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AtlasORM",
    subtitle: "Custom C++ ORM Engine",
    description: "Engineered a custom Object-Relational Mapping engine in C++ with a layered architecture. Built a dynamic query builder supporting method chaining for type-safe data retrieval and implemented efficient DB-to-object mapping.",
    tech: ["C++", "SQLite", "STL", "System Design"],
    github: "https://github.com/AryanSinghGangwar/ORM",
    live: "https://orm-use.vercel.app/",
    category: ["Backend", "C++ & Hardware"],
  },
  {
    title: "DocChat AI",
    subtitle: "PDF Q&A and Summarizer",
    description: "Built an AI-powered document assistant for context-aware PDF querying and automated summarization with source references. Developed a semantic search pipeline using embeddings and cosine similarity.",
    tech: ["Python", "Gemini API", "Sentence-Transformers", "RAG"],
    github: "https://github.com/AryanSinghGangwar/DocChat_AI",
    category: ["AI/ML", "Backend"],
  },
  {
    title: "Consonite Live",
    subtitle: "Animated Event Portal",
    description: "Architected the official portal with a responsive UI and GSAP-powered animations. Developed backend services using Node.js and Express to handle concurrent registrations, serving 200+ users during peak times.",
    tech: ["React.js", "GSAP", "Node.js", "MongoDB"],
    github: "https://github.com/AryanSinghGangwar/consonite",
    live: "https://consonite.ecellvnit.org/",
    category: ["Frontend", "Backend"],
  },
  {
    title: "VidSocial",
    subtitle: "Microblogging Platform",
    description: "Developed a hybrid social platform featuring adaptive video streaming via Cloudinary integration and a secure microblogging feed with JWT-based authentication.",
    tech: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/AryanSinghGangwar/VidSocial",
    category: ["Backend"],
  },
  {
    title: "IoT Smart Energy Meter",
    subtitle: "Real-Time Monitoring System",
    description: "Developed an IoT-based energy meter using ESP32 for real-time electrical load monitoring. Engineered a remote load-control mechanism and a monitoring dashboard.",
    tech: ["ESP32", "Sensors", "IoT", "C/C++"],
    category: ["C++ & Hardware"],
  },
  {
    title: "Single-Axis Solar Tracker",
    subtitle: "Automated Energy Harvesting",
    description: "Built an automated solar tracking system with an LDR-based comparator circuit interfaced with a DC motor for automated positioning and sensor-driven control.",
    tech: ["Automation", "Motor Control", "Analog Electronics"],
    category: ["C++ & Hardware"],
  }
];

const categories = ["All", "Backend", "Frontend", "AI/ML", "C++ & Hardware"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => 
    activeCategory === "All" ? true : project.category.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
              Featured Projects
            </h2>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-slate-200 text-slate-900"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col h-full group hover:border-slate-500 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-slate-300 transition-colors">{project.title}</h3>
                      <div className="text-sm text-slate-400 font-medium mt-1">{project.subtitle}</div>
                    </div>
                    <div className="flex gap-2 text-slate-400">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
