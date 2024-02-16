import Image from 'next/image';

function Hero() {
  return (
    <div>
      <div className="flex items-center justify-end bg-black">
        <div className="w-[900px] h-[620px] relative">
          <Image
            className="absolute object-cover"
            alt="hero image error"
            src="/hero.png"
            fill
          />
        </div>
        <div className=" absolute top-20 left-20 max-w-lg">
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
      </div>
    </div>
  );
}

export default Hero;
