"use client";

import { motion } from "framer-motion";
import Shuffle from "./Shuffle";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t, language } = useLanguage();
  
  // Only use Shuffle animation for Latin-based languages
  const useShuffleAnimation = ["en", "es", "fr", "de"].includes(language);
  
  const getExperiences = () => [
    {
      company: t("experience.jobs.sportsExcitement.company"),
      role: t("experience.jobs.sportsExcitement.role"),
      location: t("experience.jobs.sportsExcitement.location"),
      period: t("experience.jobs.sportsExcitement.period"),
      points: [
        { text: t("experience.jobs.sportsExcitement.points.0"), starred: true },
        { text: t("experience.jobs.sportsExcitement.points.1"), starred: false },
        { text: t("experience.jobs.sportsExcitement.points.2"), starred: false },
        { text: t("experience.jobs.sportsExcitement.points.3"), starred: false },
        { text: t("experience.jobs.sportsExcitement.points.4"), starred: false },
        { text: t("experience.jobs.sportsExcitement.points.5"), starred: false },
      ],
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Supabase", "Docker", "Cloudflare", "Zustand", "Mapbox", "Google OAuth"],
      isCommunity: false,
      isStartup: true,
    },
    {
      company: t("experience.jobs.accenture.company"),
      role: t("experience.jobs.accenture.role"),
      location: t("experience.jobs.accenture.location"),
      period: t("experience.jobs.accenture.period"),
      points: [
        { text: t("experience.jobs.accenture.points.0"), starred: false },
        { text: t("experience.jobs.accenture.points.1"), starred: false },
        { text: t("experience.jobs.accenture.points.2"), starred: false },
        { text: t("experience.jobs.accenture.points.3"), starred: false },
        { text: t("experience.jobs.accenture.points.4"), starred: false },
      ],
      technologies: ["JavaScript", "React.js", "Redux", "HTML5", "CSS3", "Bootstrap", "Node.js", "Express", "MySQL", "AWS", "EC2", "Lambda", "S3", "CloudWatch", "Webpack", "Jest", "Postman", "Razorpay"],
      isCommunity: false,
      isStartup: false,
    },
    {
      company: t("experience.jobs.unccLogic.company"),
      role: t("experience.jobs.unccLogic.role"),
      location: t("experience.jobs.unccLogic.location"),
      period: t("experience.jobs.unccLogic.period"),
      points: [
        { text: t("experience.jobs.unccLogic.points.0"), starred: false },
        { text: t("experience.jobs.unccLogic.points.1"), starred: false },
        { text: t("experience.jobs.unccLogic.points.2"), starred: false },
      ],
      technologies: ["Data Structures", "Algorithms", "OOP", "Code Review", "Mentoring"],
      isCommunity: false,
      isStartup: false,
    },
    {
      company: t("experience.jobs.unccSoftware.company"),
      role: t("experience.jobs.unccSoftware.role"),
      location: t("experience.jobs.unccSoftware.location"),
      period: t("experience.jobs.unccSoftware.period"),
      points: [
        { text: t("experience.jobs.unccSoftware.points.0"), starred: false },
        { text: t("experience.jobs.unccSoftware.points.1"), starred: false },
        { text: t("experience.jobs.unccSoftware.points.2"), starred: false },
      ],
      technologies: ["Full-Stack Development", "Code Review", "Debugging", "Mentoring", "Testing"],
      isCommunity: false,
      isStartup: false,
    },
    {
      company: t("experience.jobs.gdg.company"),
      role: t("experience.jobs.gdg.role"),
      location: t("experience.jobs.gdg.location"),
      period: t("experience.jobs.gdg.period"),
      points: [
        { text: t("experience.jobs.gdg.points.0"), starred: true },
        { text: t("experience.jobs.gdg.points.1"), starred: false },
        { text: t("experience.jobs.gdg.points.2"), starred: false },
      ],
      technologies: ["Cloud Computing", "Web Development", "Machine Learning", "Google Tools", "Community"],
      isCommunity: true,
      isStartup: false,
    },
  ];

  const experiences = getExperiences();

  return (
    <section className="py-32 px-6 bg-gray-50" aria-labelledby="experience-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-sm tracking-[0.3em] text-gray-400">02</span>
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm tracking-[0.3em] text-gray-400">{t("experience.section")}</span>
        </motion.div>

        {/* Editorial Headline with Shuffle */}
        <h2
          id="experience-heading"
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-20"
        >
          {useShuffleAnimation ? (
            <>
              <Shuffle
                text={t("experience.headline1")}
                duration={0.8}
                stagger={0.04}
                shuffleTimes={4}
                triggerOnce={true}
                triggerOnHover={true}
              />
              <br />
              <Shuffle
                text={t("experience.headline2")}
                duration={0.8}
                stagger={0.04}
                shuffleTimes={4}
                triggerOnce={true}
                triggerOnHover={true}
              />
            </>
          ) : (
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {t("experience.headline1")}<br />{t("experience.headline2")}
            </motion.span>
          )}
        </h2>

        {/* Experience Items */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="py-12 border-t border-gray-300 group"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                {/* Left - Company Info */}
                <div>
                  <span className="text-6xl font-bold text-gray-200 group-hover:text-black transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-bold mt-4">{exp.company}</h3>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {exp.isStartup && (
                      <span className="text-[10px] tracking-wider px-2 py-0.5 bg-green-500 text-white">{t("experience.startup")}</span>
                    )}
                    {exp.isCommunity && (
                      <span className="text-[10px] tracking-wider px-2 py-0.5 bg-blue-500 text-white">{t("experience.community")}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2">{exp.role}</p>
                  <p className="text-sm text-gray-400 mt-2">{exp.location}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>

                {/* Right - Description */}
                <div>
                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                        <span className={`mt-1.5 ${point.starred ? 'text-yellow-500' : 'text-gray-400'}`}>
                          {point.starred ? '★' : '•'}
                        </span>
                        <span className={point.starred ? 'font-medium' : ''}>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs tracking-[0.2em] text-gray-400 mb-3">{t("experience.technologies")}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs tracking-wider px-3 py-1 bg-white border border-gray-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
