import { resumeData } from '../data';
import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10 bg-slate-950">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${resumeData.basics.email}`} className="p-2 rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          {resumeData.basics.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
              {link.name === 'LinkedIn' ? <Linkedin size={20} /> : link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
