import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="philosophy" className="py-24 md:py-40 px-6 md:px-12 border-t border-border/5 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24"
        >
          {/* Section Title */}
          <div className="md:col-span-4">
            <motion.h2 variants={itemVariants} className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              // Philosophy
            </motion.h2>
            <motion.div variants={itemVariants} className="text-3xl md:text-4xl font-light leading-tight text-secondary">
              Most people build features. <br />
              <span className="text-primary font-medium">I build systems that scale.</span>
            </motion.div>
          </div>

          {/* Content Block 1 */}
          <div className="md:col-span-8 space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-secondary leading-relaxed">
                I believe strong software begins with architecture. Clean backend design, secure authentication, structured databases, and modular frontend systems form the foundation of everything I build.
              </p>
              <p className="text-lg text-secondary/70 font-light leading-relaxed max-w-2xl">
                My approach focuses on performance, maintainability, and real-world usability. Whether it’s AI-driven analytics, real-time systems, or immersive UI experiences, I prioritize clean code, security, and scalability.
              </p>
            </motion.div>

            {/* Key Pillars Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {[
                { title: "System-Oriented Thinking", desc: "I design software with long-term scalability and modular growth in mind." },
                { title: "Security First", desc: "JWT authentication, role-based access, input validation, and secure API design are default practices." },
                { title: "Data-Driven Design", desc: "Applications should provide actionable insights through structured analytics and visualization." },
                { title: "Product-Level Execution", desc: "I build projects like deployable SaaS platforms, not academic prototypes." }
              ].map((pillar, idx) => (
                <div key={idx} className="group cursor-default">
                  <h3 className="text-lg font-medium mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-secondary font-mono leading-relaxed border-l border-border/10 pl-4 group-hover:border-accent/50 transition-colors duration-300">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;