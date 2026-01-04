"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TextType from "./TextType";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  const skills = [
    "REACT.JS",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "FULL STACK",
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 px-6 relative overflow-hidden"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Main Title - Large and in front */}
        <div className="text-center relative z-30 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none"
          >
            <TextType
              text={[t("hero.explore"), t("hero.discover"), t("hero.view")]}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
              className="text-outline"
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none"
          >
            {t("hero.portfolio")}
          </motion.h1>
        </div>

        {/* Three Column Layout - Image behind title */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-16 mt-8 md:-mt-28 lg:-mt-36 relative">
          
          {/* Left Side - Hidden on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex flex-col justify-end z-20 pt-40 md:pt-52 pb-8"
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm md:text-base tracking-widest text-gray-700 font-medium">
                  {t("hero.role")}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {t("hero.location")}
                </p>
              </div>
              <motion.a
                href="#about-me"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 pointer-events-auto"
                aria-label="Scroll to about section"
              >
                <motion.svg
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative z-10 order-first md:order-none"
          >
            <a 
              href="/photography" 
              className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] md:w-[400px] md:h-[520px] lg:w-[450px] lg:h-[580px] xl:w-[500px] xl:h-[650px] group cursor-pointer"
            >
              <Image
                src="/P1.png"
                alt="Sai Prakash Reddy - Full Stack Developer - Click to view photography"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 500px"
              />
            </a>
          </motion.div>

          {/* Right Side - Hidden on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex flex-col justify-between z-20 pt-40 md:pt-36 pb-8"
          >
            {/* Top - Description */}
            <div className="text-right">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-widest">
                {t("hero.passion")}
              </p>
            </div>
            
            {/* Bottom - Skills List */}
            <nav className="space-y-3 text-right" aria-label="Skills">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  whileHover={{ x: -4 }}
                  className="text-sm md:text-base group cursor-default"
                >
                  <span className="text-gray-700 group-hover:text-black transition-colors duration-200 tracking-widest font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Mobile Info - Only visible on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:hidden text-center mt-8 space-y-4"
        >
          <p className="text-sm tracking-widest text-gray-700 font-medium">
            {t("hero.role")}
          </p>
          <p className="text-sm text-gray-500">{t("hero.location")}</p>
          <motion.a
            href="#about-me"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 mx-auto"
            aria-label="Scroll to about section"
          >
            <motion.svg
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
