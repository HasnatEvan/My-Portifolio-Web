import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineProject, AiOutlineTeam, AiOutlineCode } from "react-icons/ai";
import { motion } from "framer-motion";
import image from "../../src/assets/image.jpg"; // Ensure this path is correct

const About = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setViewPortEntered(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 md:px-10 bg-white min-h-screen text-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center relative">
          <span className="text-gray-200 absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 text-5xl sm:text-6xl opacity-30">
            ABOUT
          </span>
          <span className="border-b-4 border-green-500 relative z-10">
            Know Me More
          </span>
        </h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Profile Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <img
              src={image}
              alt="Hasnat Evan"
              className="w-72 md:w-80 h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-shadow duration-300"
            />
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              I'm <span className="text-green-600">Hasnat Evan</span>, a MERN Stack Developer
            </h3>
            <p className="mb-4 text-justify">
              I build high-performance and scalable web applications using modern
              technologies. With a strong emphasis on clean code and excellent user
              experience, I specialize in full-stack development using MongoDB,
              Express.js, React, and Node.js.
            </p>
            <p className="mb-6 text-justify">
              I love solving problems, building useful features, and collaborating
              with teams to create digital products that make a difference.
            </p>

            <div className="space-y-3 text-base sm:text-lg">
              <p className="flex items-center gap-3">
                <FaUser className="text-green-600 text-xl" />
                <strong>Name:</strong> Hasnat Evan
              </p>
              <p className="flex items-center gap-3 flex-wrap">
                <HiOutlineMail className="text-green-600 text-xl" />
                <strong>Email:</strong>
                <a
                  href="mailto:hasnatevan59@gmail.com"
                  className="text-green-600 hover:underline break-all"
                >
                  hasnatevan59@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaCalendarAlt className="text-green-600 text-xl" />
                <strong>Age:</strong> 21
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <strong>From:</strong> Chittagong, Bangladesh
              </p>

              {/* Download Resume Button */}
              <a
                href="https://drive.google.com/file/d/1OrgD71rAg3f2RIXIuawM1pKSQYU9IS93/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-700 transition w-full sm:w-auto text-center"
                download
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col items-center gap-2">
            <AiOutlineTeam className="text-green-600 text-4xl sm:text-5xl" />
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-700">
              {viewPortEntered ? <CountUp end={1.5} decimals={1} duration={2} /> : "0.0"}+
            </h4>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaUser className="text-green-600 text-4xl sm:text-5xl" />
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-700">
              {viewPortEntered ? <CountUp end={50} duration={2} /> : "0"}+
            </h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AiOutlineProject className="text-green-600 text-4xl sm:text-5xl" />
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-700">
              {viewPortEntered ? <CountUp end={100} duration={2} /> : "0"}+
            </h4>
            <p className="text-gray-600">Projects Done</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AiOutlineCode className="text-green-600 text-4xl sm:text-5xl" />
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-700">
              {viewPortEntered ? <CountUp end={10} duration={2} /> : "0"}+
            </h4>
            <p className="text-gray-600">Tech Stack Mastery</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
