import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Work: React.FC = () => {
  // Only show first 3 projects on the home page
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 md:py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-border/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              // Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-primary">
              Systems Engineering
            </h2>
          </div>
          <p className="text-secondary max-w-sm text-sm font-mono text-right md:text-left">
            Showcasing scalable architectures and deployed solutions.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 group`}
            >
              {/* Image Side */}
              <Link to={`/projects/${project.id}`} className="w-full md:w-1/2 relative overflow-hidden aspect-[4/3] bg-surface block">
                {/* Image Filter & Overlay */}
                <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Technical Overlay */}
                <div className="absolute bottom-4 left-4 z-20 font-mono text-xs text-white bg-black/70 backdrop-blur-sm px-3 py-1 border border-white/10">
                  ID: PRJ_{project.id.substring(0, 4).toUpperCase()}
                </div>
              </Link>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-border/20"></span>
                  <span className="font-mono text-xs text-secondary uppercase tracking-widest">{project.role}</span>
                </div>

                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-3xl md:text-4xl font-medium mb-6 text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-secondary text-lg font-light leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 5).map(tag => (
                    <span key={tag} className="px-3 py-1 border border-border/10 text-xs font-mono text-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Link to={`/projects/${project.id}`} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group/btn text-primary">
                    View Case Study <ArrowUpRight size={16} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border/20 hover:bg-primary hover:text-background transition-all duration-300 font-mono text-sm uppercase tracking-widest group text-primary"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;