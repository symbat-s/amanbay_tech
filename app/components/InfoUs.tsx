import info from "@/data/InfoUs.json";
import Image from 'next/image';

export default function InfoUs() {
  return (
    <div className="bg-white py-10">
       {/* <Image 
       src="/foto/infousvector.png"
       alt="laptop"
       width={1500}
       height={611}
       className='absolute hidden md:block md:ml-100'
       />  */}
      <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-4 md:gap-5 text-center">
        {info.InfoUs.map((item, index) => (
          <div className="border-r-1 border-[#C4C4C4] last:border-r-0" key={index}>
            <div className=" text-4xl font-bold text-black">{item.value}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}