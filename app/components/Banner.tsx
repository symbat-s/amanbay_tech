import { Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/data/Banner.json';

export default function PeakBanner() {
  const { title, subtitle, button, images } = Banner[0];

  return (
    <div className="md:flex block ">
      <div className="md:ml-15 mt-20 p-5 md:mt-50 space-y-5">
        <h1 className="w-4/5 text-[#505050] font-medium  md:text-5xl">
          <div className="font-bold text-3xl md:text-6xl">{title.main}</div>
          <div className="font-light text-4xl">{title.highlight}</div>
        </h1>
        <p className="text-[#505050] text-lg md:text-xl">{subtitle}</p>
        <Link
          href={button.link}
          className="border border-[#505050] hover:text-white hover:bg-[#505050] text-sm md:text-lg text-[#505050] font-bold p-2 md:py-3 rounded-4xl"
        >
          {button.text}
        </Link>
      </div>
      <Image
        src={images.main.src}
        alt={images.main.alt}
        width={images.main.width}
        height={images.main.height}
        className="absolute hidden md:block inset-y-0 right-0"
      />
      <div className="md:mt-30 pt-10  pr-10">
        <Image
          src={images.secondary.src}
          alt={images.secondary.alt}
          width={images.secondary.width}
          height={images.secondary.height}
          className="object-contain relative"
        />
      </div>
    </div>
  );
}
