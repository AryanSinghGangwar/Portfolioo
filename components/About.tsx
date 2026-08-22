"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-relaxed">
            <div>
              <p className="mb-4">
                I am a results-driven B.Tech student in Electrical and Electronics Engineering with a minor in Computer Science at Visvesvaraya National Institute of Technology (VNIT), Nagpur. 
              </p>
              <p>
                My passion lies in backend systems, full-stack development, and scalable architecture. I have a strong track record of building high-performance solutions—ranging from custom C++ database engines to production-ready web platforms and AI-powered tools.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium text-slate-300">VNIT, Nagpur</div>
                  <div className="text-sm">B.Tech EEE (Minor in CSE)</div>
                  <div className="text-sm text-slate-400">Aug 2023 - May 2027 • CGPA: 8.06/10.00</div>
                </li>
                <li>
                  <div className="font-medium text-slate-300">Mount Litera Zee School</div>
                  <div className="text-sm">Class XII • 91.4%</div>
                  <div className="text-sm">Class X • 96.4% (Top 0.1% in Board Exams, 100/100 in Science)</div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
