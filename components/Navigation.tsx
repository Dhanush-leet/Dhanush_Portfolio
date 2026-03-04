import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Academics', href: '/#academics' },
    { name: 'Philosophy', href: '/#philosophy' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Stack', href: '/#stack' },
    { name: 'Connect', href: '/#connect' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/10' : 'bg-transparent'
          }`}
      >
        <Link
          to="/"
          className="font-mono text-xl tracking-tighter hover:opacity-70 transition-opacity text-primary"
        >
          DHANUSH_G
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.includes('#') ? (
              <HashLink
                key={link.name}
                smooth
                to={link.href}
                className={`text-xs font-mono uppercase tracking-widest transition-colors ${link.name === 'Connect'
                  ? 'px-4 py-2 border border-border/20 hover:bg-primary hover:text-background text-primary'
                  : 'text-secondary hover:text-primary'
                  }`}
              >
                {link.name}
              </HashLink>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-primary"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-primary"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                link.href.includes('#') ? (
                  <HashLink
                    key={link.name}
                    smooth
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-light tracking-tight text-primary hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-light tracking-tight text-primary hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;