import React from 'react';
import { motion } from 'framer-motion';

const Academics: React.FC = () => {
    return (
        <motion.section
            id="academics"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen flex items-center px-6 lg:px-20 py-24 bg-background relative"
        >
            {/* Background Decoration */}
            <div className="absolute left-0 top-0 w-1/4 h-full border-r border-border/5 pointer-events-none hidden lg:block" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
            // Academic Performance
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-primary">
                        Education & Excellence
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Undergraduate Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-surface/30 dark:bg-surface/30 backdrop-blur-md p-8 lg:p-12 rounded-[2rem] border border-border/10 hover:border-accent/30 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-2xl lg:text-3xl font-medium text-primary group-hover:text-accent transition-colors">
                                Undergraduate
                            </h3>
                            <span className="font-mono text-[10px] px-2 py-1 bg-accent/10 text-accent rounded uppercase tracking-tighter">Current</span>
                        </div>

                        <ul className="space-y-6">
                            <li className="flex flex-col gap-1">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Course</span>
                                <span className="text-lg text-primary/80">Computer Science and Business Systems (CSBS)</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Institution</span>
                                <span className="text-lg text-primary/80">VSB Engineering College, Karur, Tamilnadu</span>
                            </li>
                            <li className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Batch</span>
                                    <span className="text-lg text-primary/80">2023 – 2027</span>
                                </div>
                                <div className="flex flex-col gap-1 text-right">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">CGPA</span>
                                    <span className="text-3xl font-medium text-accent">8.90</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Schooling Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-surface/30 dark:bg-surface/30 backdrop-blur-md p-8 lg:p-12 rounded-[2rem] border border-border/10 hover:border-accent/30 transition-colors group"
                    >
                        <h3 className="text-2xl lg:text-3xl font-medium text-primary mb-8 group-hover:text-accent transition-colors">
                            Schooling
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex flex-col gap-1">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Institution</span>
                                <span className="text-lg text-primary/80">Velammal Bodhi Campus (CBSE), Karur, Tamilnadu</span>
                            </li>
                            <li className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex flex-col gap-1 border-r border-border/10">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">10th Score</span>
                                    <span className="text-2xl font-medium text-primary">87.4%</span>
                                </div>
                                <div className="flex flex-col gap-1 text-right">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">12th Score</span>
                                    <span className="text-2xl font-medium text-primary">70%</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Academics;
