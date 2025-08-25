"use client";
import React, { useState, useEffect, useRef } from "react";
import Solution from "@/data/Solution.json";

const Problem: React.FC = () => {
  const { VMI, TechnoLine, Amazon, OMS, Orken, AmazonLogo, VMILogo, OMSLogo, OrkenLogo, TechnoLineLogo } = Solution[0];

  const slides = [
    {
      title: VMI[0],
      logo: VMILogo.src,
      problem: VMI[1],
      problem2: VMI[2],
      problem3: VMI[3],
      problem4: VMI[4],
      solution: VMI[5],
      solution1: VMI[6],
      solution2: VMI[7],
    },
    {
      title: TechnoLine[0],
      logo: TechnoLineLogo.src,
      problem: TechnoLine[1],
      solution: TechnoLine[2],
    },
    {
      title: Amazon[0],
      logo: AmazonLogo.src,
      problem: Amazon[1],
      problem2: Amazon[2],
      problem3: Amazon[3],
      solution: Amazon[4],
    },
    {
      title: OMS[0],
      logo: OMSLogo.src,
      problem: OMS[1],
      solution: OMS[2],
    },
    {
      title: Orken[0],
      logo: OrkenLogo.src,
      problem: Orken[1],
      solution: Orken[2],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      setContainerHeight(activeRef.current.offsetHeight);
    }
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrent((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [current, isTransitioning, slides.length]);

  return (
    <div className="relative px-3 sm:px-8 lg:px-20 xl:px-40 pt-6 sm:pt-12 lg:pt-20 pb-10">
      {/* Контейнер с динамической высотой */}
      <div
        className="relative w-full mx-auto flex items-center justify-center transition-all duration-500"
        style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={index === current ? activeRef : null}
            className={`absolute w-11/12 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-[#D9D9D9] shadow-2xl bg-white transition-all duration-500 ease-in-out
              ${index === current
                ? "translate-x-0 opacity-100 z-10 scale-100" 
                : index < current
                ? "-translate-x-full opacity-0 scale-90 z-0" 
                : "translate-x-full opacity-0 scale-90 z-0"
              }`}
          >
            {/* Заголовок + лого */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-bold text-base sm:text-xl lg:text-2xl text-gray-800">
                {slide.title}
              </h2>
              <img
                src={slide.logo}
                alt="logo"
                className="max-h-8 sm:max-h-10 lg:max-h-14 object-contain ml-3"
              />
            </div>

            {/* Проблема */}
            <div className="mb-4 text-sm sm:text-base leading-relaxed">
              <span className="font-bold text-gray-700">Проблема: <br /></span>
              <span className="text-gray-600">{slide.problem}</span>
              {slide.problem2 && <><br /><span className="text-gray-600">{slide.problem2}</span></>}
              {slide.problem3 && <><br /><span className="text-gray-600">{slide.problem3}</span></>}
              {slide.problem4 && <><br /><span className="text-gray-600">{slide.problem4}</span></>}
            </div>

            {/* Решение */}
            <div className="text-sm sm:text-base leading-relaxed">
              <span className="font-bold text-gray-700">Решение: <br /></span>
              <span className="text-gray-600">{slide.solution}</span>
              {slide.solution1 && <><br /><span className="text-gray-600">{slide.solution1}</span></>}
              {slide.solution2 && <><br /><span className="text-gray-600">{slide.solution2}</span></>}
            </div>
          </div>
        ))}
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrent(index);
              setTimeout(() => setIsTransitioning(false), 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#908D8D] scale-125" : "bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Problem;
