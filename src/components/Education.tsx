import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <GraduationCap className="text-orange-400" /> Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-2">{edu.institution}</h3>
              <div className="text-orange-400 text-sm font-medium mb-2">{edu.degree}</div>
              <div className="text-slate-500 text-sm">{edu.dates}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
