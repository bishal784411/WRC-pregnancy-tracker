import React from "react";

const InlineReloadIndicator: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex gap-4 items-end h-[100px]">
        <div className="w-4 rounded-[3px] h-[80px] animate-strip1"></div>
        <div className="w-4 rounded-[3px] h-[90px] animate-strip2"></div>
        <div className="w-4 rounded-[3px] h-[95px] animate-strip3"></div>
      </div>
    </div>
  );
};

export default InlineReloadIndicator;
