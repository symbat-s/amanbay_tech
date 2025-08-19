import info from "@/data/InfoUs.json";
import about from "@/data/InfoWe.json";
import Image from 'next/image';

export default function InfoUs() {
  const infowe = about
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

              <div className="flex  gap-15 w-full h-70 mt-20 px-10 ">
                 <div className="p-4 w-65 h-25 border-[#FAFAFA]  transition-transform duration-300 ease-out shadow-lg shadow-[#00000040] hover:scale-105 border-[1px] rounded-2xl bg-[white] z-50">
                   <p>{about[0]}</p>
                 </div>
                 <div className="w-25 h-25 bg-[#CDCDCD] rounded-2xl rotate-25 ml-25 absolute mt-8 z-20"></div>

                 <div className="p-4 w-65 h-25 border-[#FAFAFA] transition-transform duration-300 ease-out shadow-lg shadow-[#00000040] hover:scale-105 border-[1px] rounded-2xl bg-[white] mt-20 z-50">
                   <p>{about[1]}</p>
                 </div>
                  <div className="w-25 h-25 bg-[#CDCDCD] rounded-2xl rotate-25 ml-95 absolute mt-8 z-20"></div> 


                 <div className="p-4 w-65 h-25 border-[#FAFAFA] transition-transform duration-300 ease-out shadow-lg shadow-[#00000040] hover:scale-105 border-[1px] rounded-2xl bg-[white] z-50">
                   <p>{about[2]}</p>
                 </div>
                 <div className="w-25 h-25 bg-[#CDCDCD] rounded-2xl rotate-20 ml-155 absolute mt-14 z-20"></div>

                 <div className="p-4 w-65 h-30 border-[#FAFAFA] transition-transform duration-300 ease-out  shadow-lg shadow-[#00000040] hover:scale-105 border-[1px] rounded-2xl bg-[white] mt-20 z-50">
                  <p>{about[3]}</p>
                 </div>
                 <div className="w-25 h-25 bg-[#CDCDCD] rounded-2xl rotate-70 ml-245 absolute mt-12 z-20"></div>


                 <div className="p-4 w-65 h-30 border-[#FAFAFA] shadow-lg transition-transform duration-300 ease-out shadow-[#00000040] hover:scale-105 border-[1px] bg-[white] rounded-2xl z-50">
                  <p>{about[4]}</p>
                 </div> 
                 <div className="w-25 h-25 bg-[#CDCDCD] rounded-2xl rotate-15 ml-320 absolute mt-11 z-20"></div>

              </div>
    </div>
  );
}