import Image from 'next/image';

type Props = {
  title: string;
  content: string;
  image: string;
};

function CardTwo({ image, title, content }: Props) {
  return (
    <div className="space-y-5 h-[420px] flex items-start flex-col justify-between">
      <div className="relative flex-1 w-full">
        <Image
          src={image}
          fill
          className="absolute rounded-xl object-cover"
          alt="cardTwo image error"
        />
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className=" text-gray-900 text-lg ">{content}</p>
      <div className="space-x-2 flex items-center text-lg font-semibold justify-center text-orange-500 group hover:cursor-pointer">
        <p>Learn more</p>
        <p className="group-hover:translate-x-2 duration-200">&rarr;</p>
      </div>
    </div>
  );
}

export default CardTwo;
