import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../../src/assets/logo.png";
import lightlogo from "../../src/assets/lightlogo.png";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full theme-nav theme-text pt-16 pb-10 px-5 sm:px-10 md:px-16 lg:px-20 max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-10 border-b theme-border pb-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3">
          <img
            src={isDark ? logo : lightlogo}
            alt="Noxfolio Logo"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain mb-8"
          />
          <p className="theme-muted max-w-sm text-sm sm:text-[15px] leading-relaxed">{t("footer.desc")}</p>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6 theme-muted text-[15px]">
            <li className="cursor-pointer accent-hover-text transition" onClick={() => scrollToSection("#about")}>
              {t("nav.links")[1]}
            </li>
            <li className="cursor-pointer accent-hover-text transition" onClick={() => scrollToSection("#what-i-do")}>
              {t("nav.links")[3]}
            </li>
            <li className="cursor-pointer accent-hover-text transition" onClick={() => scrollToSection("#projects")}>
              {t("nav.links")[4]}
            </li>
            <li className="cursor-pointer accent-hover-text transition" onClick={() => scrollToSection("#education")}>
              {t("nav.links")[5]}
            </li>
            <li className="cursor-pointer accent-hover-text transition" onClick={() => scrollToSection("#contact")}>
              {t("nav.links")[6]}
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs mx-auto lg:mx-0">
            <div className="flex items-center border-b theme-border pb-2 w-full">
              <FiMail className="accent-text mr-2 text-lg" />
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="bg-transparent outline-none text-sm theme-muted placeholder-gray-500 w-full"
              />
            </div>
            <button className="accent-bg accent-on font-semibold px-6 py-2 rounded-lg accent-hover-bg-strong transition w-auto shrink-0">
              {t("footer.signUp")}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">{t("footer.address")}</h3>
          <ul className="space-y-4 theme-muted text-[15px]">
            <li className="flex items-start justify-center lg:justify-start gap-3">
              <FiMapPin className="accent-text text-lg mt-[2px]" />
              <span>Chittagong, Bangladesh</span>
            </li>

            <li className="flex items-center justify-center lg:justify-start gap-3">
              <FiMail className="accent-text text-lg" />
              <a href="mailto:hasnatevan59@gmail.com" className="accent-hover-text transition">
                hasnatevan59@gmail.com
              </a>
            </li>

            <li className="flex items-center justify-center lg:justify-start gap-3">
              <FiPhone className="accent-text text-lg" />
              <a href="tel:+8801814197707" className="accent-hover-text transition">
                +8801814197707
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 relative gap-6">
        <div
          onClick={scrollToTop}
          className="absolute -top-6 right-5 lg:left-1/2 lg:-translate-x-1/2 accent-bg accent-on w-12 h-12 rounded-lg flex items-center justify-center text-2xl cursor-pointer shadow-md accent-hover-bg-strong transition"
        >
          <FiArrowUp />
        </div>

        <div className="flex gap-5 sm:gap-6 order-1 lg:order-2">
          <a href="https://www.facebook.com/profile.php?id=61575431671174" target="_blank" rel="noreferrer" className="accent-hover-text transition text-lg"><FaFacebookF /></a>
          <a href="https://wa.me/8801814197707" target="_blank" rel="noreferrer" className="accent-hover-text transition text-lg"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/hasnat-evan-web68" target="_blank" rel="noreferrer" className="accent-hover-text transition text-lg"><FaLinkedinIn /></a>
          <a href="https://github.com/HasnatEvan" target="_blank" rel="noreferrer" className="accent-hover-text transition text-lg"><FaGithub /></a>
        </div>

        <p className="theme-muted text-sm text-center order-2 lg:order-1">
          {t("footer.copyright")} <span className="accent-text">Hasnat Evan</span> - {t("footer.allRights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

