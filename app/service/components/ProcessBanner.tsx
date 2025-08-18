import React from "react";
import services from "@/data/Services.json";

export default function ProcessBanner() {
  const service5 = services[4];
  return (
    <div className="mt-[120px] md:mt-[200px] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-[#505050] px-4 sm:px-6 md:px-[10%]">
      <img
        src="foto/graphic(2).png"
        alt="Web"
        className="w-full max-w-[700px] h-auto object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="w-full md:w-[450px] md:h-[480px] md:ml-[120px]">
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium">
          {service5.title}
        </div>
        <p className="mt-4 md:mt-[40px] text-[#505050] text-sm sm:text-base leading-relaxed">
          {service5.description}
        </p>
         <ul className="list-disc ml-[20px] mt-[60px]">
                  {service5.services.map((item: string, idx: number) => (
                    <li key={idx} className={idx > 0 ? "mt-[20px]" : ""}>
                      {item}
                    </li>
                  ))}
                </ul>
      </div>
    </div>
  );
}