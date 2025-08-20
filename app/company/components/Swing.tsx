"use client";

import React, { useState, useEffect } from 'react';

const Swing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    {
      id: 1,
      content: (
        <div className="w-full h-full  rounded-2xl flex items-center justify-center text-black text-2xl font-bold shadow-2xl">
          Современные программы обучения
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full h-full rounded-2xl  flex items-center justify-center text-black text-2xl font-bold shadow-2xl">
          Проектный подход
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full h-full  rounded-2xl flex items-center justify-center text-black text-2xl font-bold shadow-2xl">
          Менторская поддержка
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="w-full h-full  rounded-2xl flex items-center justify-center text-black text-2xl font-bold shadow-2xl">
          Онлайн и офлайн-формат
        </div>
      ),
    }
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
      
      <div className=" relative w-250 h-100 mx-auto overflow-hidden rounded-3xl border-2 shadow-2xl border-[#B8B8B8]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
              ? 'translate-x-0 opacity-100'  
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

export default Swing;