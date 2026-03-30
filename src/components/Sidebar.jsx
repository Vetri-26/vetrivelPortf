import React from 'react';
import { User, Briefcase, Terminal, Mail, Settings, Camera, Download, Eye } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: Terminal },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="flex flex-col h-full bg-[#080B14] border-r border-[#4F494B] p-4 font-mono select-none">

      {/* Header */}
      <div className="flex items-center gap-3 mb-10 px-2 py-4 border-b border-[#4F494B]">
        <Camera className="w-6 h-6 text-[#FB2900]" />
        <div>
          <h1 className="text-sm font-bold uppercase tracking-wider text-[#e5e5e5]">Portfolio</h1>
          <p className="text-[10px] text-gray-500 font-sans tracking-widest">v1.4.2 fw</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 -mx-4">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "flex items-center gap-4 px-8 py-3 text-sm font-medium transition-all duration-200 w-full text-left outline-none border-y border-transparent",
                isActive
                  ? "bg-[#4F494B] text-[#FB2900] border-2 border-l-15 border-[#FB2900] shadow-[0_4px_12px_rgba(252,163,17,0.15)]"
                  : "text-[#a0a0a0] border-transparent hover:bg-[#4F494B] hover:text-[#e5e5e5]"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-[#FB2900]" : "text-[#808080]")} />
              {item.label}

              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FB2900] animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Resume Action Buttons */}
      <div className="mt-auto px-2 pb-3 pt-4 border-t border-[#4F494B] flex flex-col gap-2">

        {/* View Resume — outlined */}
        <a
          href="./2023PECCB216-Vetrivel A.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-[11px]",
            "bg-transparent text-[#FB2900] text-xs font-bold uppercase tracking-widest",
            "border border-[#FB2900]",
            "transition-all duration-150 ease-in-out",
            "hover:bg-[#FB2900] hover:text-white",
            "active:scale-[0.97]"
          )}
        >
          <Eye className="w-3.5 h-3.5 shrink-0" />
          View Resume
        </a>
      </div>

      {/* Status Bar */}
      <div className="px-2 py-3 text-xs text-gray-600 flex items-center justify-between border-t border-[#4F494B]">
        <span className="flex items-center gap-1.5"><Settings className="w-3 h-3" /> Setup</span>
        <span>Bat: 84%</span>
      </div>
    </div>
  );
};

export default Sidebar;
