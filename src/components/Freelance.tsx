"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Freelance() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t("freelance.items.saiManjari.title"),
      description: t("freelance.items.saiManjari.description"),
      tech: [],
      link: "https://saimanjariguntur.vercel.app/",
    },
    {
      title: t("freelance.items.personal.title"),
      description: t("freelance.items.personal.description"),
      tech: [],
      link: "https://amruthaportfolio-mu.vercel.app/",
    },
  ];

  return (
    <section id="freelance" className="py-32 px-6 bg-gray-50" aria-labelledby="freelance-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-sm tracking-[0.3em] text-gray-400">07</span>
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm tracking-[0.3em] text-gray-400">{t("freelance.section")}</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h2
          id="freelance-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8"
          
        >
          {t("freelance.headline1")}<br />
          {t("freelance.headline2")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg mb-16 max-w-xl"
          
        >
          {t("freelance.description")}
        </motion.p>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block p-8 bg-white border border-gray-200 hover:border-black transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold"  >
                  {project.title}
                </h3>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs tracking-wider text-gray-500">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6">{t("freelance.needWebsite")}</p>
          <a
            href="mailto:saiprakash8080@gmail.com"
            className="inline-block px-8 py-4 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            {t("freelance.workTogether")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
