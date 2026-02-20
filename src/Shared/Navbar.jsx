import { useState, useRef } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../src/assets/logo.png";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import lightlogo from "../../src/assets/lightlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const { isDark, toggleTheme } = useTheme();
  const { t, isBangla, toggleLanguage } = useLanguage();
  const menuIds = ["#home", "#about", "#skills", "#what-i-do", "#projects", "#education", "#contact"];
  const menuNames = t("nav.links");

  // Smooth scroll function
  const handleLinkClick = (id) => {
    if (id === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const sendAppointment = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g2lfcj6", // তোমার service ID
        "template_qjnsnwp", // তোমার template ID
        formRef.current,
        "N2Gfn49dYvrjnYCRs" // তোমার public key
      )
      .then(
        () => {
          toast.success(t("nav.success"), {
            position: "top-center",
            autoClose: 3000,
          });
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error(`${t("nav.failed")} ${error.text}`, {
            position: "top-center",
            autoClose: 5000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <>
      {/* 🔹 Navbar */}
      <nav className="sticky top-0 w-full theme-nav flex items-center justify-between px-5 sm:px-10 md:px-16 lg:px-20 py-4 lg:py-6 z-[999] shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={isDark ? logo : lightlogo} alt="Noxfolio Logo" className="w-[60px] h-[60px] object-cover" />
        </div>

        {/* Center: Menu (Large Screen) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-[60px] text-[14px] sm:text-[16px] font-medium">
          {menuIds.map((id, idx) => (
              <li
                key={idx}
                className="accent-hover-text cursor-pointer transition-colors"
                onClick={() => handleLinkClick(id)}
              >
                {menuNames[idx]}
              </li>
            ))}
        </ul>

        {/* Right: Menu Icon */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="hidden lg:flex w-10 h-10 rounded-full items-center justify-center border theme-border text-xl cursor-pointer accent-hover-text transition-colors"
            aria-label={t("nav.toggleTheme")}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={toggleLanguage}
            className="hidden lg:flex px-3 h-10 rounded-full items-center justify-center border theme-border text-xs sm:text-sm cursor-pointer accent-hover-text transition-colors"
            aria-label={t("nav.toggleLanguage")}
          >
            {isBangla ? "EN" : "BN"}
          </button>
          <div
            onClick={() => setOpen(true)}
            className="accent-bg accent-on w-10 h-10 rounded-full flex items-center justify-center text-2xl cursor-pointer"
          >
            <FiMenu />
          </div>
        </div>
      </nav>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-[380px] theme-surface theme-text p-6 sm:p-8 shadow-2xl transform transition-transform duration-500 ease-in-out z-[9999] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div
          onClick={() => setOpen(false)}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-3xl cursor-pointer"
        >
          <FiX />
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden mt-14 mb-6 p-3 rounded-xl theme-surface-strong border theme-border flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex-1 h-11 rounded-lg flex items-center justify-center border theme-border text-xl cursor-pointer accent-hover-text transition-colors"
            aria-label={t("nav.toggleTheme")}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={toggleLanguage}
            className="min-w-[72px] h-11 px-3 rounded-lg flex items-center justify-center border theme-border text-sm cursor-pointer accent-hover-text transition-colors font-semibold"
            aria-label={t("nav.toggleLanguage")}
          >
            {isBangla ? "EN" : "BN"}
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="flex flex-col items-center text-center text-[15px] font-medium mb-6 lg:hidden gap-3">
          {menuIds.map((id, index) => (
            <li
              key={index}
              className="w-full border theme-border py-2 rounded-md cursor-pointer accent-hover-bg hover:text-black transition-all duration-300"
              onClick={() => handleLinkClick(id)}
            >
              {menuNames[index]}
            </li>
          ))}
        </ul>

        {/* Appointment Form */}
        <h2 className="text-lg sm:text-xl font-semibold mb-5">{t("nav.getInTouch")}</h2>

        <form ref={formRef} onSubmit={sendAppointment} className="flex flex-col gap-3 sm:gap-4">
          <input
            type="text"
            name="name"
            placeholder={t("nav.name")}
            required
            className="bg-transparent border theme-border p-2.5 rounded-md outline-none theme-text text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder={t("nav.email")}
            required
            className="bg-transparent border theme-border p-2.5 rounded-md outline-none theme-text text-sm"
          />
          <textarea
            rows="3"
            name="message"
            placeholder={t("nav.message")}
            required
            className="bg-transparent border theme-border p-2.5 rounded-md outline-none theme-text text-sm"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`accent-bg accent-on font-semibold py-2.5 rounded-md accent-hover-bg-strong transition-all text-sm flex items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? t("nav.sending") : t("nav.submitNow")}
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <a
            href="https://wa.me/8801814197707"
            target="_blank"
            rel="noreferrer"
            className="theme-surface-strong w-9 h-9 flex items-center justify-center rounded-full accent-hover-bg hover:text-black transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61575431671174"
            target="_blank"
            rel="noreferrer"
            className="theme-surface-strong w-9 h-9 flex items-center justify-center rounded-full accent-hover-bg hover:text-black transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/HasnatEvan"
            target="_blank"
            rel="noreferrer"
            className="theme-surface-strong w-9 h-9 flex items-center justify-center rounded-full accent-hover-bg hover:text-black transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hasnat-evan-web68"
            target="_blank"
            rel="noreferrer"
            className="theme-surface-strong w-9 h-9 flex items-center justify-center rounded-full accent-hover-bg hover:text-black transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 theme-overlay transition-opacity duration-500 z-[9998]"
        ></div>
      )}

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
};

export default Navbar;
