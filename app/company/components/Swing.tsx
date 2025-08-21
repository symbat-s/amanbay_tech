"use client";

import React, { useState, useEffect } from "react";

const SimpleSwing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      content: (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-black">
          <img
            src="foto/book.png"
            className="w-28 h-28 sm:w-40 sm:h-40"
            alt=""
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Современные программы обучения
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-3">
              Курсы и методики с цифровыми технологиями, <br className="hidden sm:block" />
              практическими проектами и гибкими форматами — <br className="hidden sm:block" />
              чтобы быстро готовить специалистов к работе в IT.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-black">
          <img
            src="/foto/ballot.png"
            className="w-28 h-28 sm:w-40 sm:h-40"
            alt=""
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Проектный подход
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-3">
              Обучение через выполнение реальных задач: <br className="hidden sm:block" />
              сайты, приложения и программы, <br className="hidden sm:block" />
              готовим к работе в IT.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-black">
          <img
            src="/foto/classlesson.png"
            className="w-28 h-28 sm:w-40 sm:h-40"
            alt=""
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Менторская поддержка
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-3">
              Опытный специалист направляет, <br className="hidden sm:block" />
              даёт советы, делится знаниями и <br className="hidden sm:block" />
              помогает быстрее развиваться.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-black">
          <img
            src="/foto/workspace.png"
            className="w-28 h-28 sm:w-40 sm:h-40"
            alt="tt"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Онлайн и офлайн-формат
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-3">
              Возможность учиться удаленно, <br className="hidden sm:block" />
              а также оффлайн.
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
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-black">
        Чем мы отличаемся?
      </h1>

      <div className="relative w-full max-w-5xl h-[250px] sm:h-[300px] md:h-[350px] mx-auto overflow-hidden rounded-3xl p-5 bg-gray-100 border-2 border-[#B8B8B8] shadow-2xl">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : index < currentIndex
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
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
