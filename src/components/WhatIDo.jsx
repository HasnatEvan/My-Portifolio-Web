import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaCogs, FaPaintBrush, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const iconList = [FaLaptopCode, FaDatabase, FaCogs, FaPaintBrush, FaGlobe];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhatIDo = () => {
  const { t } = useLanguage();
  const services = t("whatIDo.services");

  return (
    <section id="what-i-do" className="w-full theme-page py-20 px-4 md:px-16">
      <div className="text-center mb-16">
        <p className="uppercase theme-muted font-semibold tracking-widest">{t("whatIDo.badge")}</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">{t("whatIDo.title")}</h2>
        <p className="theme-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base">{t("whatIDo.summary")}</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {services.map((service, i) => {
          const Icon = iconList[i];
          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="theme-surface rounded-2xl border border-transparent accent-hover-border accent-hover-shadow transition-all duration-300 p-6 flex flex-col justify-between text-center w-full sm:w-[45%] lg:w-[30%] min-h-[300px] group"
            >
              <div className="flex flex-col items-center">
                <Icon className="w-12 h-12 accent-text mb-4 transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="theme-muted text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhatIDo;

