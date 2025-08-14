import React from "react";
import services from "@/data/Services.json";
export default function DevOpsBanner () {
     const service3 = services[2]
    return(
        <div className="mt-[200px] flex text-[#505050] px-[10%]">
            <img src="foto/graphic(3).png" alt="Web"  className="w-[700px] h-[500px]"  />
           <div className="w-[450px] h-[480px] ">
             <div className="text-4xl font-medium">{service3.title}</div>
             <p className="mt-[40px] text-[#505050]">{service3.description}</p>
             <ul className="list-disc ml-[20px] mt-[60px]">
                <li>{service3.services[0]}</li>
                <li className="mt-[20px]">{service3.services[1]}</li>
                <li className="mt-[20px]">{service3.services[2]}</li>
                <li className="mt-[20px]">{service3.services[3]}</li>
                <li className="mt-[20px]">{service3.services[4]}</li>
             </ul>
           </div>
        </div>
    )
}