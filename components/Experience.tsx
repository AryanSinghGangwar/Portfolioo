"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            Experience
          </h2>

          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-0 md:pl-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10 ml-8 md:ml-12 relative group"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -left-[41px] md:-left-[58px] top-1 h-5 w-5 rounded-full bg-slate-900 border-2 border-slate-400 group-hover:bg-white group-hover:border-white transition-colors group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
              />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors">Head of Technical Affairs</h3>
                <span className="text-slate-400 font-mono text-sm mt-1 md:mt-0 bg-slate-800/50 px-3 py-1 rounded-full">May 2024 – May 2026</span>
              </div>
              <div className="text-slate-400 font-medium mb-6">E-Cell, VNIT • Executive Body Member</div>
              
              <ul className="space-y-4 text-slate-300">
                <motion.li variants={itemVariants} className="flex gap-3">
                  <span className="text-slate-500 mt-1">▹</span>
                  <span><strong>Digital Transformation:</strong> Led QR-based ticketing and entry automation, reducing event queue wait times by 60%.</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex gap-3">
                  <span className="text-slate-500 mt-1">▹</span>
                  <span><strong>User Experience Optimization:</strong> Built and optimized backend workflows for registration and ticket processing, improving user engagement by 45%.</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex gap-3">
                  <span className="text-slate-500 mt-1">▹</span>
                  <span><strong>Scalability:</strong> Designed scalable and reliable workflows to handle concurrent registrations and high-volume transactions with efficient data processing.</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex gap-3">
                  <span className="text-slate-500 mt-1">▹</span>
                  <span><strong>Leadership:</strong> Coordinated technical execution across teams, managing requirements, timelines, and stakeholders.</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
