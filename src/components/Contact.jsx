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

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // spinner state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // spinner চালু

    emailjs
      .sendForm(
        "service_0eu0xpb",
        "template_4ekxhh9",
        form.current,
        "N2Gfn49dYvrjnYCRs"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          form.current.reset();
          setLoading(false); // spinner বন্ধ
        },
        (error) => {
          toast.error(`Message failed to send ❌: ${error.text}`, {
            position: "top-center",
            autoClose: 5000,
          });
          setLoading(false); // spinner বন্ধ
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0B0B0B] text-white px-4 sm:px-8 md:px-12 lg:px-24 py-16 md:py-20 flex flex-col lg:flex-row justify-between gap-10 lg:gap-16"
    >
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        <p className="uppercase text-gray-400 font-semibold text-sm sm:text-base">
          Get In Touch
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Let’s Talk For your <br />
          <span className="text-[#C6FF00]">Next Projects</span>
        </h1>
        <p className="text-gray-400 max-w-md text-sm sm:text-base">
          Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore
          veritatis.
        </p>

        <div>
          <h3 className="font-semibold text-lg mb-3">Address</h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#C6FF00] mt-1 shrink-0" />
              <span>Chittagong, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#C6FF00] shrink-0" />
              <a
                href="mailto:hasnatevan59@gmail.com"
                className="hover:text-[#C6FF00] transition"
              >
                hasnatevan59@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#C6FF00] shrink-0" />
              <a
                href="tel:+8801814197707"
                className="hover:text-[#C6FF00] transition"
              >
                +8801814197707
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Me</h3>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <a
              href="https://www.facebook.com/profile.php?id=61575431671174"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#C6FF00] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/8801814197707"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#C6FF00] transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/hasnat-evan-web68"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#C6FF00] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/HasnatEvan"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#C6FF00] transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1 bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Richard D. Hammond"
                required
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm sm:text-base focus:border-[#C6FF00] outline-none placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="support@gmail.com"
                required
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm sm:text-base focus:border-[#C6FF00] outline-none placeholder-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+880 (123) 456 88"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm sm:text-base focus:border-[#C6FF00] outline-none placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm sm:text-base focus:border-[#C6FF00] outline-none placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write message"
              rows="5"
              required
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm sm:text-base focus:border-[#C6FF00] outline-none placeholder-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading} // disable button when loading
            className={`bg-[#C6FF00] text-black font-semibold py-3 px-6 rounded-md hover:bg-[#a3e000] transition w-full sm:w-auto flex items-center justify-center gap-2 ${
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
            {loading ? "Sending..." : "Send Us Message →"}
          </button>
        </form>
      </div>

      {/* Toast Container */}
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
    </section>
  );
};

export default Contact;
