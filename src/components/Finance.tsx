import Image from 'next/image';
import React from 'react';

function Finance() {
  return (
    <div className="min-h-screen py-20 max-w-7xl mx-auto space-y-14">
      <div className="text-center space-y-4 mb-10">
        <h1 className="font-bold text-6xl">
          Give your finance team superpowers.
        </h1>
        <p className="font-semibold text-xl text-gray-600">
          Maximize every resource with AI-powered controls, payments, and
          accounting.
        </p>
      </div>
      <div className="flex items-center justify-center gap-44">
        <div className=" h-[500px] flex-1 relative">
          <Image
            className="absolute object-contain"
            fill
            src="/control-spend.webp"
            alt="card image error"
          />
        </div>
        <div className="space-y-7 flex-1">
          <h1 className="text-4xl font-bold">
            Control spend before it happens.
          </h1>
          <p className="text-[23px] text-gray-800">
            Set budgets and allocate spend limits with auto-enforced controls
            that empower employees to spend wisely. Track and adjust in real
            time to keep everyone on budget and maximize impact.
          </p>
          <div className="space-x-2 flex items-center text-lg font-semibold justify-start text-orange-500 hover:text-orange-600 group hover:cursor-pointer">
            <p>Explore Brex cards</p>
            <p className="group-hover:translate-x-2 duration-200">{'->'}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center gap-44">
        <div className="w-full h-[500px] flex-1 relative">
          <Image
            className="absolute object-fill"
            fill
            src="/easy-expenses.webp"
            alt="card image error"
          />
        </div>
        <div className="space-y-7 flex-1">
          <h1 className="text-4xl font-bold">
            Control spend before it happens.
          </h1>
          <p className="text-[23px] text-gray-800">
            Set budgets and allocate spend limits with auto-enforced controls
            that empower employees to spend wisely. Track and adjust in real
            time to keep everyone on budget and maximize impact.
          </p>
          <div className="space-x-2 flex items-center text-lg font-semibold justify-start text-orange-500 hover:text-orange-600 group hover:cursor-pointer">
            <p>Explore Brex cards</p>
            <p className="group-hover:translate-x-2 duration-200">{'->'}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-44">
        <div className="w-full h-[500px] flex-1 relative">
          <Image
            className="absolute object-fill"
            fill
            src="/spending-power.webp"
            alt="card image error"
          />
        </div>
        <div className="space-y-7 flex-1">
          <h1 className="text-4xl font-bold">
            Control spend before it happens.
          </h1>
          <p className="text-[23px] text-gray-800">
            Set budgets and allocate spend limits with auto-enforced controls
            that empower employees to spend wisely. Track and adjust in real
            time to keep everyone on budget and maximize impact.
          </p>
          <div className="space-x-2 flex items-center text-lg font-semibold justify-start text-orange-500 hover:text-orange-600 group hover:cursor-pointer">
            <p>Explore Brex cards</p>
            <p className="group-hover:translate-x-2 duration-200">{'->'}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-row-reverse justify-center gap-44">
        <div className="w-full h-[500px] flex-1 relative">
          <Image
            className="absolute object-contain"
            fill
            src="/bill-pay.webp"
            alt="card image error"
          />
        </div>
        <div className="space-y-7 flex-1">
          <h1 className="text-4xl font-bold">
            Control spend before it happens.
          </h1>
          <p className="text-[23px] text-gray-800">
            Set budgets and allocate spend limits with auto-enforced controls
            that empower employees to spend wisely. Track and adjust in real
            time to keep everyone on budget and maximize impact.
          </p>
          <div className="space-x-2 flex items-center text-lg font-semibold justify-start text-orange-500 hover:text-orange-600 group hover:cursor-pointer">
            <p>Explore Brex cards</p>
            <p className="group-hover:translate-x-2 duration-200">{'->'}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-44">
        <div className="w-full h-[500px] flex-1 relative">
          <Image
            className="absolute object-fill"
            fill
            src="/automation.webp"
            alt="card image error"
          />
        </div>
        <div className="space-y-7 flex-1">
          <h1 className="text-4xl font-bold">
            Control spend before it happens.
          </h1>
          <p className="text-[23px] text-gray-800">
            Set budgets and allocate spend limits with auto-enforced controls
            that empower employees to spend wisely. Track and adjust in real
            time to keep everyone on budget and maximize impact.
          </p>
          <div className="space-x-2 flex items-center text-lg font-semibold justify-start text-orange-500 hover:text-orange-600 group hover:cursor-pointer">
            <p>Explore Brex cards</p>
            <p className="group-hover:translate-x-2 duration-200">{'->'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
