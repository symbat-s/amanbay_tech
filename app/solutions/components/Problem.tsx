"use client";
import React, { useState } from 'react';
import Solution from "@/data/Solution.json";
const Problem: React.FC = () => {
const { VMI, TechnoLine, Amazon, OMS, Orken , AmazonLogo, VMILogo , OMSLogo , OrkenLogo , TechnoLineLogo} = Solution[0];
const slides = [
  {
    title: VMI[0],
    logo:VMILogo.src,
    logoWidth:VMILogo.width,
    logoHeight:VMILogo.height,
    problem: VMI[1],
    problem2: VMI[2],
    problem3: VMI[3],
    problem4: VMI[4],
    solution: VMI[5],
    solution1: VMI[6],
    solution2: VMI[7],
    bgColor: 'bg-white',
  },
  {
    title: TechnoLine[0],
    logo:TechnoLineLogo.src,
    logoWidth:TechnoLineLogo.width,
    logoHeight:TechnoLineLogo.height,
    problem: TechnoLine[1],
    solution: TechnoLine[2],
    bgColor: 'bg-white',
  },
  {
    title: Amazon[0],
    logo:AmazonLogo.src,
    logoWidth:AmazonLogo.width,
    logoHeight:AmazonLogo.height,
    problem: Amazon[1],
    problem2: Amazon[2],
    problem3: Amazon[3],
    solution: Amazon[4],
    bgColor: 'bg-white',
  },
  {
    title: OMS[0],
    logo: OMSLogo .src,
    logoWidth: OMSLogo .width,
    logoHeight: OMSLogo .height,
    problem: OMS[1],
    solution: OMS[2],
    bgColor: 'bg-white',
  },
  {
    title: Orken[0],
     logo:  OrkenLogo.src,
    logoWidth: OrkenLogo .width,
    logoHeight:  OrkenLogo .height,
    problem: Orken[1],
    solution: Orken[2],
    bgColor: 'bg-white',
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
    <div className="p-35">
      <div className={`w-full  p-10 rounded-2xl shadow-2xl border-[#D9D9D9] border-[1px] ${slides[current].bgColor}`}>
        <p className="font-bold text-2xl mb-5 gap-70 flex">{slides[current].title} <img src={slides[current].logo} alt="logo" width={slides[current].logoWidth} height={slides[current].logo}   /></p>
        <p className="mb-4 text-base leading-relaxed">
          <span className="font-bold">Проблема: </span>
          <span className="text-gray-800">{slides[current].problem}</span>
          {slides[current].problem2 && <><br /><span className="text-gray-800">{slides[current].problem2}</span></>}
          {slides[current].problem3 && <><br /><span className="text-gray-800">{slides[current].problem3}</span></>}
          {slides[current].problem4 && <><br /><span className="text-gray-800">{slides[current].problem4}</span></>}
        </p>
        <p className="text-base leading-relaxed">
          <span className="font-bold">Решение: </span>
          <span className="text-gray-800">{slides[current].solution}</span>
          {slides[current].solution1 && <><br /><span className="text-gray-800">{slides[current].solution1}</span></>}
          {slides[current].solution2 && <><br /><span className="text-gray-800">{slides[current].solution2}</span></>}
        </p>
      </div>
      <div className="flex justify-between mt-350 absolute top-1/2 left-5 right-5  ">
        <button
          onClick={prevSlide}
          className="text-4xl"
        >
          ← 
        </button>
        <button
          onClick={nextSlide}
          className="text-4xl"
        >
           →
        </button>
      </div>
    </div>
  );
};

export default Problem;