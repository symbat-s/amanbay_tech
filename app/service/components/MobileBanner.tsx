import services from "@/data/Services.json";
export default function MobileBanner() {
    const service2 =  services[1]
    return(
       <div className="mt-[200px] flex text-[#505050] px-[10%] gap-[100px]">
            <div className="w-[450px] h-[480px] ">
             <div className="text-4xl font-medium">{service2.title}</div>
             <p className="mt-[40px] text-[#505050]">{service2.description}</p>
             <ul className="list-disc ml-[20px] mt-[60px]">
                <li>{service2.services[0]}</li>
                <li className="mt-[20px]">{service2.services[1]}</li>
                <li className="mt-[20px]">{service2.services[2]}</li>
                <li className="mt-[20px]">{service2.services[3]}</li>
                <li className="mt-[20px]">{service2.services[4]}</li>
             </ul>
           </div>
            <img src="foto/graphic(4).png" alt="Web"  className="w-[600px] h-[500px] "/>
        </div>
    )
}