"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Masonry from "@/components/Masonry";
import { useLanguage } from "@/context/LanguageContext";

export default function Photography() {
  const { t } = useLanguage();
  
  const photos = [
    { id: "1", img: "/PH1.png", height: 600, title: "Photo 1", category: "Photography" },
    { id: "2", img: "/PH2.png", height: 550, title: "Photo 2", category: "Photography" },
    { id: "3", img: "/PH3.png", height: 650, title: "Photo 3", category: "Photography" },
    { id: "4", img: "/PH4.png", height: 580, title: "Photo 4", category: "Photography" },
    { id: "5", img: "/PH5.png", height: 620, title: "Photo 5", category: "Photography" },
    { id: "6", img: "/PH6.png", height: 570, title: "Photo 6", category: "Photography" },
    { id: "7", img: "/PH7.png", height: 640, title: "Photo 7", category: "Photography" },
    { id: "8", img: "/PH8.png", height: 590, title: "Photo 8", category: "Photography" },
    { id: "9", img: "/PH9.png", height: 610, title: "Photo 9", category: "Photography" },
    { id: "10", img: "/PH10.png", height: 560, title: "Photo 10", category: "Photography" },
    { id: "11", img: "/PH11.png", height: 630, title: "Photo 11", category: "Photography" },
    { id: "12", img: "/PH12.png", height: 585, title: "Photo 12", category: "Photography" },
    { id: "13", img: "/PH13.png", height: 605, title: "Photo 13", category: "Photography" },
    { id: "14", img: "/PH14.png", height: 575, title: "Photo 14", category: "Photography" },
    { id: "15", img: "/PH15.png", height: 615, title: "Photo 15", category: "Photography" },
    { id: "16", img: "/PH16.png", height: 595, title: "Photo 16", category: "Photography" },
    { id: "17", img: "/PH17.png", height: 625, title: "Photo 17", category: "Photography" },
    { id: "18", img: "/PH18.png", height: 565, title: "Photo 18", category: "Photography" },
    { id: "19", img: "/PH19.png", height: 635, title: "Photo 19", category: "Photography" },
    { id: "20", img: "/PH20.png", height: 600, title: "Photo 20", category: "Photography" },
    { id: "21", img: "/PH21.png", height: 580, title: "Photo 21", category: "Photography" },
    { id: "22", img: "/PH22.png", height: 610, title: "Photo 22", category: "Photography" },
    { id: "23", img: "/PH23.png", height: 590, title: "Photo 23", category: "Photography" },
    { id: "24", img: "/PH24.png", height: 605, title: "Photo 24", category: "Photography" },
    { id: "25", img: "/PH25.png", height: 615, title: "Photo 25", category: "Photography" },
    { id: "26", img: "/PH26.png", height: 595, title: "Photo 26", category: "Photography" },
    { id: "27", img: "/PH27.png", height: 620, title: "Photo 27", category: "Photography" },
    { id: "28", img: "/PH28.png", height: 585, title: "Photo 28", category: "Photography" },
    { id: "29", img: "/PH29.png", height: 610, title: "Photo 29", category: "Photography" },
    { id: "30", img: "/PH30.png", height: 600, title: "Photo 30", category: "Photography" },
    { id: "31", img: "/PH31.png", height: 625, title: "Photo 31", category: "Photography" },
    { id: "32", img: "/PH32.png", height: 590, title: "Photo 32", category: "Photography" },
    { id: "33", img: "/PH33.png", height: 615, title: "Photo 33", category: "Photography" },
    { id: "34", img: "/PH34.png", height: 300, title: "Photo 34", category: "Photography" },
    { id: "35", img: "/PH35.png", height: 600, title: "Photo 35", category: "Photography" },
    { id: "36", img: "/PH36.png", height: 610, title: "Photo 36", category: "Photography" },
    { id: "37", img: "/PH37.png", height: 595, title: "Photo 37", category: "Photography" },
    { id: "38", img: "/PH38.png", height: 620, title: "Photo 38", category: "Photography" },
    { id: "39", img: "/PH39.png", height: 605, title: "Photo 39", category: "Photography" },
    { id: "40", img: "/PH40.png", height: 590, title: "Photo 40", category: "Photography" },
    { id: "41", img: "/PH41.png", height: 615, title: "Photo 41", category: "Photography" },
    { id: "42", img: "/PH42.png", height: 600, title: "Photo 42", category: "Photography" },
    { id: "43", img: "/PH43.png", height: 610, title: "Photo 43", category: "Photography" },
    { id: "44", img: "/PH44.png", height: 595, title: "Photo 44", category: "Photography" },
    { id: "45", img: "/PH45.png", height: 620, title: "Photo 45", category: "Photography" },
    { id: "46", img: "/PH46.png", height: 605, title: "Photo 46", category: "Photography" },
    { id: "47", img: "/PH47.png", height: 590, title: "Photo 47", category: "Photography" },
    { id: "48", img: "/PH48.png", height: 615, title: "Photo 48", category: "Photography" },
    { id: "49", img: "/PH49.png", height: 600, title: "Photo 49", category: "Photography" },
    { id: "50", img: "/PH50.png", height: 610, title: "Photo 50", category: "Photography" },
    { id: "51", img: "/PH51.png", height: 595, title: "Photo 51", category: "Photography" },
    { id: "52", img: "/PH52.png", height: 620, title: "Photo 52", category: "Photography" },
    { id: "53", img: "/PH53.png", height: 605, title: "Photo 53", category: "Photography" },
    { id: "54", img: "/PH54.png", height: 590, title: "Photo 54", category: "Photography" },
    { id: "55", img: "/PH55.png", height: 615, title: "Photo 55", category: "Photography" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-widest text-gray-500 mb-4">{t("photography.gallery")}</p>
            <h1 className="text-5xl md:text-7xl font-bold">{t("photography.title")}</h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              {t("photography.description")}
            </p>
          </motion.div>

          {/* Masonry Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Masonry
              items={photos}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
