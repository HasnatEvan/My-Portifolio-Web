import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_g2lfcj6", "template_dsvbutn", form.current, "N2Gfn49dYvrjnYCRs")
      .then(
        () => {
          toast.success(t("contact.success"), {
            position: "top-center",
            autoClose: 3000,
          });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error(`${t("contact.failed")} ${error.text}`, {
            position: "top-center",
            autoClose: 5000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full theme-page px-4 sm:px-8 md:px-12 lg:px-24 py-16 md:py-20 flex flex-col lg:flex-row justify-between gap-10 lg:gap-16"
    >
      <div className="flex-1 space-y-6">
        <p className="uppercase theme-muted font-semibold text-sm sm:text-base">{t("contact.badge")}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          {t("contact.title1")} <br />
          <span className="accent-text">{t("contact.title2")}</span>
        </h1>
        <p className="theme-muted max-w-md text-sm sm:text-base">{t("contact.summary")}</p>

        <div>
          <h3 className="font-semibold text-lg mb-3">{t("contact.address")}</h3>
          <ul className="space-y-3 theme-muted text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="accent-text mt-1 shrink-0" />
              <span>Chittagong, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="accent-text shrink-0" />
              <a href="mailto:info@hasnatevan.top" className="accent-hover-text transition">
                info@hasnatevan.top
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="accent-text shrink-0" />
              <a href="tel:+8801814197707" className="accent-hover-text transition">
                +8801814197707
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">{t("contact.follow")}</h3>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <a
              href="https://www.facebook.com/profile.php?id=61575431671174"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full accent-hover-bg transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/8801814197707"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full accent-hover-bg transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/hasnat-evan-web68"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full accent-hover-bg transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/HasnatEvan"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full accent-hover-bg transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 theme-surface p-6 sm:p-8 rounded-2xl shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">{t("contact.fullName")}</label>
              <input
                type="text"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                required
                className="w-full bg-transparent border theme-border rounded-md px-4 py-3 text-sm sm:text-base accent-focus-border outline-none placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">{t("contact.email")}</label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                required
                className="w-full bg-transparent border theme-border rounded-md px-4 py-3 text-sm sm:text-base accent-focus-border outline-none placeholder-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">{t("contact.phone")}</label>
              <input
                type="text"
                name="phone"
                placeholder={t("contact.phonePlaceholder")}
                className="w-full bg-transparent border theme-border rounded-md px-4 py-3 text-sm sm:text-base accent-focus-border outline-none placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">{t("contact.subject")}</label>
              <input
                type="text"
                name="subject"
                placeholder={t("contact.subjectPlaceholder")}
                className="w-full bg-transparent border theme-border rounded-md px-4 py-3 text-sm sm:text-base accent-focus-border outline-none placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">{t("contact.message")}</label>
            <textarea
              name="message"
              placeholder={t("contact.writeMessage")}
              rows="5"
              required
              className="w-full bg-transparent border theme-border rounded-md px-4 py-3 text-sm sm:text-base accent-focus-border outline-none placeholder-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`accent-bg accent-on font-semibold py-3 px-6 rounded-md accent-hover-bg-strong transition w-full sm:w-auto flex items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            )}
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </div>

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
    </section>
  );
};

export default Contact;

