import { useState } from "react";
import BannerTwoData from "@/data/BannerTwoData.json";

const BannerTwo: React.FC = () => {
  const index1 = BannerTwoData[0];
  const index2 = BannerTwoData[1];
  const index3 = BannerTwoData[2];
  const index4 = BannerTwoData[3];

  return (
    <div className="w-full lg:mt-[200px] md:bg-[url(/foto/item.png)] bg-center bg-cover h-auto lg:h-[1000px] py-6 flex flex-col lg:flex-row lg:justify-center md:pl-23 relative">
      
      <div className="relative z-20 flex flex-col gap-6 sm:gap-8 lg:gap-[130px] sm:right-0 lg:right-[110px] px-4 sm:px-6">
        
        <div className="relative flex items-start gap-4 transition-transform duration-300 ease-out hover:scale-105">
          <div className="bg-white border border-[#00000014] p-4 sm:p-6 w-full sm:w-[350px] lg:w-[490px] h-auto lg:h-[210px]">
            <h1 className="text-[#505050] text-base sm:text-lg md:text-[25px] font-medium">
              {index2.title}
            </h1>
            <p className="font-light text-[#505050] mt-2 text-sm sm:text-base">
              {index2.text}
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4 sm:ml-0 lg:ml-[100px] transition-transform duration-300 ease-out hover:scale-105">
          <div className="bg-white border border-[#00000014] p-4 sm:p-6 w-full sm:w-[350px] lg:w-[490px] h-auto lg:h-[180px]">
            <h1 className="text-[#505050] text-base sm:text-lg md:text-[25px] font-medium">
              {index3.title}
            </h1>
            <p className="font-light text-[#505050] mt-2 text-sm sm:text-base">
              {index3.text}
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4 transition-transform duration-300 ease-out hover:scale-105">
          <div className="bg-white border border-[#00000014] p-4 sm:p-6 w-full sm:w-[350px] lg:w-[490px] h-auto lg:h-[180px]">
            <h1 className="text-[#505050] text-base sm:text-lg md:text-[25px] font-medium">
              {index4.title}
            </h1>
            <p className="font-light text-[#505050] mt-2 text-sm sm:text-base">
              {index4.text}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-8 sm:mt-10 lg:mt-[255px] px-4 sm:px-6 lg:ml-[100px] w-full sm:w-[400px]">
        <h2 className="text-xl sm:text-2xl md:text-[32px] font-medium text-[#505050] mb-4">
          {index1.title}
        </h2>
        <p className="text-[#505050] font-light text-sm sm:text-base">
          {index1.description}
        </p>
      </div>
    </div>
  );
};

export default BannerTwo;