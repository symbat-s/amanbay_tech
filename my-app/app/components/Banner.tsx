import { Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='md:flex block gap-15'>
     <div className="md:ml-15 mt-20 p-10 md:mt-50 space-y-5 ">
      <h1 className='w-2/3  text-[#505050] text-2xl md:text-5xl'><span className='font-bold text-3xl md:text-7xl'>Welcome to </span>Amanbay tech!</h1>  
      <p className='text-[#505050] text-lg md:text-xl'>Empowering Your Business with Web, Mobile & DevOps Solutions</p>
      <Link href="#contact" className='border border-[#505050] text-sm md:text-lg text-[#505050] font-bold p-2 md:py-3 md:px-5 rounded-4xl'>Our services</Link>
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
