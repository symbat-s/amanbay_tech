import React from "react";
import services from "@/data/Services.json";
export default function ProcessBanner () {
     const service5 = services[4]
    return(
        <div className="mt-[200px] flex text-[#505050] px-[10%]">
            <img src="foto/graphic(2).png" alt="Web"  className="w-[700px] h-[500px] "  />
           <div className="w-[450px] h-[480px] ml-[120px]">
             <div className="text-4xl font-medium">{service5.title}</div>
             <p className="mt-[40px] text-[#505050]">{service5.description}</p>
             <ul className="list-disc ml-[20px] mt-[60px]">
                <li>{service5.services[0]}</li>
                <li className="mt-[20px]">{service5.services[1]}</li>
                <li className="mt-[20px]">{service5.services[2]}</li>
                <li className="mt-[20px]">{service5.services[3]}</li>   
             </ul>
           </div>
        </div>
    )
}