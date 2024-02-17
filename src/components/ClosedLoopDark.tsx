import Image from 'next/image';
import React from 'react';

function ClosedLoopDark() {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center gap-20 min-h-[90vh] max-w-7xl mx-auto">
        <div className=" max-w-lg flex-1">
          <h1 className="text-white font-bold text-[61px] leading-[1.3] ">
            The AI-powered spend platform.
          </h1>
          <p className="text-gray-300 text-[22px] font-semibold mb-10">
            Spend smarter with integrated cards, expenses, travel, and payments
            — in 100+ countries.
          </p>
          <button className="px-10 py-3 bg-orange-500 hover:bg-orange-400 duration-200 rounded-lg text-white">
            Get started
          </button>
        </div>
        <div className="flex-1 relative h-[500px]">
          <Image
            src="/closed-loop-dark.webp"
            fill
            alt="closed-loop-dark image error"
          />
        </div>
      </div>
    </div>
  );
}

export default ClosedLoopDark;
