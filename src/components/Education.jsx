import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  const timeline = t("education.timeline");

  return (
    <section
      id="education"
      className="w-full theme-page flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 gap-16 relative overflow-hidden"
    >
      <motion.div
        className="flex-1 space-y-6 z-10 text-center lg:text-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p className="uppercase tracking-wide theme-muted font-semibold text-sm sm:text-base">{t("education.badge")}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          {t("education.title1")} <span className="accent-text">{t("education.title2")}</span> <br />
          <span className="accent-text">{t("education.title3")}</span>
        </h1>
        <p className="theme-muted max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">{t("education.summary")}</p>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="border-l-4 accent-border pl-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: false }}
            >
              <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
              <p className="theme-muted">{item.school}</p>
              {item.subject && <p className="theme-muted">Subject: {item.subject}</p>}
              <p className="theme-muted">{item.year}</p>
              <p className="mt-2 theme-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1gO1P2t4m518onlAECT5pWjI4kUK_XFro/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-bg accent-on font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md mt-4 accent-hover-bg-strong transition flex items-center justify-center gap-2 mx-auto lg:mx-0"
        >
          {t("education.resume")} <FiArrowUpRight />
        </motion.a>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.div
          className="absolute w-64 sm:w-80 md:w-[380px] h-64 sm:h-80 md:h-[380px] rounded-full accent-bg-soft blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 theme-surface rounded-full flex flex-col items-center justify-center text-center shadow-2xl border accent-border-soft"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold accent-text">2021-2025</p>
          <p className="theme-muted text-xs sm:text-sm mt-2">{t("education.activeYears")}</p>
        </motion.div>

        <motion.div
          className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 accent-bg accent-on px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          viewport={{ once: false }}
        >
          SSC - 2021
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-[65%] ml-20 sm:left-auto sm:right-1/2 -translate-x-1/2 sm:translate-x-[140px] -translate-y-1/2 theme-surface-strong theme-text px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md border theme-border whitespace-nowrap"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          viewport={{ once: false }}
        >
          {t("education.diploma")}
        </motion.div>

        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 sm:-translate-x-[100px] accent-bg accent-on px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
          viewport={{ once: false }}
        >
          Web Dev - 2024
        </motion.div>

        <div className="absolute w-[2px] h-[250px] sm:h-[300px] bg-gradient-to-b accent-gradient-line top-1/4 left-1/2 -translate-x-1/2"></div>
      </motion.div>
    </section>
  );
};

export default Education;

