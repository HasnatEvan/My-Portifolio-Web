import { useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../src/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

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
        "service_0eu0xpb", // তোমার service ID
        "template_4ekxhh9", // তোমার template ID
        formRef.current,
        "N2Gfn49dYvrjnYCRs" // তোমার public key
      )
      .then(
        () => {
          toast.success("Appointment sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error(`Failed to send: ${error.text}`, {
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
      <nav className="sticky top-0 w-full bg-[#111111] text-white flex items-center justify-between px-5 sm:px-10 md:px-16 lg:px-20 py-4 lg:py-6 z-[999] shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Noxfolio Logo" className="w-[60px] h-[60px] object-cover" />
        </div>

        {/* Center: Menu (Large Screen) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-[60px] text-[14px] sm:text-[16px] font-medium">
          {["#home", "#about","#skills", "#what-i-do",  "#projects", "#education", "#contact"].map(
            (id, idx) => (
              <li
                key={idx}
                className="hover:text-[#C6FF00] cursor-pointer"
                onClick={() => handleLinkClick(id)}
              >
                {id.replace("#", "").replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </li>
            )
          )}
        </ul>

        {/* Right: Menu Icon */}
        <div
          onClick={() => setOpen(true)}
          className="bg-[#C6FF00] w-10 h-10 rounded-full flex items-center justify-center text-[#111111] text-2xl cursor-pointer"
        >
          <FiMenu />
        </div>
      </nav>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-[380px] bg-[#1A1A1A] text-white p-6 sm:p-8 shadow-2xl transform transition-transform duration-500 ease-in-out z-[9999] ${
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

        {/* Sidebar Menu */}
        <ul className="flex flex-col items-center text-center text-[15px] font-medium mt-10 mb-6 lg:hidden gap-3">
          {[
            { name: "Home", id: "#home" },
            { name: "About", id: "#about" },
            { name: "Skills", id: "#skills" },
            { name: "What I Do", id: "#what-i-do" },
            { name: "Projects", id: "#projects" },
            { name: "Education", id: "#education" },
            { name: "Contact", id: "#contact" },
          ].map((item, index) => (
            <li
              key={index}
              className="w-full border border-gray-700 py-2 rounded-md cursor-pointer hover:bg-[#C6FF00] hover:text-black transition-all duration-300"
              onClick={() => handleLinkClick(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Appointment Form */}
        <h2 className="text-lg sm:text-xl font-semibold mb-5">Get Appointment</h2>

        <form ref={formRef} onSubmit={sendAppointment} className="flex flex-col gap-3 sm:gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-transparent border border-gray-600 p-2.5 rounded-md outline-none text-gray-300 text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="bg-transparent border border-gray-600 p-2.5 rounded-md outline-none text-gray-300 text-sm"
          />
          <textarea
            rows="3"
            name="message"
            placeholder="Message"
            required
            className="bg-transparent border border-gray-600 p-2.5 rounded-md outline-none text-gray-300 text-sm"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#C6FF00] text-black font-semibold py-2.5 rounded-md hover:bg-lime-400 transition-all text-sm flex items-center justify-center gap-2 ${
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
            {loading ? "Sending..." : "Submit Now"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <a
            href="https://wa.me/8801814197707"
            target="_blank"
            rel="noreferrer"
            className="bg-black w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#C6FF00] hover:text-black transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61575431671174"
            target="_blank"
            rel="noreferrer"
            className="bg-black w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#C6FF00] hover:text-black transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/HasnatEvan"
            target="_blank"
            rel="noreferrer"
            className="bg-black w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#C6FF00] hover:text-black transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hasnat-evan-web68"
            target="_blank"
            rel="noreferrer"
            className="bg-black w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#C6FF00] hover:text-black transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-[9998]"
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
        theme="light"
      />
    </>
  );
};

export default Navbar;
