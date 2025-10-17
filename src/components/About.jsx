import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#0B0B0B] text-white flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-24 gap-16 relative overflow-hidden"
    >
      {/* Left Side */}
      <div className="flex-1 space-y-6 z-10">
        <p className="uppercase tracking-wide text-gray-400 font-semibold">
          About Me
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Professional <span className="text-[#C6FF00]">MERN Stack</span>
          <br />
          <span className="text-[#C6FF00]">Developer</span> & Problem Solver
        </h1>
        <p className="text-gray-400 max-w-lg">
          I am a passionate MERN Stack Developer skilled in building scalable
          web applications. I handle the entire development process from
          frontend to backend. I love working with modern UI, REST APIs, and
          databases.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <p className="flex items-center gap-2">
            <span className="text-[#C6FF00] text-xl">✔</span> Full Stack Development
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#C6FF00] text-xl">✔</span> REST API Integration
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#C6FF00] text-xl">✔</span> Authentication & Security
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#C6FF00] text-xl">✔</span> Responsive UI/UX Design
          </p>
        </div>

        <button className="bg-[#C6FF00] text-black font-semibold py-3 px-6 rounded-md mt-4 hover:bg-[#a3e000] transition flex items-center gap-2">
          Learn More <FiArrowUpRight />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center relative min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
        {/* Dark background circle */}
        <div className="absolute w-64 sm:w-80 lg:w-[380px] h-64 sm:h-80 lg:h-[380px] bg-[#1A1A1A] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Yellow experience circle */}
        <div className="absolute w-36 sm:w-44 lg:w-[200px] h-36 sm:h-44 lg:h-[200px] bg-[#C6FF00] rounded-full flex flex-col items-center justify-center text-black font-bold text-2xl sm:text-3xl lg:text-4xl top-1/2 left-1/2 translate-x-[70px] -translate-y-1/2 z-10">
          <span>2+</span>
          <span className="text-xs sm:text-sm lg:text-lg font-semibold mt-1 leading-tight text-center">
            Years Of <br /> Experience
          </span>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full py-2 px-4 flex items-center gap-2 shadow-lg hover:scale-105 transition text-sm z-20">
          <div className="w-4 h-4 bg-[#C6FF00] rounded-md"></div>
          <p className="font-semibold text-xs sm:text-sm lg:text-base">MERN Stack Developer</p>
          <FiArrowUpRight className="text-sm" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-[120%] -translate-y-1/2 bg-white text-black rounded-full py-2 px-4 flex items-center gap-2 shadow-lg hover:scale-105 transition text-sm z-20">
          <img
            src="https://i.pravatar.cc/50"
            alt="profile"
            className="w-6 sm:w-8 h-6 sm:h-8 rounded-full"
          />
          <p className="font-semibold text-xs sm:text-sm lg:text-base">Hasnat Evan</p>
          <FiArrowUpRight className="text-sm" />
        </div>

        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-black rounded-full py-2 px-4 flex items-center gap-2 shadow-lg hover:scale-105 transition text-sm z-20">
          <div className="w-4 h-4 bg-[#C6FF00] rounded-md"></div>
          <p className="font-semibold text-xs sm:text-sm lg:text-base">Full Stack Engineer</p>
          <FiArrowUpRight className="text-sm" />
        </div>

        {/* Decorative squares */}
        <div className="absolute top-8 right-10 w-6 h-6 bg-[#C6FF00]"></div>
        <div className="absolute top-14 right-12 w-2 h-2 bg-[#C6FF00]"></div>
        <div className="absolute bottom-8 right-12 w-6 h-6 bg-[#C6FF00]"></div>
        <div className="absolute bottom-4 right-10 w-2 h-2 bg-[#C6FF00]"></div>
      </div>
    </section>
  );
};

export default About;
