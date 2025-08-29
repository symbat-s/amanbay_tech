import Link from "next/link"
import BannerOutTitle from '@/data/BannerOutTitle.json';

export default function BannerOut() {
  const { title } = BannerOutTitle[0];
  return (
    <div className="relative w-full h-screen overflow-hidden">
     <div >
      <img
        src="/foto/OfficeOut.jpg"
        alt="background"
        className="block absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>

     
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-2xl sm:text-4xl md:text-6xl text-white font-semibold max-w-4xl">
          {title[0]}
        </h1>
        <h2 className="mt-4 text-lg sm:text-2xl md:text-4xl text-white font-semibold max-w-3xl">
          {title[1]}
        </h2>

    
        <Link href="/service">
          <button className="mt-8 px-6 py-3 sm:px-10 sm:py-4 bg-black/40 rounded-3xl border border-white hover:bg-white/10 text-white hover:text-black text-sm sm:text-lg">
           {title[2]}
          </button>
        </Link>
      </div>
    </div>
  );
}
