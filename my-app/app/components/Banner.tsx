import { Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='md:flex block gap-15'>
     <div className="md:ml-15 mt-20 p-10 md:mt-50 space-y-5 ">
      <h1 className='w-2/3  text-[#505050] text-2xl md:text-5xl'><span className='font-bold text-3xl md:text-7xl'>Welcome to </span>Amanbay tech!</h1>  
      <p className='text-[#505050] text-lg md:text-xl'>Empowering Your Business with Web, Mobile & DevOps Solutions</p>
      <Link href="#services" className='border border-[#505050] text-sm md:text-lg text-[#505050] font-bold p-2 md:py-3 md:px-5 rounded-4xl'>Our services</Link>
     <div className="flex gap-[225px] ">
        <div>
        <div className="w-[690px] h-[240px] mt-[200px] ml-[89px] text-bold text-8xl">
          <div className="text-[red]">Welcome to</div>
          <div>Amanbay Tech!</div> 
          </div>
        <div className="w-[705px] h-[144px] text-[35px] ml-[89px]">Empower Your Business for the Digital Age - Cutting-Edge Web, Mobile Development, and DevOps Solutions for Your Success!</div>
        <a href="https://amanbay.tech/en#explore"><button className="w-[250px] h-[65px] ml-[89px] bg-[#EA4D46] text-[white] text-center text-2xl rounded-[10px] mt-[70px]">Show services</button></a>
        </div>

        <div>
           <Image src="/image/PeakBanner.png" alt="Баннер" width={466} height={400} className="absolute mr-[50px]" />
        </div>
     </div>
     <Image 
      src="/foto/banner.png" 
      alt="laptop"
      width={970}
      height={650}
      className='absolute hidden md:block md:ml-100'/>
     <div className="md:mt-30 pt-10">
        <Image
          src="/foto/laptop.png"
          alt="laptop"
          width={550}
          height={550}
          className='object-contain relative'
        />
      </div>
    </div>
  );
}

