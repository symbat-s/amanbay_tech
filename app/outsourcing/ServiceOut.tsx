export default function ServiceOut() {
  return (
    <div className="relative w-full min-h-screen mt-10 overflow-hidden">
   
      <div className="absolute md:bg-[url(/foto/ServiceOut.jpg)] sm:bg-none bg-cover ml-50 w-140 h-150 z-0"></div>


      <h1 className="absolute hidden md:block text-6xl z-10 font-semibold ml-200 mt-2">
        Почему именно мы?
      </h1>
    
      <h1 className="block md:hidden text-3xl sm:text-4xl z-10 font-semibold text-center text-white mb-8">
        Почему именно мы?
      </h1>

    
      <div className="hidden md:block">
        <div className="flex gap-10 w-150 h-25 absolute ml-165 mt-25 bg-[#adadad] text-center text-3xl p-5 z-10">
          <h1 className="text-6xl">01</h1>
          <h1 className="mt-2">Быстрая, качественная работа</h1>
        </div>

        <div className="flex gap-10 w-150 h-25 absolute ml-165 mt-62 bg-[#adadad] text-center text-4xl p-5 z-10">
          <h1 className="text-6xl">02</h1>
          <h1 className="mt-2">Большая команда</h1>
        </div>

        <div className="flex gap-10 w-150 h-25 absolute ml-165 mt-100 bg-[#adadad] text-center text-4xl p-5 z-10">
          <h1 className="text-6xl">03</h1>
          <h1 className="mt-2">Опытные сотрудники</h1>
        </div>
      </div>

     
      <div className="flex flex-col items-center gap-6 px-4 md:hidden relative z-10">
        <div className="flex items-center gap-4 bg-[#adadad]/90 p-4 rounded-xl w-full text-lg">
          <h1 className="text-3xl font-bold">01</h1>
          <p>Быстрая, качественная работа</p>
        </div>

        <div className="flex items-center gap-4 bg-[#adadad]/90 p-4 rounded-xl w-full text-lg">
          <h1 className="text-3xl font-bold">02</h1>
          <p>Большая команда</p>
        </div>

        <div className="flex items-center gap-4 bg-[#adadad]/90 p-4 rounded-xl w-full text-lg">
          <h1 className="text-3xl font-bold">03</h1>
          <p>Опытные сотрудники</p>
        </div>
      </div>
    </div>
  );
}
