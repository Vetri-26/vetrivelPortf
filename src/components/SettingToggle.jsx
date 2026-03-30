import React, { useState } from 'react';

const SettingToggle = ({ label, initialState = false, onChange }) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) onChange(newState);
  };

  return (
    <div 
      className="flex items-center justify-between py-3 px-4 border border-[#4F494B] rounded-lg mb-3 bg-[#4F494B] hover:bg-[#4F494B] cursor-pointer transition-colors"
      onClick={toggle}
    >
      <span className="text-[#e5e5e5] font-mono text-sm tracking-wide">
        {label}
      </span>
      <div 
        className={`w-10 h-5 rounded-full p-1 transition-colors relative flex items-center ${
          isOn ? 'bg-[#FB2900]' : 'bg-[#4F494B]'
        }`}
      >
        <div 
          className={`w-3.5 h-3.5 bg-black rounded-full shadow-sm transition-transform ${
            isOn ? 'translate-x-4.5' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
};

export default SettingToggle;
