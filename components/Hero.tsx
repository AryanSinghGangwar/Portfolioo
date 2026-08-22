"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-slate-400 font-medium tracking-wide uppercase mb-4">
            Hi, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Aryan Singh
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-400 font-medium mb-8">
            Backend Systems & Full-Stack Developer
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build high-performance solutions ranging from custom C++ database
            engines to production-ready web platforms, focusing on scalable
            architecture and AI integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-slate-200 text-black font-semibold rounded-full transition-colors"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-colors border border-slate-700"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/AryanSinghGangwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900/50 rounded-full border border-slate-800 hover:border-slate-600"
            >
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/aryan-singh0811"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900/50 rounded-full border border-slate-800 hover:border-slate-600"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:aryansingh81104@gmail.com"
              className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900/50 rounded-full border border-slate-800 hover:border-slate-600"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
