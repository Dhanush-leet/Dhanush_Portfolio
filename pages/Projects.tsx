import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter mb-6">
          Selected <span className="text-secondary italic">Works</span>
        </h1>
        <p className="text-secondary text-lg max-w-2xl font-light">
          A collection of high-performance engineering projects, focusing on distributed systems, AI architecture, and scalable infrastructure.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-32">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-center"
          >
            {/* Image Container */}
            <Link
              to={`/projects/${project.id}`}
              className="w-full md:w-3/5 overflow-hidden bg-surface relative aspect-[16/9]"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={project.coverImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </Link>

            {/* Content Container */}
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-xs font-mono text-secondary uppercase tracking-widest">
                <span>{project.year}</span>
                <span className="w-1 h-1 bg-secondary rounded-full" />
                <span>{project.client}</span>
              </div>

              <Link to={`/projects/${project.id}`}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h2>
              </Link>

              <p className="text-secondary font-light mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 bg-border/5 border border-border/10 text-secondary">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs font-mono px-3 py-1 bg-border/5 border border-border/10 text-secondary">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors w-fit group/btn text-primary"
              >
                View Project
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
