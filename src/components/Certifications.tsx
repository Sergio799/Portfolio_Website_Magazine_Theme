"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Certifications() {
  const { t } = useLanguage();
  
  const award = {
    title: t("certifications.awardItem.title"),
    event: t("certifications.awardItem.event"),
    issuer: t("certifications.awardItem.issuer"),
    date: t("certifications.awardItem.date"),
    description: t("certifications.awardItem.description"),
    link: "https://hawk-web-prototyping.vercel.app/",
  };

  const certifications = [
    { title: t("certifications.items.redis.title"), issuer: t("certifications.items.redis.issuer"), date: "Nov 2025", link: "https://cdn.flockjay.com/ta8oxxfpolwozu-certificates-14q8m6gilfwltm.pdf" },
    { title: t("certifications.items.graphql.title"), issuer: t("certifications.items.graphql.issuer"), date: "Nov 2025", link: "https://www.apollographql.com/tutorials/certifications/8dc930d2-5ef2-4c79-97f7-d996a13e0939" },
    { title: t("certifications.items.prompt.title"), issuer: t("certifications.items.prompt.issuer"), date: "Nov 2025", link: "https://www.datacamp.com/skill-verification/UPE0015874256653" },
    { title: t("certifications.items.openai.title"), issuer: t("certifications.items.openai.issuer"), date: "Nov 2025", link: "https://www.datacamp.com/skill-verification/WWOA0010429318930" },
    { title: t("certifications.items.oracle.title"), issuer: t("certifications.items.oracle.issuer"), date: "Oct 2025", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=270DD75B6F54A4C5CD899CBD69263090DFE8B0EA7C6EE62A6A4441B8B68638C5" },
  ];

  return (
    <section className="py-32 px-6 bg-white" aria-labelledby="certifications-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-sm tracking-[0.3em] text-gray-400">06</span>
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm tracking-[0.3em] text-gray-400">{t("certifications.section")}</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h2
          id="certifications-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-20"
          
        >
          {t("certifications.headline1")}<br />
          {t("certifications.headline2")}
        </motion.h2>

        {/* Award - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 p-8 md:p-12 bg-black text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs tracking-[0.3em] text-gray-400">{t("certifications.award")}</span>
            <span className="text-yellow-500">★★★</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-2" >
            {award.title}
          </h3>
          <p className="text-gray-400 mb-4">{award.event} · {award.date}</p>
          <p className="text-gray-300 leading-relaxed mb-6" >
            {award.description}
          </p>
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wider hover:underline"
          >
            {t("certifications.viewProject")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>

        {/* Certifications List */}
        <div className="space-y-0">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="py-6 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            >
              <div>
                <h4 className="font-medium">{cert.title}</h4>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-4">
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black hover:underline flex items-center gap-1"
                  >
                    {t("certifications.view")}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
                <p className="text-sm text-gray-400">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
