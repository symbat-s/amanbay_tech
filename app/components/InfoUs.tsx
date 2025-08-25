import info from "@/data/InfoUs.json";
export default function InfoUs() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-4 md:gap-5 text-center">
        {info.InfoUs.map((item, index) => (
          <div className="border-r-1 border-[#C4C4C4] last:border-r-0" key={index}>
            <div className=" text-4xl font-bold text-black">{item.value}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 px-4">
                 <img src="/foto/info1.png" alt="info1"  className="w-65  h-40"/>
                  <img src="/foto/info2.png" alt="info2"  className="w-60 h-50"/>
                   <img src="/foto/info3.png" alt="info3"  className="w-60 h-50"/>
                    <img src="/foto/info4.png" alt="info4"  className="w-60 h-50"/>
                     <img src="/foto/info5.png" alt="info5"  className="w-60 h-50"/>                
              </div>
    </div>
  );
}