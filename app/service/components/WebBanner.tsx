import React from "react";
import services from "@/data/Services.json";
export default function WebBanner () {
     const service1 = services[0]
    return(
        <div className="mt-[200px] flex text-[#505050] px-[100px] gap-[100px]">
            <img src="foto/graphic.png" alt="Web"  className="w-[600px] h-[500px] "  />
           <div className="w-[450px] h-[480px] ">
             <div className="text-4xl font-medium">{service1.title}</div>
             <p className="mt-[40px] text-[#505050]">{service1.description}</p>
             <ul className="list-disc ml-[20px] mt-[60px]">
                <li>{service1.services[0]}</li>
                <li className="mt-[20px]">{service1.services[1]}</li>
                <li className="mt-[20px]">{service1.services[2]}</li>
                <li className="mt-[20px]">{service1.services[3]}</li>
                <li className="mt-[20px]">{service1.services[4]}</li>
                <li className="mt-[20px]">{service1.services[5]}</li>
             </ul>
           </div>
        </div>
    )
}