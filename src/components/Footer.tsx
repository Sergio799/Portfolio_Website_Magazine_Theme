"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const contactInfo = [
    { label: t("footer.phone"), value: "704-965-4820", href: "tel:+17049654820" },
    { label: t("footer.email"), value: "saiprakash8080@gmail.com", href: "mailto:saiprakash8080@gmail.com" },
    { label: t("footer.linkedin"), value: "linkedin.com/in/saiprakash07", href: "https://linkedin.com/in/saiprakash07" },
    { label: t("footer.github"), value: "github.com/Sergio799", href: "https://github.com/Sergio799" },
  ];

  return (
    <footer className="bg-black text-white" role="contentinfo">
      {/* Magazine-style CTA */}
      <div className="max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-8">{t("footer.getInTouch")}</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
            {t("footer.headline1")}<br />
            {t("footer.headline2")}<br />
            {t("footer.headline3")}
          </h2>
          <motion.a
            href="mailto:saiprakash8080@gmail.com"
            whileHover={{ scale: 1.02 }}
            className="inline-block px-12 py-5 bg-white text-black text-sm tracking-wider hover:bg-gray-100 transition-colors"
          >
            {t("footer.sayHello")}
          </motion.a>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-800"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <p className="text-xs tracking-[0.2em] text-gray-500 mb-2">{item.label}</p>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
              SAI PRAKASH<span className="text-gray-500"> REDDY</span>.
            </Link>

            {/* Copyright */}
            <p className="text-sm text-gray-600">
              © {currentYear} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
