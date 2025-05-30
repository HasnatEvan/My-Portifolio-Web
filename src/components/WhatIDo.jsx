import { FaDesktop, FaPencilRuler, FaPalette, FaChartLine } from 'react-icons/fa';
import { MdVideoLibrary, MdStorage } from 'react-icons/md';
import { motion } from 'framer-motion';

const WhatIDo = () => {
  const services = [
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description:
        'Creating visual content to communicate messages through typography, imagery, and colors.',
    },
    {
      icon: <FaPencilRuler />,
      title: 'UI/UX Design',
      description:
        'Designing intuitive and engaging user interfaces and experiences for websites and apps.',
    },
    {
      icon: <MdVideoLibrary />,
      title: 'Video Editing',
      description:
        'Cutting, arranging, and enhancing video footage to create polished final videos.',
    },
    {
      icon: <MdStorage />,
      title: 'C-Panel Sell',
      description:
        'Providing control panel solutions for web hosting management and server administration.',
    },
    {
      icon: <FaDesktop />,
      title: 'Web Design',
      description:
        'Designing responsive and user-friendly websites with modern aesthetics and functionality.',
    },
    {
      icon: <FaChartLine />,
      title: 'Business Analysis',
      description:
        'Analyzing business processes to identify opportunities and improve efficiency.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="what-i-do" className="py-20 px-4 bg-gray-100 text-gray-700 overflow-x-hidden ">
      {/* Section Title */}
      <div className="relative text-center mb-14">
        <span className="text-gray-200 absolute inset-0 flex justify-center text-6xl font-bold opacity-30 -z-10 select-none">
          SERVICES
        </span>
        <h2 className="text-4xl font-bold inline-block border-b-4 border-green-500 relative z-10">
          What I Do?
        </h2>
      </div>

      {/* Services Grid */}
     {/* Services Grid */}
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {services.map((service, idx) => (
    <div key={idx} className="overflow-hidden rounded-lg">
      <motion.div
        className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left max-w-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: idx * 0.15 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-green-600 text-4xl flex items-center justify-center w-20 h-20 flex-shrink-0 rounded-full bg-green-50">
          {service.icon}
        </div>
        <div className="max-w-full md:max-w-[400px]">
          <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
        </div>
      </motion.div>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhatIDo;
