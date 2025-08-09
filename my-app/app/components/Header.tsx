"use client";

import React, { useState, useEffect } from "react";

export default function DisappearingHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
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
    Solutions: ['DevOps', 'Security'],
    Company: ['About Us', 'Contact']
  };

  return (
    <header className={`fixed top-0 left-0 w-full backdrop-blur-sm z-50 py-3 transition-transform duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center group mr-8">
          <img 
            src="/Logo2.jpg" 
            alt="Amanbay Tech Logo" 
            className="" 
          />
        </div>
        
        {/* Основные пункты меню */}
        <div className="text-black text-xl font-medium flex items-center ml-[380px]">
          <a href="http://localhost:3000/">
            <button className="relative group px-2 py-1">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#505050] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </a>
          <a href="#">
            <button className="ml-[80px] relative group px-2 py-1">
              Services
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#505050] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </a>
        </div>
        
        {/* Навигация с выпадающими меню */}
        <nav className="hidden md:flex space-x-20">
          {Object.entries(menuItems).map(([key, items]) => (
            <div key={key} className="relative group">
              <button 
                className="text-black text-xl font-medium flex items-center px-2 py-1 relative"
              >
                {key}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#505050] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                <svg 
                  className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Выпадающее меню */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 rounded-md shadow-xl py-2 z-50 backdrop-blur-sm border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {items.map((item) => (
                  <a 
                    key={item}
                    href="#"
                    className="block px-4 py-3 text-white/90 hover:text-white hover:bg-[#505050] transition-colors duration-200 text-lg"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Мобильное меню */}
        <button className="md:hidden text-black">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}