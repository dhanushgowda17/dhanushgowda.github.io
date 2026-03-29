import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-blue-300"
        >
          {resumeData.basics.location}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {resumeData.basics.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl text-slate-400 mb-8 max-w-2xl mx-auto"
        >
          {resumeData.basics.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
        >
          {resumeData.basics.summary}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('experience')}
            className="px-8 py-4 rounded-full bg-white text-slate-950 font-semibold flex items-center gap-2 hover:bg-slate-200 transition-colors w-full sm:w-auto justify-center"
          >
            View Experience <ArrowDown size={18} />
          </button>
          <a
            href="./Dhanush_Gowda_Resume.txt"
            download="Dhanush_Gowda_Resume.txt"
            className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors border border-white/10 w-full sm:w-auto justify-center"
          >
            Download Resume <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
