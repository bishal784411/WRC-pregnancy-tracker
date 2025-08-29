import React from "react";

const ReloadIndicator: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 
                    backdrop-blur-sm">
      <div className="flex gap-4 items-end h-[150px] relative">
        <div className="w-6 rounded-[3px] h-[120px] animate-strip1"></div>
        <div className="w-6 rounded-[3px] h-[130px] animate-strip2"></div>
        <div className="w-6 rounded-[3px] h-[137px] animate-strip3"></div>
      </div>
    </div>
  );
};

export default ReloadIndicator;
