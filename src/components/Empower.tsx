import Image from 'next/image';
import React from 'react';

function Empower() {
  return (
    <div className="min-h-[90vh] pt-10 bg-gray-50">
      <div className=" max-w-4xl mx-auto my-14 text-center space-y-3">
        <h1 className="font-bold text-[53px] leading-[1.3]">
          Empower everyone to spend with confidence.
        </h1>
        <p className="font-semibold text-[18px] text-gray-800">
          As a finance leader, you love control. But most company spend happens
          outside your team. So how do you empower everyone — everywhere — to
          spend wisely? Top companies are doing just that with Brex.
        </p>
      </div>
      <div className="text-center space-y-7">
        <Image
          src="/logos1.webp"
          width={1000}
          height={70}
          className="mx-auto"
          alt="error logos image"
        />
        <Image
          src="/logos2.webp"
          width={1000}
          height={70}
          className="mx-auto"
          alt="error logos image"
        />
      </div>
    </div>
  );
}

export default Empower;
