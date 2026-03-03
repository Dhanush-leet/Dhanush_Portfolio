import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Backend & Systems",
    items: ["Java", "Spring Boot", "REST APIs", "JWT Authentication", "Role-Based Access Control", "Redis", "Node.js"]
  },
  {
    category: "Frontend Engineering",
    items: ["React (Vite)", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Axios", "React Router"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"]
  },
  {
    category: "AI & Data",
    items: ["Machine Learning Models", "Generative AI", "GPT Integration", "Career Prediction Logic", "Data Visualization (Recharts)", "Risk Analysis Systems"]
  }
];

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 bg-surface border-t border-border/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              // Technical Arsenal
          </span>
          <h2 className="text-3xl font-medium text-primary">Tools of Trade</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-primary/50 mb-6 pb-2 border-b border-border/10">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm md:text-base text-secondary hover:text-primary transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;