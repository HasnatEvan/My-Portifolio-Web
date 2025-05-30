import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContacting, setIsContacting] = useState(false);
  const timeoutRef = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleWhatsapp = () => {
    setIsContacting(true);
    scrollToBottom();
    setTimeout(() => {
      window.location.href = `https://wa.me/8801824481881`;
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true); // স্ক্রল করলেই দেখাবে

      // আগের timeout থাকলে clear করে দেবে
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // 2 সেকেন্ড যদি স্ক্রল না হয়, তাহলে hide করে দিবে
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 w-full flex justify-between items-center px-4 md:px-14 py-4 md:py-6 z-50">
        {/* WhatsApp Icon */}
        <div className="flex items-center space-x-3 transform transition-all duration-300">
          <div
            className="bg-green-600 text-white p-3 rounded-full shadow-xl cursor-pointer animate-bounce relative"
            onClick={handleWhatsapp}
          >
            <FaWhatsapp className="w-6 h-6" />
            {isContacting && (
              <span className="text-xs absolute bottom-0 right-0 bg-white text-green-600 rounded-full px-2 py-1">
                Contacting...
              </span>
            )}
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="bg-orange-600 text-white p-3 rounded-full shadow-xl hover:animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    )
  );
};

export default ContactIcon;
