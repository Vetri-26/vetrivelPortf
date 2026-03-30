import React from 'react';

const experienceData = [
  {
    role: "Web development intern",
    company: "Tek Pyramid",
    period: "2025",
    desc: "Worked as a Frontend Developer Intern, building responsive and user-friendly web interfaces using modern technologies. Collaborated on real-time projects, improved UI/UX design, and gained hands-on experience in developing and optimizing web applications."
  },
  // {
  //   role: "Web development intern",
  //   company: "CodeBind Technologies",
  //   period: "2020 - 2023",
  //   desc: "Designed and implemented interactive dashboards used by 50,000+ daily active users."
  // }
];

const Experience = () => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      <div className="mb-8 border-b border-[#4F494B] pb-4">
        <h2 className="text-2xl font-bold font-mono tracking-widest text-[#e5e5e5] uppercase flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FB2900]" />
          Operation History
        </h2>
        <p className="text-[#a0a0a0] mt-2 font-mono text-xs uppercase tracking-widest">
          Chronological execution log
        </p>
      </div>

      <div className="relative pl-6 border-l border-[#4F494B] space-y-12 mb-8">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Marker */}
            <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#080B14] border-2 border-[#4F494B] group-hover:border-[#E00005] group-hover:bg-[#E00005] transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-lg font-bold text-[#e5e5e5] group-hover:text-[#E00005] transition-colors">
                {exp.role}
              </h3>
              <span className="text-[#FB2900] font-mono text-xs font-bold tracking-widest">
                {exp.period}
              </span>
            </div>

            <div className="text-sm font-mono text-[#808080] mb-3 uppercase tracking-wider">
              @ {exp.company}
            </div>

            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
