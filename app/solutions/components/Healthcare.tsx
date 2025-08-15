import Solution from "@/data/Solution.json";
export default function Healthcare() {
    const {Heal , education, turism} = Solution[0];
    return(
        <div className="px-20 mt-10">
            <h1 className="text-4xl font-bold">{Heal[0]}</h1>
            <div className=" w-full h-[120px] shadow-md shadow-[#00000040]  mt-5 border-[1px] border-[#D9D9D9] rounded-2xl flex text-center items-center justify-between px-10   ">
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{Heal[1]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{Heal[2]}</div>
                 <div className="border-[1px] border-[#505050 rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{Heal[3]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{Heal[4]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{Heal[5]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{Heal[6]}</div>
            </div>
            <h1 className="text-4xl font-bold  mt-10">{education[0]}</h1>
            <div className=" w-full h-[120px] shadow-md shadow-[#00000040]  mt-5 border-[1px] border-[#D9D9D9] rounded-2xl flex text-center items-center gap-10 px-10   ">
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{education[1]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{education[2]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{education[3]}</div>
            </div>

            <h1 className="text-4xl font-bold mt-10">{turism[0]}</h1>
            <div className=" w-full h-[120px] shadow-md shadow-[#00000040]  mt-5 border-[1px] border-[#D9D9D9] rounded-2xl flex text-center items-center gap-10 px-10   ">
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{turism[1]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{turism[2]}</div>
                 <div className="border-[1px] border-[#505050] rounded-4xl hover:shadow-md hover:shadow-[#00000040] transition-transform duration-300 ease-out hover:scale-105 p-1 px-7">{turism[3]}</div>
            </div>
        </div>
    )
}   