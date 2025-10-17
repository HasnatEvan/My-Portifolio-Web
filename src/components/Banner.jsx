import { useState, useEffect, useRef } from "react";
import image from "../../src/assets/HeroSectionImage.jpg";
import { FiArrowRight } from "react-icons/fi";

// NumberTicker Component
const NumberTicker = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    setCount(0);
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Typewriter Component
const Typewriter = ({ text, speed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 100);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, inView, text, speed]);

  return <span ref={ref}>{displayText}<span className="animate-pulse">|</span></span>;
};

// Banner Component
const Banner = () => {
  return (
    <section className="bg-[#0B0B0B] text-white w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 gap-10 relative overflow-hidden">

      {/* Left Section */}
      <div className="flex-1 max-w-full lg:max-w-[600px] text-center lg:text-left flex flex-col gap-8">
        <div>
          <p className="text-gray-400 text-lg sm:text-xl mb-2">Hello, I’m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug mb-3">
            <span className="text-[#C6FF00]">Hasnat Evan</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <Typewriter text="MERN Stack Developer" />
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            Crafting modern, responsive MERN stack web apps with seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-6">
            <button className="bg-[#C6FF00] text-[#111111] px-6 sm:px-8 py-2 sm:py-3 rounded-[12px] font-semibold flex items-center gap-2 hover:bg-[#d4ff33] transition">
              Hire Me <FiArrowRight />
            </button>
            <button className="text-gray-300 hover:text-[#C6FF00] underline flex items-center gap-2 mt-2 lg:mt-4">
              Download Resume <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Stats Card - Mobile */}
        <div className="bg-[#0F0F0F] rounded-2xl p-6 sm:p-8 w-full flex flex-row justify-between gap-4 sm:gap-6 text-left shadow-lg z-20 lg:hidden">
          <div className="flex flex-col items-center">
            <h3 className="text-[#C6FF00] text-3xl sm:text-4xl font-bold">
              <NumberTicker target={2} suffix="+" />
            </h3>
            <p className="text-gray-400 text-[13px] sm:text-[15px] text-center">Years Of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#C6FF00] text-3xl sm:text-4xl font-bold">
              <NumberTicker target={10} suffix="+" />
            </h3>
            <p className="text-gray-400 text-[13px] sm:text-[15px] text-center">Project Complete</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#C6FF00] text-3xl sm:text-4xl font-bold">
              <NumberTicker target={99} suffix="%+" />
            </h3>
            <p className="text-gray-400 text-[13px] sm:text-[15px] text-center">Client Satisfactions</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-10 lg:mt-0 lg:pl-20 relative">
        <div className="relative flex justify-center lg:justify-end items-center w-full">
          <div className="absolute inset-0 hidden lg:flex justify-center lg:justify-end items-center">
            <div className="bg-[#C6FF00] w-[260px] sm:w-[360px] md:w-[500px] h-[260px] sm:h-[360px] md:h-[500px] rounded-full lg:translate-x-16"></div>
          </div>
          <img
            src={image}
            alt="Hero"
            className="relative w-[240px] sm:w-[340px] md:w-[480px] h-[240px] sm:h-[340px] md:h-[480px] object-cover rounded-full z-10 lg:translate-x-16"
          />
        </div>

        {/* Stats Card - Desktop */}
        <div className="hidden lg:flex bg-[#0F0F0F] rounded-2xl p-6 sm:p-8 w-[220px] sm:w-[240px] flex-col gap-4 sm:gap-6 text-left shadow-lg z-20">
          <div>
            <h3 className="text-[#C6FF00] text-3xl sm:text-4xl font-bold">
              <NumberTicker target={2} suffix="+" />
            </h3>
            <p className="text-gray-400 text-[13px] sm:text-[15px] border-b border-gray-700 pb-3 sm:pb-4">Years Of Experience</p>
          </div>
          <div>
            <h3 className="text-[#C6FF00] text-3xl sm:text-4xl font-bold">
              <NumberTicker target={10} suffix="+" />
            </h3>
            <p className="text-gray-400 text-[13px] sm:text-[15px] border-b border-gray-700 pb-3 sm:pb-4">Project Complete</p>
          </div>
          <div>
            <h3 className="text-[#C6FF00] text-3xl sm:text-4xl font-bold">
              <NumberTicker target={99} suffix="%+" />
            </h3>
            <p className="text-gray-400 text-[13px] sm:text-[15px]">Client Satisfactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
