import React from "react";
import services from "@/data/Services.json";

export default function DevOpsBanner() {
  const service4 = services[3];
  return (
    <div className="mt-[120px] md:mt-[200px] flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12 text-[#505050] px-4 sm:px-6 md:px-[10%]">
      <div className="w-full md:w-[450px] md:h-[480px]">
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium">
          {service4.title}
        </div>
        <p className="mt-4 md:mt-[40px] text-[#505050] text-sm sm:text-base leading-relaxed">
          {service4.description}
        </p>
        <ul className="list-disc ml-5 md:ml-[20px] mt-6 md:mt-[60px] text-sm sm:text-base">
          <li>{service4.services[0]}</li>
          <li className="mt-2 sm:mt-3 md:mt-[20px]">{service4.services[1]}</li>
          <li className="mt-2 sm:mt-3 md:mt-[20px]">{service4.services[2]}</li>
          <li className="mt-2 sm:mt-3 md:mt-[20px]">{service4.services[3]}</li>
          <li className="mt-2 sm:mt-3 md:mt-[20px]">{service4.services[4]}</li>
        </ul>
      </div>

      <img
        src="foto/graphic(1).png"
        alt="Web"
        className="w-full max-w-[700px] h-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}