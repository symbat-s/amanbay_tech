"use client";

import React, { useState, useEffect } from "react";

export default function DisappearingHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setActiveMenu(null); // Закрываем меню при скролле
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [lastScrollY]);

  function throttle(func: () => void, limit: number) {
    let inThrottle: boolean;
    return function() {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  const menuItems = {
    Projects: ['Web Development', 'Mobile Apps', 'AI Solutions'],
    Services: ['Consulting', 'Development', 'Maintenance'],
    Solutions: ['Cloud', 'DevOps', 'Security'],
    Company: ['About Us', 'Team', 'Careers', 'Contact']
  };

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm z-50 py-3 transition-transform duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Логотип с уменьшенным отступом */}
        <div className="flex items-center group mr-8"> {/* Добавлен mr-8 для уменьшения расстояния */}
          <img 
            src="/Logo.png" 
            alt="Amanbay Tech Logo" 
            className="h-15 transition-transform duration-300 group-hover:scale-105" 
          />
        </div>

        {/* Навигация с выпадающими меню */}
        <nav className="hidden md:flex space-x-25"> {/* Уменьшено space-x-6 до space-x-8 */}
          {Object.entries(menuItems).map(([key, items]) => (
            <div key={key} className="relative">
              <button 
                onClick={() => toggleMenu(key)}
                className="text-white/60 hover:text-[#d9011c] text-3xl font-medium transition-colors duration-300 flex items-center" /* Увеличен шрифт до text-xl */
              >
                {key}
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${activeMenu === key ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Выпадающее меню */}
              {activeMenu === key && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 rounded-md shadow-xl py-2 z-50 backdrop-blur-sm border border-gray-700">
                  {items.map((item) => (
                    <a 
                      key={item}
                      href="#"
                      className="block px-4 py-3 text-white/90 hover:text-[#d9011c] hover:bg-gray-800/50 transition-colors duration-200 text-lg" /* Увеличен шрифт до text-lg */
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Мобильное меню */}
        <button className="md:hidden text-white/90">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}