import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-blue-400" /> Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8 items-start">
                <div className="md:col-span-1 mb-4 md:mb-0 text-slate-400 text-sm font-medium pt-1">
                  {exp.dates}
                </div>
                <div className="md:col-span-3 relative">
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute -left-[41px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950" />
                  
                  {/* Timeline line for desktop */}
                  {index !== resumeData.experience.length - 1 && (
                    <div className="hidden md:block absolute -left-[36px] top-6 bottom-[-48px] w-px bg-white/10" />
                  )}

                  {/* Timeline line for mobile */}
                  <div className="md:hidden absolute -left-8 top-2 bottom-[-48px] w-px bg-white/10" />
                  <div className="md:hidden absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950" />

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-blue-400 font-medium mb-2">{exp.company}</div>
                    <div className="text-slate-500 text-sm mb-4">{exp.location}</div>
                    
                    {exp.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
