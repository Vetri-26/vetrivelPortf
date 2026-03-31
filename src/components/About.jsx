import React from 'react';
import { Camera } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      <div className="mb-8 border-b border-[#4F494B] pb-4">
        <h2 className="text-2xl font-bold font-mono tracking-widest text-[#e5e5e5] uppercase flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FB2900]" />
          User Profile
        </h2>
        <p className="text-[#a0a0a0] mt-2 font-mono text-xs uppercase tracking-widest">
          Personal Identification & Specifications
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">

        {/* Left Column: Photo Area */}
        <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center mb-35">
          <div className="w-full aspect-square md:aspect-[4/5] max-w-[280px] bg-[#080B14] rounded-xl border border-[#FB2900]/60 hover:border-[#E00005] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center shadow-lg group relative overflow-hidden">
            <Camera className="w-12 h-12 text-[#4F494B] group-hover:text-[#E00005]/50 transition-colors mb-4" />
            <div className="text-[#444] font-mono text-xs uppercase tracking-widest group-hover:text-[#E00005]/80 transition-colors">
              IMG_SENSOR_OFF
            </div>
            <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#FB2900] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#4F494B]">F2.8 1/60 ISO400</div>
          </div>
        </div>

        {/* Right Column: Content Area */}
        <div className="w-full md:w-2/3 flex flex-col justify-center gap-6">

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Vetrivel A
            </h1>
          </div>

          {/* Role */}
          <div>
            <div className="text-[#808080] font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#FB2900]" /> ROLE
            </div>
            <h3 className="text-lg font-mono text-[#FB2900] uppercase tracking-widest">
              Full Stack Developer
            </h3>
          </div>

          {/* Education */}
          <div>
            <div className="text-[#808080] font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#FB2900]" /> EDUCATION
            </div>
            <p className="text-[#e5e5e5] font-mono text-sm tracking-wide">
              B.Tech in Computer Science – Panimalar Engineering College
            </p>
          </div>

          {/* Bio */}
          <div>
            <div className="text-[#808080] font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#FB2900]" /> BIO
            </div>
            <div className="text-[#a0a0a0] leading-relaxed max-w-2xl font-sans text-sm sm:text-base">
              <p>
                I am a Computer Science and Business Systems student and an aspiring Full Stack Developer. I am currently learning and building web applications using technologies like React, Node.js, and MongoDB.

                I enjoy creating responsive and user-friendly interfaces and improving my skills by working on real-world projects. I am passionate about learning new technologies and growing as a developer.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-2">
            <div className="text-[#808080] font-mono text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#FB2900]" /> SKILLS
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['JavaScript', 'React', 'Node.js', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono text-[#e5e5e5] bg-[#080B14] border border-[#4F494B] rounded-md hover:border-[#E00005] hover:text-[#E00005] transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
