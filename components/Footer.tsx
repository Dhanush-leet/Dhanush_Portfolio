import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-background pt-32 pb-12 px-6 md:px-12 border-t border-border/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter max-w-4xl text-primary">
            Let's build the <br />
            <span className="text-secondary">next generation.</span>
          </h2>

          <a href="mailto:dhanushsankar4567@gmail.com" className="group inline-flex items-center gap-4 text-xl md:text-2xl font-mono mt-8 hover:text-accent transition-colors text-primary">
            <span>Start a conversation</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mt-20">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary/40 uppercase">Social</span>
            <div className="flex gap-6">
              <a href="https://github.com/Dhanush-leet" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/dhanush-g-964b7b290/" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/scoobie.doo___?igsh=MWRwcHJxcGY0aHNkMA%3D%3D" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <span className="font-mono text-xs text-primary/40 uppercase">Location</span>
            <span className="text-sm font-mono text-primary">Karur, Tamil Nadu, India</span>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <span className="font-mono text-xs text-primary/40 uppercase">Copyright</span>
            <span className="text-sm font-mono text-primary/40">© 2026 Dhanush G. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;