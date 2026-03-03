import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://videos.pexels.com/video-files/854541/854541-hd_1280_720_60fps.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/10 bg-surface mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
              Full Stack Developer | AI-Driven Systems Builder | CSBS Undergraduate
            </span>
          </div>
        </motion.div>

        <div className="space-y-4 mb-12">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-primary"
            >
              Engineering
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-secondary"
            >
              Intelligent, Scalable Digital Systems
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-12 max-w-5xl border-t border-border/10 pt-8"
        >
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
              I’m Dhanush G, a Full Stack Developer specializing in Java, Spring Boot, React, and AI-integrated applications. I design and build secure, scalable, production-ready systems that combine strong backend architecture with immersive frontend experiences. My focus lies in real-world product development, performance optimization, and building intelligent platforms that solve practical problems.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-secondary uppercase tracking-widest">
              Core Focus
            </span>
            <ul className="space-y-2">
              {['Frontend Developer (React)', 'Secure Backend Architecture (Spring Boot + JWT)', 'AI-Integrated Web Applications', 'Scalable Database & System Design'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-mono text-sm text-primary">
                  <span className="text-primary/30">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 z-10"
      >
        <ArrowDown className="text-primary/40 animate-bounce" size={20} />
        <span className="font-mono text-xs uppercase tracking-widest text-primary/40">Scroll to Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;