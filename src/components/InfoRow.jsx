import React from 'react';

const InfoRow = ({ label, value, highlight = false }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#4F494B] group">
      <span className="text-[#a0a0a0] font-mono text-sm tracking-wide group-hover:text-[#e5e5e5] transition-colors">
        {label}
      </span>
      <span 
        className={`font-mono text-sm tracking-wider ${
          highlight ? 'text-[#FB2900] font-semibold' : 'text-[#e5e5e5]'
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default InfoRow;
