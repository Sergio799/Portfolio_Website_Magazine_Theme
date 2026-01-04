"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language, languageNames, languageFlags } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ["en", "te", "es", "zh", "ja", "fr", "de"];

  // Hide hint after first interaction or after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
    setShowHint(false);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setShowHint(false);
  };

  return (
    <div className="relative flex items-center gap-2" ref={dropdownRef}>
      {/* Hint text */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="text-xs text-gray-500 hidden sm:block"
          >
            🌐 Languages
          </motion.span>
        )}
      </AnimatePresence>

      <button
        onClick={handleButtonClick}
        className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200 text-xs font-bold relative"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        {languageFlags[language]}
        {/* Pulsing dot indicator */}
        {showHint && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 bottom-12 lg:bottom-auto lg:top-12 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] overflow-hidden min-w-[140px]"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageSelect(lang)}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                  language === lang ? "bg-gray-100 font-medium" : ""
                }`}
              >
                <span className="w-6 text-center font-bold text-xs">{languageFlags[lang]}</span>
                <span>{languageNames[lang]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
