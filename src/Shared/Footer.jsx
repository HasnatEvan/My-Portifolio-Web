import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../../src/assets/logo.png";

const Footer = () => {
  // 🔹 Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 🔹 Scroll to section function
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#111111] text-white pt-16 pb-10 px-5 sm:px-10 md:px-16 lg:px-20 max-w-[1600px] mx-auto ">

      {/* 🔹 Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-[#222] pb-10">

        {/* Left: Logo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3">
          <img
            src={logo}
            alt="Noxfolio Logo"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain mb-8"
          />
          <p className="text-gray-400 max-w-sm text-sm sm:text-[15px] leading-relaxed">
            A creative portfolio built to showcase your work, passion, and professional achievements — connecting ideas with impact.
          </p>
        </div>

        {/* Middle: Quick Links + Email Signup */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6 text-gray-300 text-[15px]">
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#service")}
            >
              Service
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#what-i-do")}
            >
              What I Do
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#education")}
            >
              Education
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#contact")}
            >
              Contact
            </li>
          </ul>

          {/* Email Input + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs mx-auto lg:mx-0">
            <div className="flex items-center border-b border-gray-500 pb-2 w-full">
              <FiMail className="text-[#C6FF00] mr-2 text-lg" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500 w-full"
              />
            </div>
            <button className="bg-[#C6FF00] text-[#111111] font-semibold px-6 py-2 rounded-lg hover:bg-[#d4ff33] transition w-auto shrink-0">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right: Address Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <ul className="space-y-4 text-gray-300 text-[15px]">
            <li className="flex items-start justify-center lg:justify-start gap-3">
              <FiMapPin className="text-[#C6FF00] text-lg mt-[2px]" />
              <span>Chittagong, Bangladesh</span>
            </li>

            {/* Email Click */}
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <FiMail className="text-[#C6FF00] text-lg" />
              <a
                href="mailto:hasnatevan59@gmail.com"
                className="hover:text-[#C6FF00] transition"
              >
                hasnatevan59@gmail.com
              </a>
            </li>

            {/* Phone Click */}
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <FiPhone className="text-[#C6FF00] text-lg" />
              <a
                href="tel:+8801814197707"
                className="hover:text-[#C6FF00] transition"
              >
                +8801814197707
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 relative gap-6">

        {/* Back to top button */}
        <div
          onClick={scrollToTop}
          className="absolute -top-6 right-5 lg:left-1/2 lg:-translate-x-1/2 bg-[#C6FF00] w-12 h-12 rounded-lg flex items-center justify-center text-[#111111] text-2xl cursor-pointer shadow-md hover:bg-[#d4ff33] transition"
        >
          <FiArrowUp />
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 sm:gap-6 order-1 lg:order-2">
          <a
            href="https://www.facebook.com/profile.php?id=61575431671174"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C6FF00] transition text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/8801814197707"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C6FF00] transition text-lg"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/hasnat-evan-web68"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C6FF00] transition text-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/HasnatEvan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C6FF00] transition text-lg"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-300 text-sm text-center order-2 lg:order-1">
          Copyright ©2025, <span className="text-[#C6FF00]">Hasnat Evan</span> — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
