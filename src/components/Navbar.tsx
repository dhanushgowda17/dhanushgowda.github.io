import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollTo('hero')}>
          DG.
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Experience</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">Skills</button>
          <button onClick={() => scrollTo('education')} className="hover:text-white transition-colors">Education</button>
        </div>
      </div>
    </motion.nav>
  );
}
