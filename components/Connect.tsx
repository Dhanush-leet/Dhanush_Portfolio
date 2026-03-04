import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Linkedin, Github, MapPin, Download } from 'lucide-react';

const Connect: React.FC = () => {
    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "dhanushsankar4567@gmail.com",
            href: "mailto:dhanushsankar4567@gmail.com"
        },
        {
            icon: <Linkedin size={20} />,
            label: "LinkedIn",
            value: "linkedin.com/in/dhanush-g-964b7b290",
            href: "https://www.linkedin.com/in/dhanush-g-964b7b290/"
        },
        {
            icon: <Github size={20} />,
            label: "GitHub",
            value: "github.com/Dhanush-leet",
            href: "https://github.com/Dhanush-leet"
        },
        {
            icon: <MapPin size={20} />,
            label: "Location",
            value: "Karur, Tamil Nadu, India",
            href: "#"
        }
    ];

    return (
        <section id="connect" className="min-h-screen flex items-center px-6 lg:px-20 py-24 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute left-0 top-0 w-1/4 h-full border-r border-border/5 pointer-events-none hidden lg:block" />

            <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
                        // Get in Touch
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-primary mb-8">
                        Let’s Build Something <span className="text-accent italic">Meaningful.</span>
                    </h2>

                    <p className="text-secondary text-lg lg:text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                        Open to internships, collaborations, and full-time opportunities.
                        <br className="hidden md:block" /> Let’s connect and create impact.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {contactInfo.map((item, idx) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith('http') ? "_blank" : undefined}
                                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex items-center gap-6 p-6 bg-surface/30 backdrop-blur-md rounded-2xl border border-border/10 hover:border-accent/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/5 text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div className="text-left">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary block mb-1">
                                        {item.label}
                                    </span>
                                    <span className="text-primary font-medium group-hover:text-accent transition-colors duration-300">
                                        {item.value}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a
                            href="https://drive.google.com/uc?export=download&id=1LjVTsgCK_idVaj3O9WdnBsI4oouVJ4U6"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Dhanush_G_Resume.pdf"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-background font-mono text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300 rounded-full group"
                        >
                            Download Resume
                            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Connect;
