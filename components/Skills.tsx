"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Generative AI",
    skills: ["RAG Development", "Multilingual Voice RAG", "Prompt Engineering", "Gemini API", "Sentence-Transformers"],
    color: "text-slate-200",
    bg: "bg-slate-800",
    border: "border-slate-700"
  },
  {
    title: "Languages",
    skills: ["C++", "C", "Python", "JavaScript", "SQL (PostgreSQL, MySQL, SQLite)", "HTML/CSS"],
    color: "text-slate-200",
    bg: "bg-slate-800",
    border: "border-slate-700"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "GSAP"],
    color: "text-slate-200",
    bg: "bg-slate-800",
    border: "border-slate-700"
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "AWS (EC2, S3)", "Vercel", "Cloudinary", "Postman", "JWT", "Docker"],
    color: "text-slate-200",
    bg: "bg-slate-800",
    border: "border-slate-700"
  },
  {
    title: "Core Concepts",
    skills: ["DSA (300+ LeetCode, Knight Rank)", "OOP", "DBMS", "Operating Systems", "System Design"],
    color: "text-slate-200",
    bg: "bg-slate-800",
    border: "border-slate-700"
  },
  {
    title: "Core Engineering & IoT",
    skills: ["Power Electronics", "Control Systems", "Industrial Automation", "ESP32", "MATLAB"],
    color: "text-slate-200",
    bg: "bg-slate-800",
    border: "border-slate-700"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            <span className="w-12 h-1 bg-white rounded-full" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border bg-slate-900/50 hover:bg-slate-900 transition-colors ${category.border}`}>
                <h3 className={`text-lg font-bold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`text-sm px-3 py-1.5 rounded-full font-medium ${category.bg} ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
