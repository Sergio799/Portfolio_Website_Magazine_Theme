"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      number: "01",
      title: t("services.items.frontend.title"),
      description: t("services.items.frontend.description"),
    },
    {
      number: "02",
      title: t("services.items.fullstack.title"),
      description: t("services.items.fullstack.description"),
    },
    {
      number: "03",
      title: t("services.items.ai.title"),
      description: t("services.items.ai.description"),
    },
    {
      number: "04",
      title: t("services.items.cloud.title"),
      description: t("services.items.cloud.description"),
    },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white" aria-labelledby="services-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-sm tracking-[0.3em] text-gray-400">04</span>
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm tracking-[0.3em] text-gray-400">{t("services.section")}</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-20"
        >
          {t("services.headline1")}<br />
          {t("services.headline2")}
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 md:p-12 ${index % 2 === 0 ? 'md:border-r border-gray-200' : ''} ${index < 2 ? 'border-b border-gray-200' : ''} group hover:bg-gray-50 transition-colors`}
            >
              <span className="text-sm tracking-[0.3em] text-gray-400">{service.number}</span>
              <h3 className="text-2xl font-bold mt-4 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
