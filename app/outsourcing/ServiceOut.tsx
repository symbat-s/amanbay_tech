import ServiceInfoOut from '@/data/ServiceInfoOut.json';

export default function ServiceOut() {
  const {title , description , foto} = ServiceInfoOut[0]
  return (
    <div className="w-full mt-20 h-150 sm:h-200 md:h-280">
        <div className="w-full h-50 text-center  bg-[#404040] pt-10 text-semibold">
          <h1 className=" text-white text-3xl mt-5 md:mt-0 sm:mt-0  sm:text-4xl md:text-5xl lg:text-6xl ">Преимущества работы с <br /> Amanbay Tech</h1>
        </div>

        <div className="flex sm:p-15 md:p-25 mt-20 sm:mt-10">
          <img src={foto.src} alt={foto.alt} className="w-65 h-65  sm:w-100 sm:h-100 md:w-160 md:h-150 " />
            <div className="text-[#404040]">
              <div className="sd:mt-5 md:mt-5  sd:pr-0 md:pr-0">
                <h1 className="md:text-2xl sm:text-xl text-[10px] font-semibold ">{title.Title1}</h1>
                <p className="  font-light text-[8px] sm:text-[12px] md:text-xl">{description.description1}</p>
              </div>

              <div className="mt-7 sd:mt-24 md:mt-24 pr-10 sd:pr-0 md:pr-0">
                <h1 className="md:text-2xl sm:text-xl font-semibold  text-[10px]">{title.Title2}</h1>
                <p className="font-light   text-[8px] sm:text-[12px] md:text-xl">{description.description2}</p>
              </div>

              <div className="mt-4 sd:mt-15 md:mt-15 pr-10 sd:pr-0 md:pr-0">
                <h1 className="md:text-2xl sm:text-xl font-semibold  text-[10px]">{title.Title3}</h1>
                <p className="font-light  text-[8px] sm:text-[12px] md:text-xl">{description.description3}</p>
              </div>

              <div className="mt-2 sd:mt-18 md:mt-18 pr-10 sd:pr-0 md:pr-0">
                <h1 className="md:text-2xl sm:text-xl font-semibold text-[10px]">{title.Title4}</h1>
                <p className="font-light  text-[8px] sm:text-[12px] md:text-xl">{description.description4}</p>
              </div>
            </div>
        </div>
    </div>
  );
}
