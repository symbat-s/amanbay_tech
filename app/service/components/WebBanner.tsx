import React from "react";
import services from "@/data/Services.json";

export default function WebBanner() {
  const service1 = services[0];

  return (
    <div className="mt-[200px] flex flex-col md:flex-row text-[#505050] px-[100px] gap-[100px]">

      <img
        src="foto/graphic.png"
        alt="Web"
        className="w-full max-w-[600px] h-auto object-contain"
      />

      <div className="max-w-[450px]">
        <div className="text-4xl font-medium">{service1.title}</div>
        <p className="mt-[40px]">{service1.description}</p>

        <ul className="list-disc ml-[20px] mt-[60px]">
          {service1.services.map((item: string, idx: number) => (
            <li key={idx} className={idx > 0 ? "mt-[20px]" : ""}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
