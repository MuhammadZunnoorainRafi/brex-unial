import Image from 'next/image';
import React from 'react';

function Tabs() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 ">
      <div className="max-w-[1380px] mx-auto space-y-10">
        <div className="flex items-center justify-evenly py-3 border-b border-slate-300">
          <p>DoorDash</p>
          <p>SeatGeek</p>
          <p>Lemonade</p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="flex-1 relative w-full h-[500px]">
            <Image
              src="/doordash.webp"
              className="object-cover rounded-xl"
              fill
              alt="tabs image error"
            />
          </div>
          <div className="flex-1 space-y-7">
            <Image
              src="/HP-DD.webp"
              width={300}
              height={300}
              alt="Tabs image error"
            />
            <h1 className="text-5xl">
              “Brex has been a major gain for us in efficiency for T&E. It’s
              easy for employees to understand where and how to spend.”
            </h1>
            <p className="text-2xl">
              {' '}
              — Mike Kim, Vice President of Finance, DoorDash
            </p>
            <div className="space-x-2 flex items-center text-lg font-semibold justify-start text-orange-500 hover:text-orange-600 group hover:cursor-pointer">
              <p>Explore Brex cards</p>
              <p className="group-hover:translate-x-2 duration-200">{'->'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
