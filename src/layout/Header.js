/** @format */

"use client";

import { useState, useEffect } from "react";
import { CrownIcon, MenuIcon, CloseIcon } from "@/assets/Svg";
import { navigationData, companyInfo } from "@/assets/Dummy";
import { smoothScrollTo } from "@/utils/smoothScroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "services", "about", "testimonials", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const elementId = href.replace("#", "");
    setActiveSection(elementId);
    smoothScrollTo(elementId, 80);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 lg:h-20'>
          {/* Logo */}
          <div className='flex items-center space-x-2 sm:space-x-3'>
            <div className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-wood-oak to-accent-gold rounded-lg sm:rounded-xl flex-shrink-0 shadow-md'>
              <CrownIcon className='w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white' />
            </div>
            <div className='flex flex-col justify-center min-h-[32px] sm:min-h-[40px] lg:min-h-[48px]'>
              <div className='text-sm sm:text-base lg:text-xl font-bold text-gradient leading-none tracking-tight'>
                Royal Friends
              </div>
              <div className='text-xs sm:text-sm lg:text-lg font-semibold text-gradient leading-none tracking-wide mt-0.5'>
                Furniture
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navigationData.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              const baseColor = isScrolled
                ? "text-gray-700 hover:text-wood-oak"
                : "text-white hover:text-white/80";
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-colors duration-200 relative group ${
                    isActive
                      ? isScrolled
                        ? "text-wood-oak"
                        : "text-white"
                      : baseColor
                  }`}>
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 ${
                      isScrolled ? "bg-wood-oak" : "bg-white/80"
                    } transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}>
            {isMenuOpen ? (
              <CloseIcon className='w-6 h-6' />
            ) : (
              <MenuIcon className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2'>
              {navigationData.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-wood-oak bg-wood-oak/10"
                        : "text-gray-700 hover:text-wood-oak hover:bg-gray-50"
                    }`}>
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
