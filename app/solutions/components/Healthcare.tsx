import Solution from "@/data/Solution.json";

export default function Healthcare() {
  const { Heal, education, turism } = Solution[0];

  return (
    <div className="px-4 sm:px-10 lg:px-20 mt-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{Heal[0]}</h1>
      <div className="w-full h-auto lg:h-[120px] shadow-md shadow-[#00000040] mt-5 border-[1px] border-[#D9D9D9] rounded-2xl flex flex-wrap lg:flex-nowrap text-center items-center justify-center lg:justify-between gap-3 sm:gap-5 lg:gap-0 px-4 sm:px-6 lg:px-10 py-4">
        {Heal.slice(1).map((item: string, index: number) => (
          <div
            key={index}
            className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 py-1 px-4 sm:px-6"
          >
            {item}
          </div>
        ))}
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-10">
        {education[0]}
      </h1>
      <div className="w-full h-auto lg:h-[120px] shadow-md shadow-[#00000040] mt-5 border-[1px] border-[#D9D9D9] rounded-2xl flex flex-wrap lg:flex-nowrap text-center items-center justify-center lg:justify-start gap-3 sm:gap-6 px-4 sm:px-6 lg:px-10 py-4">
        {education.slice(1).map((item: string, index: number) => (
          <div
            key={index}
            className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 py-1 px-4 sm:px-6"
          >
            {item}
          </div>
        ))}
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-10">
        {turism[0]}
      </h1>
      <div className="w-full h-auto lg:h-[120px] shadow-md shadow-[#00000040] mt-5 border-[1px] border-[#D9D9D9] rounded-2xl flex flex-wrap lg:flex-nowrap text-center items-center justify-center lg:justify-start gap-3 sm:gap-6 px-4 sm:px-6 lg:px-10 py-4">
        {turism.slice(1).map((item: string, index: number) => (
          <div
            key={index}
            className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 py-1 px-4 sm:px-6"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}