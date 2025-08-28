import ServiceInfoOut from '@/data/ServiceInfoOut.json';

export default function ServiceOut() {
  const {title , description , foto} = ServiceInfoOut[0]
  return (
    <div className="w-full mt-20 h-200">
        <div className="w-full h-50 text-center  bg-[#404040] pt-10 text-semibold">
          <h1 className="text-6xl text-white ">Преимущества работы с <br /> Amanbay Tech</h1>
        </div>

        <div className="flex ml-30 mt-10">
          <img src={foto.src} alt={foto.alt} className="w-160 h-150" />
            <div className="text-[#404040]">
              <div className="mt-5">
                <h1 className="text-2xl font-semibold ">{title.Title1}</h1>
                <p className="font-light">{description.description1}</p>
              </div>

              <div className="mt-24">
                <h1 className="text-2xl font-semibold ">{title.Title2}</h1>
                <p className="font-light">{description.description2}</p>
              </div>

              <div className="mt-18">
                <h1 className="text-2xl font-semibold ">{title.Title3}</h1>
                <p className="font-light">{description.description3}</p>
              </div>

              <div className="mt-17">
                <h1 className="text-2xl font-semibold ">{title.Title4}</h1>
                <p className="font-light">{description.description4}</p>
              </div>
            </div>
        </div>
    </div>
  );
}
