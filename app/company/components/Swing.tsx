"use client";

import React, { useState, useEffect } from 'react';

const SimpleSwing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    {
      id: 1,
      content: (
        <div className="w-full h-full  rounded-2xl flex gap-20 justify-center text-black text-3xl font-medium ">
          <img src="foto/book.png" className='w-50 h-50 mt-30' alt="" />
          <div>
            <h1 className='mt-20'>Современные программы обучения</h1>
          <p className='text-[20px] mt-10'>Kурсы и методики, которые используют цифровые <br /> технологии,
            практические проекты и гибкие форматы,<br /> чтобы быстро и эффективно готовить специалистов <br />
            к работе в сфере IT
            </p>
          </div>
          
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full h-full  rounded-2xl flex gap-20 mr-10 justify-center text-black text-3xl font-medium ">
          <img src="/foto/ballot.png" className='w-50 h-50 mt-30' alt="" />
          <div>
               <h1 className='mt-20'>Проектный подход</h1>
          <p className='text-[20px] mt-10'>
            обучение через выполнение реальных  задач: <br /> создание сайтов,  приложений и программ, <br /> что помогает готовиться к IT
          </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full h-full  rounded-2xl flex gap-20 justify-center text-black text-3xl font-medium ">
         <img src="/foto/classlesson.png" className='w-50 h-50 mt-30  ml-30' alt="" />
         <div>
          <h1 className='mt-20'>Менторская поддержка</h1>
         <p className='text-[20px] mt-10'>
          помощь опытного специалиста, который направляет,<br /> даёт советы, делится практическими знаниями и помогает быстрее развиваться в профессии.
         </p>
         </div>
      
        </div>
      ),
    },
     {
      id: 4,
      content: (
        <div className="w-full h-full  rounded-2xl flex gap-20 justify-center text-black text-3xl font-medium ">
         <img src="/foto/workspace.png" className='w-50 h-50 mt-30 ml-30' alt="tt" />
         <div className='mr-50'>
             <h1 className='mt-20'>Онлайн и офлайн-формат </h1>
             <p className='text-[20px] mt-10' >
              Возможности работать удаленно <br /> и так же оффлайн
             </p>
         </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div className="p-8 mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Чем мы отличаемся?
      </h1>
      
      <div className="relative w-250 h-110 mx-auto overflow-hidden rounded-3xl p-5 bg-gray-100 border-2 border-[#B8B8B8] shadow-2xl">
        
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'translate-x-0 opacity-100'      
                : index < currentIndex
                ? '-translate-x-full opacity-0'    
                : 'translate-x-full opacity-0'     
            }`}
          >
            {card.content}
          </div>
        ))}

      </div>
    </div>
  );
};

export default SimpleSwing;