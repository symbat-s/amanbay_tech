import { useState } from "react";
import BannerTwoData from "@/data/BannerTwoData.json";
const BannerTwo: React.FC = () => {
   const index1 = BannerTwoData[0];
   const index2 = BannerTwoData[1];
   const index3 = BannerTwoData[2];
   const index4 = BannerTwoData[3];
  return (
    <div className=" w-full lg:mt-[200px] bg-[url(/foto/item.png)] bg-center bg-cover h-[1000px] py-2 srelative w-full flex justify-center md:pl-23">
      <div className="relative z-20 flex flex-col gap-[130px] right-[110px] " >
     
        <div className="relative flex items-start gap-4  transition-transform duration-300 ease-out hover:scale-105">
          
          <div className="bg-white border border-[#00000014] p-[20px] w-[490px] h-[210px] ">
            <h1 className="text-[#505050] md:text-[25px] text-sm font-medium">{index2.title}</h1>
            <p className="font-light text-[#505050] mt-[8px]">
              {index2.text}
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4 ml-[100px]  transition-transform duration-300 ease-out hover:scale-105">
         
          <div className="bg-white border border-[#00000014] p-[20px] w-[490px] h-[180px] transition-transform duration-500 ease-in-out">
            <h1 className="text-[#505050] text-[25px] font-medium">{index3.title}</h1>
            <p className="font-light text-[#505050] mt-[8px]">
             {index3.text}
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4  transition-transform duration-300 ease-out hover:scale-105">
          
          <div className="bg-white border border-[#00000014] p-[20px] w-[490px] h-[180px] transition-transform duration-500 ease-in-out">
            <h1 className="text-[#505050] text-[25px] font-medium">{index4.title}</h1>
            <p className="font-light text-[#505050] mt-[8px]">
              {index4.text}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 ml-[100px] w-[400px] mt-[255px]">
        <h2 className="text-[32px] font-medium text-[#505050]  mb-4">
         {index1.title}
        </h2>
        <p className="text-[#505050] font-light mb-2">
          {index1.description}
        </p>
  
      </div>
    </div>

  

  
  );
};

export default BannerTwo; 
