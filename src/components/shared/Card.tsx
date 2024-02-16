import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  content: string;
  image: string;
};

function Card({ title, content, image }: Props) {
  return (
    <div className="p-7 pb-1  rounded-xl h-80 bg-gray-50 space-y-3 flex flex-col items-center justify-between hover:shadow-lg duration-500">
      <div className="flex-1">
        <h1 className="font-bold text-[19px]">{title}</h1>
        <p className="text-sm text-gray-700">{content}</p>
      </div>
      <div className="w-[207px] flex-[1.5] relative">
        <Image
          className="absolute object-cover"
          fill
          src={image}
          alt="card image error"
        />
      </div>
    </div>
  );
}

export default Card;
