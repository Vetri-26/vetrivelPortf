import React from 'react';
import Sidebar from './Sidebar';
import AnimatedBackground from './AnimatedBackground';

const Layout = ({ children, activeSection, setActiveSection }) => {
  return (
    <div className="flex h-screen w-full bg-black text-white font-sans overflow-hidden relative">
      <AnimatedBackground />
      {/* Sidebar - Desktop Only */}
      <div className="w-64 border-r border-[#080B14]/60 bg-[#080B14]/70 backdrop-blur-md flex-shrink-0 relative hidden md:block z-10 shadow-[2px_0_15px_rgba(0,0,0,0.8)]">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 bg-transparent relative overflow-y-auto pb-20 md:pb-0 z-10">
        <div className="max-w-4xl mx-auto py-12 px-6 sm:px-12 w-full min-h-full">
          {children}
        </div>
      </div>
      
      {/* Mobile Nav Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#080B14]/80 backdrop-blur-md border-t border-[#4F494B] z-50 flex justify-around items-center px-2">
        {['about', 'projects', 'experience', 'contact'].map((id) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeSection === id ? 'text-[#FB2900]' : 'text-[#808080] hover:text-[#e5e5e5]'
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full mb-1 transition-opacity ${activeSection === id ? 'opacity-100 bg-[#FB2900]' : 'opacity-0'}`} />
            <span className="text-[10px] font-mono uppercase tracking-wider">{id.substring(0,3)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Layout;
