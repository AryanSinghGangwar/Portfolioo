"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-4 text-white">
            <span className="w-12 h-1 bg-white rounded-full" />
            Get In Touch
            <span className="w-12 h-1 bg-white rounded-full" />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <a href="mailto:aryansingh81104@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">aryansingh81104@gmail.com</span>
            </a>
            
            <a href="tel:+917985447278" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">+91 7985447278</span>
            </a>
            
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-medium">Nagpur, Maharashtra</span>
            </div>
          </div>
          
          <a
            href="mailto:aryansingh81104@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-200 text-black font-bold rounded-full transition-colors"
          >
            Say Hello
            <Send className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
