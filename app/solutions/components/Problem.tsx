"use client";
import React, { useState } from "react";
import Solution from "@/data/Solution.json";

const Problem: React.FC = () => {
  const {
    VMI,
    TechnoLine,
    Amazon,
    OMS,
    Orken,
    AmazonLogo,
    VMILogo,
    OMSLogo,
    OrkenLogo,
    TechnoLineLogo,
  } = Solution[0];

  const slides = [
    {
      title: VMI[0],
      logo: VMILogo.src,
      logoWidth: VMILogo.width,
      logoHeight: VMILogo.height,
      problem: VMI[1],
      problem2: VMI[2],
      problem3: VMI[3],
      problem4: VMI[4],
      solution: VMI[5],
      solution1: VMI[6],
      solution2: VMI[7],
      bgColor: "bg-white",
    },
    {
      title: TechnoLine[0],
      logo: TechnoLineLogo.src,
      logoWidth: TechnoLineLogo.width,
      logoHeight: TechnoLineLogo.height,
      problem: TechnoLine[1],
      solution: TechnoLine[2],
      bgColor: "bg-white",
    },
    {
      title: Amazon[0],
      logo: AmazonLogo.src,
      logoWidth: AmazonLogo.width,
      logoHeight: AmazonLogo.height,
      problem: Amazon[1],
      problem2: Amazon[2],
      problem3: Amazon[3],
      solution: Amazon[4],
      bgColor: "bg-white",
    },
    {
      title: OMS[0],
      logo: OMSLogo.src,
      logoWidth: OMSLogo.width,
      logoHeight: OMSLogo.height,
      problem: OMS[1],
      solution: OMS[2],
      bgColor: "bg-white",
    },
    {
      title: Orken[0],
      logo: OrkenLogo.src,
      logoWidth: OrkenLogo.width,
      logoHeight: OrkenLogo.height,
      problem: Orken[1],
      solution: Orken[2],
      bgColor: "bg-white",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative px-4 sm:px-10 lg:px-40 pt-10 sm:pt-16 lg:pt-20 pb-10">

      <div
        className={`w-full p-4 sm:p-6 lg:p-10 rounded-2xl shadow-2xl border-[#D9D9D9] border-[1px] transition-transform duration-300 ease-out hover:scale-105 ${slides[current].bgColor}`}
      >
        <p className="font-bold text-lg sm:text-xl lg:text-2xl mb-5 flex items-center ">
          {slides[current].title}
          <img
            src={slides[current].logo}
            alt="logo"
            className="max-h-10 sm:max-h-12 ml-100 lg:max-h-14 object-contain"
          />
        </p>
        <p className="mb-4 text-sm sm:text-base leading-relaxed">
          <span className="font-bold">Проблема: <br /></span>
          <span className="text-gray-800">{slides[current].problem}</span>
          {slides[current].problem2 && (
            <>
              <br />
              <span className="text-gray-800">{slides[current].problem2}</span>
            </>
          )}
          {slides[current].problem3 && (
            <>
              <br />
              <span className="text-gray-800">{slides[current].problem3}</span>
            </>
          )}
          {slides[current].problem4 && (
            <>
              <br />
              <span className="text-gray-800">{slides[current].problem4}</span>
            </>
          )}
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          <span className="font-bold">Решение: <br /></span>
          <span className="text-gray-800">{slides[current].solution}</span>
          {slides[current].solution1 && (
            <>
              <br />
              <span className="text-gray-800">{slides[current].solution1}</span>
            </>
          )}
          {slides[current].solution2 && (
            <>
              <br />
              <span className="text-gray-800">{slides[current].solution2}</span>
            </>
          )}
        </p>
      </div>

      <div className="flex justify-center items-center gap-6 mt-6">
          <button onClick={prevSlide}>

      <img
      src="/foto/chevron.png"
      className="w-10  sm:w-14 lg:w-20"
      alt="стрелка влево"
      />
      </button>
      <button onClick={nextSlide}>
      <img
      src="/foto/chevron.png"
      className="w-10 sm:w-14 lg:w-20 rotate-180"
      alt="стрелка вправо"
      />
     </button>
      </div>
    </div>
  );
};
export default Problem;
