import React from 'react';

const SettingSlider = ({ label, value, max = 100 }) => {
  return (
    <div className="py-3 px-4 border border-[#4F494B] rounded-lg mb-3 bg-[#4F494B]">
      <div className="flex justify-between mb-2">
        <span className="text-[#e5e5e5] font-mono text-sm tracking-wide">
          {label}
        </span>
        <span className="text-[#FB2900] font-mono text-sm">
          {value}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-[#4F494B] rounded-full overflow-hidden flex items-center">
        <div 
          className="h-full bg-[#FB2900] rounded-full relative" 
          style={{ width: `${value}%` }}
        >
          {/* Thumb marker effect built into width */}
        </div>
      </div>
    </div>
  );
};

export default SettingSlider;
