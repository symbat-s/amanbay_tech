import services from "@/data/Services.json";
export default function InfrastructureBanner() {
    const service4 =  services[3]
    return(
       <div className="mt-[200px] flex text-[#505050] px-[10%]">
            <div className="w-1/2 h-[480px]">
             <div className="text-4xl font-medium">{service4.title}</div>
             <p className="mt-[40px] text-[#505050]">{service4.description}</p>
             <ul className="list-disc ml-[20px] mt-[60px]">
                <li>{service4.services[0]}</li>
                <li className="mt-[20px]">{service4.services[1]}</li>
                <li className="mt-[20px]">{service4.services[2]}</li>
                <li className="mt-[20px]">{service4.services[3]}</li>
                <li className="mt-[20px]">{service4.services[4]}</li>
             </ul>
           </div>
            <img src="foto/graphic(1).png" alt="Web"  className="w-[700px] h-[500px]"/>
        </div>
    )
}