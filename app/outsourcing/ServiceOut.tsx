
export default function ServiceOut (){
    return(
        <div className="w-full h-160 mt-50 ml-40 flex relative ">
           <div className="absolute bg-[url(/foto/ServiceOut.jpg)] bg-cover w-140 h-150 z-0"></div>
           
           <div>
                <h1 className="absolute text-6xl z-10 font-semibold ml-150">Почему именно мы?</h1>

                <div className="flex  gap-10 w-150 h-25 absolute ml-115 mt-25 bg-[#adadad] text-center text-3xl p-5 z-10">
                   <h1 className="text-6xl">01</h1>
                   <h1 className="mt-2">Быстрая,качественное работа</h1>
                </div>
                   
                <div className="flex  gap-10 w-150 h-25 absolute ml-115 mt-62 bg-[#adadad] text-center text-4xl p-5 z-10">
                   <h1 className="text-6xl">02</h1>
                   <h1 className="mt-2">Большая команда</h1>
                </div>

                <div className="flex  gap-10 w-150 h-25 absolute ml-115 mt-100 bg-[#adadad] text-center text-4xl p-5 z-10">
                    <h1 className="text-6xl">03</h1>
                    <h1 className="mt-2">Опытные сотрудники</h1>
                </div>

            </div>
        </div>
    )
}