import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  content: string;
  image: string;
};

function CardOne({ title, content, image }: Props) {
  return (
    <div className="  rounded-xl h-[350px] bg-gray-50 space-y-3 flex flex-col items-center justify-between hover:shadow-lg hover:cursor-pointer duration-500">
      <div className="flex-1 p-7">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className=" text-gray-900 text-lg ">{content}</p>
      </div>
      <div className="w-[220px] flex-[1.5] relative">
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

export default CardOne;
