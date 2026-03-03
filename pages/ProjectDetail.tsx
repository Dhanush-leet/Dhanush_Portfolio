import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-secondary hover:text-white flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors mb-12">
          <ArrowLeft size={14} /> Back to Works
        </Link>
        
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 text-primary">
          {project.title}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 text-sm font-mono uppercase tracking-widest text-secondary">
          <div>
            <span className="block text-primary/40 mb-2">Client</span>
            <span className="text-primary">{project.client}</span>
          </div>
          <div>
            <span className="block text-primary/40 mb-2">Role</span>
            <span className="text-primary">{project.role}</span>
          </div>
          <div>
            <span className="block text-primary/40 mb-2">Year</span>
            <span className="text-primary">{project.year}</span>
          </div>
          {project.link && (
            <div>
              <span className="block text-primary/40 mb-2">Live</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary flex items-center gap-2 transition-colors">
                View Site <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full aspect-video md:aspect-[21/9] bg-surface mb-24 overflow-hidden"
      >
        <img 
          src={project.coverImage} 
          alt={project.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
        {/* Left Column: Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-8 flex flex-col gap-8"
        >
          <h2 className="text-2xl font-light tracking-tight mb-4">Overview</h2>
          {project.fullDescription.map((paragraph, idx) => (
            <p key={idx} className="text-secondary text-lg font-light leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Right Column: Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-4"
        >
          <h2 className="text-2xl font-light tracking-tight mb-8 text-primary">Technologies</h2>
          <div className="flex flex-col gap-4">
            {project.technologies.map(tech => (
              <div key={tech} className="flex items-center gap-4 border-b border-border/10 pb-4">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="font-mono text-sm tracking-widest text-secondary">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Section */}
      {project.galleryImages.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {project.galleryImages.map((img, idx) => (
            <div key={idx} className={`bg-surface overflow-hidden ${idx === 2 ? 'md:col-span-2 aspect-video md:aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'}`}>
              <img 
                src={img} 
                alt={`${project.title} gallery ${idx + 1}`} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      )}

      {/* Next Project Navigation (Optional, can be added later) */}
      <div className="mt-32 pt-16 border-t border-border/10 flex justify-between items-center">
        <Link to="/projects" className="text-secondary hover:text-primary font-mono text-sm uppercase tracking-widest transition-colors">
          Back to Index
        </Link>
      </div>
    </main>
  );
};

export default ProjectDetail;
