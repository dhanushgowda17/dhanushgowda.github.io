import { motion } from 'motion/react';
import { resumeData } from '../data';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  if (!resumeData.projects || resumeData.projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <FolderGit2 className="text-blue-400" /> Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <div className="text-blue-400 text-sm font-medium mb-4">{project.stack}</div>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
