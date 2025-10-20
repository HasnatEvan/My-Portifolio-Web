import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

import assets1 from '../../src/assets/assets1.png';
import assets2 from '../../src/assets/assets2.png';
import assets3 from '../../src/assets/assets3.png';
import assets4 from '../../src/assets/assets4.png';
import hotel1 from '../../src/assets/hotel1.png';
import hotel2 from '../../src/assets/hotel2.png';
import hotel3 from '../../src/assets/hotel3.png';
import hotel4 from '../../src/assets/hotel4.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const tabs = ['All', 'Project-1', 'Project-2'];

  const projects = [
    { image: assets1, title: 'Banner Section', category: 'Project-1', link: 'https://mange-mate-8df61.web.app' },
    { image: assets2, title: 'Admin Dashboard', category: 'Project-1', link: 'https://mange-mate-8df61.web.app' },
    { image: assets3, title: 'Package Section', category: 'Project-1', link: 'https://mange-mate-8df61.web.app' },
    { image: assets4, title: 'All Request Page', category: 'Project-1', link: 'https://mange-mate-8df61.web.app' },
    { image: hotel1, title: 'Landing Page', category: 'Project-2', link: 'https://hotelbookings-system-app.vercel.app' },
    { image: hotel2, title: 'Manage Booking Page', category: 'Project-2', link: 'https://hotelbookings-system-app.vercel.app' },
    { image: hotel3, title: 'Banner Section', category: 'Project-2', link: 'https://hotelbookings-system-app.vercel.app' },
    { image: hotel4, title: 'Booking Section', category: 'Project-2', link: 'https://hotelbookings-system-app.vercel.app' },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="w-full bg-[#0B0B0B] text-white px-6 md:px-16 lg:px-24 py-16 relative overflow-hidden"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="uppercase tracking-wide text-gray-400 font-semibold">
          My Works
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Featured <span className="text-[#C6FF00]">Projects</span>
        </h1>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center space-x-6 mb-10"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedCategory(tab)}
            className={`relative pb-2 text-lg font-semibold transition-colors duration-300 ${
              selectedCategory === tab
                ? 'text-[#C6FF00]'
                : 'text-gray-400 hover:text-[#C6FF00]'
            }`}
          >
            {tab}
            {selectedCategory === tab && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#C6FF00] rounded-full"></span>
            )}
          </button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-xl bg-[#1A1A1A] group break-inside-avoid"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm mt-1 text-gray-300">{project.category}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 bg-[#C6FF00] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#a3e000] transition"
              >
                View Details <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
