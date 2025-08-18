import React from "react";
import services from "@/data/Services.json";

export default function DevOpsBanner() {
  const service3 = services[2];

  return (
    <div className="mt-[120px] md:mt-[200px] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-[#505050] px-4 sm:px-6 md:px-[10%]">
          <img
        src="foto/graphic(3).png"
        alt="Web"
        className="w-full max-w-[700px] h-auto object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="w-full md:w-[450px] md:h-[480px]">
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium">
          {service3.title}
        </div>

        <p className="mt-[40px]">{service3.description}</p>

        <ul className="list-disc ml-[20px] mt-[60px]">
          {service3.services.map((item: string, idx: number) => (
            <li key={idx} className={idx > 0 ? "mt-[20px]" : ""}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
