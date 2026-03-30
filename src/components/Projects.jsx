import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'PRJ_01',
    title: 'ComMusix',
    desc: 'A music streaming platform that allows users to listen to music.',
    tech: 'React • Tailwind • Firebase',
    year: '2025'
  }
];

const Projects = () => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      <div className="mb-8 border-b border-[#4F494B] pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold font-mono tracking-widest text-[#e5e5e5] uppercase flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FB2900]" />
            Project Archive
          </h2>
          <p className="text-[#a0a0a0] mt-2 font-mono text-xs uppercase tracking-widest">
            Select item to view specifications
          </p>
        </div>
        <div className="text-[#808080] font-mono text-xs hidden sm:block">
          TOTAL: {projects.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((prj) => (
          <div
            key={prj.id}
            className="group relative bg-[#080B14] rounded-xl border border-[#4F494B] hover:border-[#E00005]/50 p-5 cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#808080] font-mono text-[10px] tracking-widest">
                {prj.id}
              </span>
              <span className="text-[#FB2900] font-mono text-[10px]">
                {prj.year}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#e5e5e5] mb-2 group-hover:text-[#E00005] transition-colors">
              {prj.title}
            </h3>
            <p className="text-sm text-[#a0a0a0] mb-6">
              {prj.desc}
            </p>

            <div className="flex justify-between items-end border-t border-[#4F494B] pt-4 mt-auto">
              <span className="text-xs font-mono text-[#666666]">
                {prj.tech}
              </span>
              <div className="flex gap-2">
                <button className="p-1.5 rounded bg-[#4F494B] text-[#808080] hover:text-[#E00005] transition-colors">
                  <a href="https://github.com/Vetri-26/Com-musix"> <Github className="w-3.5 h-3.5" /></a>
                </button>
                <button className="p-1.5 rounded bg-[#4F494B] text-[#808080] hover:text-[#E00005] transition-colors">
                  <a href="https://com-musix-app-b423f.firebaseapp.com"> <ExternalLink className="w-3.5 h-3.5" /></a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
