import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaCogs,
  FaPaintBrush,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Front-End Development",
    description:
      "Building responsive, interactive, and beautiful user interfaces using React.js, Next.js, HTML5, CSS3, and Tailwind CSS.",
  },
  {
    icon: FaDatabase,
    title: "Back-End Development",
    description:
      "Creating robust server-side applications with Node.js, Express.js, MongoDB, Firebase, and JWT authentication.",
  },
  {
    icon: FaCogs,
    title: "Other Skills",
    description:
      "Version control, API integration, deployment, performance optimization, and problem-solving for full-stack applications.",
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Design",
    description:
      "Designing visually appealing graphics, logos, and layouts for web and print media using modern tools.",
  },
  {
    icon: FaGlobe,
    title: "Web Design",
    description:
      "Creating modern, user-friendly, and responsive web designs focused on usability and aesthetics.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhatIDo = () => {
  return (
    <section
      id="what-i-do"
      className="w-full bg-[#0B0B0B] text-white py-20 px-4 md:px-16"
    >
      {/* === Section Title === */}
      <div className="text-center mb-16">
        <p className="uppercase text-gray-400 font-semibold tracking-widest">
          What I Do
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          My <span className="text-[#C6FF00]">Skills & Services</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          I specialize in creating modern web applications with clean code and
          best practices. I focus on both front-end and back-end development, as
          well as design, to deliver full-stack solutions.
        </p>
      </div>

      {/* === Cards Section === */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1A1A1A] rounded-2xl border border-transparent hover:border-[#C6FF00] hover:shadow-[0_0_25px_#C6FF00] transition-all duration-300 
              p-6 flex flex-col justify-between text-center w-full sm:w-[45%] lg:w-[30%] min-h-[300px] group"
            >
              <div className="flex flex-col items-center">
                <Icon className="w-12 h-12 text-[#C6FF00] mb-4 transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhatIDo;
