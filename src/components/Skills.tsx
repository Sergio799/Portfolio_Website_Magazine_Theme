"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
import ScrollVelocity from "./ScrollVelocity";
import { useLanguage } from "@/context/LanguageContext";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiDocker,
  SiAmazonwebservices, SiVercel, SiGraphql, SiRedux, SiFirebase,
  SiJest, SiCypress, SiHtml5, SiCss3, SiExpress, SiFastapi,
  SiSupabase, SiVitest, SiPostman, SiOpenai, SiLangchain,
  SiGithubactions, SiGooglegemini, SiAnthropic, SiReactquery,
} from "react-icons/si";

export default function Skills() {
  const { t } = useLanguage();
  const techLogos = [
    { node: <SiPython />, title: "Python" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiReact />, title: "React.js" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiRedux />, title: "Redux" },
    { node: <SiReactquery />, title: "React Query" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiExpress />, title: "Express" },
    { node: <SiFastapi />, title: "FastAPI" },
    { node: <SiGraphql />, title: "GraphQL" },
    { node: <SiPostgresql />, title: "PostgreSQL" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiSupabase />, title: "Supabase" },
    { node: <SiFirebase />, title: "Firebase" },
    { node: <SiAmazonwebservices />, title: "AWS" },
    { node: <SiVercel />, title: "Vercel" },
    { node: <SiDocker />, title: "Docker" },
    { node: <SiGithubactions />, title: "CI/CD" },
    { node: <SiJest />, title: "Jest" },
    { node: <SiCypress />, title: "Cypress" },
    { node: <SiVitest />, title: "Vitest" },
    { node: <SiPostman />, title: "Postman" },
    { node: <SiOpenai />, title: "OpenAI" },
    { node: <SiAnthropic />, title: "Claude" },
    { node: <SiGooglegemini />, title: "Gemini" },
    { node: <SiLangchain />, title: "LangChain" },
  ];

  return (
    <section className="py-32 bg-black text-white overflow-hidden" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-sm tracking-[0.3em] text-gray-500">03</span>
          <div className="h-px bg-gray-700 flex-1" />
          <span className="text-sm tracking-[0.3em] text-gray-500">{t("skills.section")}</span>
        </motion.div>
      </div>

      {/* ScrollVelocity Headline */}
      <div className="mb-8">
        <ScrollVelocity
          texts={[`${t("skills.headline")} •`, `${t("skills.headline")} •`]}
          velocity={80}
          className="text-white"
          numCopies={4}
          scrollerClassName="text-5xl md:text-6xl lg:text-7xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-16 max-w-xl"
        >
          {t("skills.description")}
        </motion.p>
      </div>

      {/* Full Width Logo Loop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="py-12 border-y border-gray-800"
      >
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={40}
          gap={56}
          pauseOnHover
          fadeOut
          scaleOnHover
          ariaLabel="Technology stack logos"
        />
      </motion.div>
    </section>
  );
}
