import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full bg-[#0B0B0B] text-white flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 gap-16 relative overflow-hidden"
    >
      {/* === Left Side (Text Content) === */}
      <motion.div
        className="flex-1 space-y-6 z-10 text-center lg:text-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p className="uppercase tracking-wide text-gray-400 font-semibold text-sm sm:text-base">
          Education
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          My <span className="text-[#C6FF00]">Educational</span> <br />
          <span className="text-[#C6FF00]">Journey</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
          My academic path has built a strong foundation in both traditional and technical education, shaping me into a skilled and confident web developer.
        </p>

        {/* === Education Timeline List === */}
        <div className="space-y-6">
          {[
            {
              title: "Secondary School Certificate (SSC)",
              school: "Bgc Academy School & College",
              subject: "Business Studies",
              year: "(SSC - 2021)",
              desc: "Completed Secondary School Certificate (SSC) with excellent results.",
            },
            {
              title: "Diploma in Engineering",
              school: "National Institute of Technology",
              subject: "Computer Science and Engineering (CSE)",
              year: "(2021 - 2025)",
              desc: "Currently pursuing a Diploma in Engineering focused on software and system design.",
            },
            {
              title: "Web Development Course",
              school: "Programming Hero",
              subject: "",
              year: "(2024)",
              desc: "Completed a full-stack web development course with hands-on project experience.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="border-l-4 border-[#C6FF00] pl-4 hover:translate-x-2 transition-transform duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: false }}
            >
              <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-400">{item.school}</p>
              {item.subject && (
                <p className="text-gray-400">Subject: {item.subject}</p>
              )}
              <p className="text-gray-400">{item.year}</p>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* === Resume Button === */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#C6FF00] text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md mt-4 hover:bg-[#a3e000] transition flex items-center justify-center gap-2 mx-auto lg:mx-0"
        >
          View Resume <FiArrowUpRight />
        </motion.button>
      </motion.div>

      {/* === Right Side (Animated Circle Design) === */}
      <motion.div
        className="flex-1 flex justify-center relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {/* Glow Circle */}
        <motion.div
          className="absolute w-64 sm:w-80 md:w-[380px] h-64 sm:h-80 md:h-[380px] rounded-full bg-[#C6FF00]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Center Rotating Circle */}
        <motion.div
          className="absolute w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#1A1A1A] rounded-full flex flex-col items-center justify-center text-center shadow-2xl border border-[#C6FF00]/30"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C6FF00]">
            2021–2025
          </p>
          <p className="text-gray-300 text-xs sm:text-sm mt-2">
            Active Academic Years
          </p>
        </motion.div>

        {/* Timeline Badges */}
        <motion.div
          className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 bg-[#C6FF00] text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          viewport={{ once: false }}
        >
          SSC - 2021
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-[65%] sm:right-1/2 sm:translate-x-[140px] -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          viewport={{ once: false }}
        >
          Diploma (CSE)
        </motion.div>

        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 sm:-translate-x-[100px] bg-[#C6FF00] text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
          viewport={{ once: false }}
        >
          Web Dev - 2024
        </motion.div>

        {/* Vertical Connection Line */}
        <div className="absolute w-[2px] h-[250px] sm:h-[300px] bg-gradient-to-b from-[#C6FF00] via-[#C6FF00]/40 to-transparent top-1/4 left-1/2 -translate-x-1/2"></div>
      </motion.div>
    </section>
  );
};

export default Education;
