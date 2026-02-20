import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const services = t("about.services");

  return (
    <section
      id="about"
      className="w-full theme-page flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-24 gap-16 relative overflow-hidden"
    >
      <div className="flex-1 space-y-6 z-10">
        <p className="uppercase tracking-wide theme-muted font-semibold">{t("about.badge")}</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          {t("about.title1")} <span className="accent-text">{t("about.title2")}</span>
          <br />
          <span className="accent-text">{t("about.title3")}</span> {t("about.title4")}
        </h1>
        <p className="theme-muted max-w-lg">{t("about.summary")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          {services.map((item, index) => (
            <p key={index} className="flex items-center gap-2">
              <span className="accent-text text-xl">?</span> {item}
            </p>
          ))}
        </div>

        <button
          onClick={() => {
            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="accent-bg accent-on font-semibold py-3 px-6 rounded-md mt-4 accent-hover-bg-strong transition flex items-center gap-2"
        >
          {t("about.learnMore")} <FiArrowUpRight />
        </button>
      </div>

      <div className="flex-1 flex justify-center relative min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
        <div className="absolute w-64 sm:w-80 lg:w-[380px] h-64 sm:h-80 lg:h-[380px] theme-surface rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute w-36 sm:w-44 lg:w-[200px] h-36 sm:h-44 lg:h-[200px] accent-bg rounded-full flex flex-col items-center justify-center text-black font-bold text-2xl sm:text-3xl lg:text-4xl top-1/2 left-1/2 translate-x-[70px] -translate-y-1/2 z-10">
          <span>2+</span>
          <span className="text-xs sm:text-sm lg:text-lg font-semibold mt-1 leading-tight text-center">
            {t("about.yearsLabel")}
          </span>
        </div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 theme-surface-strong theme-text rounded-full py-2 px-4 flex items-center gap-2 shadow-lg border theme-border hover:scale-105 transition text-sm z-20">
          <div className="w-4 h-4 accent-bg rounded-md"></div>
          <p className="font-semibold text-xs sm:text-sm lg:text-base">{t("about.mernDev")}</p>
          <FiArrowUpRight className="text-sm" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-[120%] -translate-y-1/2 theme-surface-strong theme-text rounded-full py-2 px-4 flex items-center gap-2 shadow-lg border theme-border hover:scale-105 transition text-sm z-20">
          <img
            src="https://i.ibb.co.com/pvKz7SCS/Hero-Section-Image-BVk-IDw-X1.jpg"
            alt="profile"
            className="w-6 sm:w-8 h-6 sm:h-8 rounded-full"
          />
          <p className="font-semibold text-xs sm:text-sm lg:text-base">Hasnat Evan</p>
          <FiArrowUpRight className="text-sm" />
        </div>

        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 theme-surface-strong theme-text rounded-full py-2 px-4 flex items-center gap-2 shadow-lg border theme-border hover:scale-105 transition text-sm z-20">
          <div className="w-4 h-4 accent-bg rounded-md"></div>
          <p className="font-semibold text-xs sm:text-sm lg:text-base">{t("about.fullStack")}</p>
          <FiArrowUpRight className="text-sm" />
        </div>

        <div className="absolute top-8 right-10 w-6 h-6 accent-bg"></div>
        <div className="absolute top-14 right-12 w-2 h-2 accent-bg"></div>
        <div className="absolute bottom-8 right-12 w-6 h-6 accent-bg"></div>
        <div className="absolute bottom-4 right-10 w-2 h-2 accent-bg"></div>
      </div>
    </section>
  );
};

export default About;

