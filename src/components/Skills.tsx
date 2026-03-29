import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Code2, Award } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Code2 className="text-emerald-400" /> Skills
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {resumeData.skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex}>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.02 + groupIndex * 0.1 }}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Award className="text-purple-400" /> Certifications
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                >
                  <Award className="text-purple-400 shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-300 text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
