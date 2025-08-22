"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Pages from '@/data/Pages.json';

const { Links } = Pages[0];

export default function DisappearingHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-sm z-50 py-3 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        
        <nav className="flex items-center group mr-8">
          <Link href={"/"}>
            <img 
              src="/Logo2.png" 
              alt="Amanbay Tech Logo" 
            />
          </Link>
        </nav>
      
<<<<<<< HEAD
        <div className="hidden md:flex text-black text-xl font-medium items-center space-x-16">
          <Link href="/portfolio">
=======
        <nav className="hidden md:flex text-black text-xl font-medium items-center space-x-16">
          <Link href={Links.link1}>
>>>>>>> 48a90055d98ea7529c3d61274043935e4b9f506a
            <button className="relative group px-2 py-1">
              Проект
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#505050] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </Link>
          <Link href={Links.link2}>
            <button className="relative group px-2 py-1">
              Услуги
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#505050] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </Link>
         <Link href={Links.link3}>
            <button className="relative group px-2 py-1">
              Компания
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#505050] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </Link>
          <Link href={Links.link4}>
            <button className="relative group px-2 py-1">
              Решения
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#505050] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </Link>
        </nav>

      
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 z-50">
            <div className="flex flex-col space-y-4">
              <Link href="/portfolio" className="text-black text-lg py-2">
                Проект
              </Link>
              <Link href="/services" className="text-black text-lg py-2">
                Услуги
              </Link>
              <Link href="/about" className="text-black text-lg py-2">
                Компания
              </Link>
              <Link href="/solutions" className="text-black text-lg py-2">
                Решения
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
