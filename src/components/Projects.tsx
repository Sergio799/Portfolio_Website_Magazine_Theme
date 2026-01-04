"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t("projects.items.samrai.title"),
      category: t("projects.items.samrai.category"),
      year: "2025",
      tech: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Zustand", "Google Gemini", "Clerk", "Yahoo Finance API", "Recharts", "Vercel"],
      description: t("projects.items.samrai.description"),
      points: [],
      link: "https://samr-ai.vercel.app/",
      github: "https://github.com/Sergio799/SamrAI",
      featured: true,
      hackathon: true,
      starred: true,
    },
    {
      title: t("projects.items.webCloner.title"),
      category: t("projects.items.webCloner.category"),
      year: "2025",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Claude AI", "Selenium", "aiohttp", "Python", "Postgres", "Supabase", "ShadCN", "Framer Motion"],
      description: t("projects.items.webCloner.description"),
      points: [],
      link: null,
      github: "https://github.com/Sergio799/web-Cloner",
      featured: true,
      hackathon: true,
      starred: true,
    },
    {
      title: t("projects.items.propertyPulse.title"),
      category: t("projects.items.propertyPulse.category"),
      year: "2024",
      tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Mongoose", "NextAuth.js", "Cloudinary", "Mapbox"],
      description: t("projects.items.propertyPulse.description"),
      points: [],
      link: null,
      github: "https://github.com/Sergio799/Property_Pulse",
      featured: false,
      hackathon: false,
      starred: false,
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-white" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-sm tracking-[0.3em] text-gray-400">05</span>
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm tracking-[0.3em] text-gray-400">{t("projects.section")}</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-20"
          
        >
          {t("projects.headline1")}<br />
          {t("projects.headline2")}
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="py-10 border-t border-gray-200 group"
            >
              <div className="grid md:grid-cols-[2fr_3fr_1fr] gap-6 items-start">
                {/* Title & Category */}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.starred && (
                      <span className="text-yellow-500">★</span>
                    )}
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-[10px] tracking-wider px-2 py-0.5 bg-black text-white">{t("projects.featured")}</span>
                    )}
                    {project.hackathon && (
                      <span className="text-[10px] tracking-wider px-2 py-0.5 bg-yellow-500 text-black">{t("projects.hackathon")}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                </div>

                {/* Description & Tech */}
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Bullet Points */}
                  {project.points && project.points.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Tech Stack */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs tracking-[0.15em] text-gray-400 mb-2">{t("projects.techStack")}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-gray-500 px-2 py-0.5 bg-gray-100 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year & Links */}
                <div className="text-right space-y-2">
                  <p className="text-sm text-gray-400">{project.year}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm hover:underline"
                    >
                      {t("projects.live")}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm hover:underline block"
                    >
                      GitHub
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-200 text-center"
        >
          <a
            href="https://github.com/Sergio799"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wider hover:underline"
          >
            {t("projects.viewAll")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
