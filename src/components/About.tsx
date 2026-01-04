"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import DecryptedText from "./DecryptedText";
import { useLanguage } from "@/context/LanguageContext";

// Animated Counter Component
function AnimatedCounter({ value, decimals = 1, suffix = "", duration = 2 }: { value: number; decimals?: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(springValue, (val) => val.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
}

export default function About() {
  const { t, language } = useLanguage();
  
  // Non-Latin scripts don't work well with DecryptedText animation
  const isNonLatinScript = ['te', 'zh', 'ja'].includes(language);
  
  return (
    <section id="about-me" className="py-24 px-6 bg-white" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-sm tracking-[0.3em] text-gray-400">01</span>
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm tracking-[0.3em] text-gray-400">{t("about.section")}</span>
        </motion.div>

        {/* Headline with DecryptedText */}
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12"
        >
          {isNonLatinScript ? (
            <>
              <span className="text-black">{t("about.headline1")}</span>
              <br />
              <span className="text-black">{t("about.headline2")}</span>
              <br />
              <span className="text-black">{t("about.headline3")}</span>
            </>
          ) : (
            <>
              <DecryptedText
                text={t("about.headline1")}
                animateOn="view"
                speed={50}
                maxIterations={15}
                revealDirection="start"
                sequential
                className="text-black"
                encryptedClassName="text-gray-400"
              />
              <br />
              <DecryptedText
                text={t("about.headline2")}
                animateOn="view"
                speed={50}
                maxIterations={15}
                revealDirection="start"
                sequential
                className="text-black"
                encryptedClassName="text-gray-400"
              />
              <br />
              <DecryptedText
                text={t("about.headline3")}
                animateOn="view"
                speed={50}
                maxIterations={15}
                revealDirection="start"
                sequential
                className="text-black"
                encryptedClassName="text-gray-400"
              />
            </>
          )}
        </motion.h2>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed"
          >
            {t("about.desc1")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed"
          >
            {t("about.desc2")}
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 py-8 border-y border-gray-200"
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold">
              <AnimatedCounter value={2.8} decimals={1} suffix="+" duration={2} />
            </p>
            <p className="text-xs tracking-[0.2em] text-gray-500 mt-2">{t("about.years")}</p>
          </div>
          <div className="text-center border-x border-gray-200">
            <p className="text-4xl md:text-5xl font-bold">
              <AnimatedCounter value={3.8} decimals={1} suffix="" duration={2} />
            </p>
            <p className="text-xs tracking-[0.2em] text-gray-500 mt-2">{t("about.gpa")}</p>
          </div>
          <div className="text-center">
            <motion.p 
              className="text-4xl md:text-5xl font-bold"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              MS
            </motion.p>
            <p className="text-xs tracking-[0.2em] text-gray-500 mt-2">{t("about.degree")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
