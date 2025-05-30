import { useState } from 'react';
import { motion } from 'framer-motion';
import assets1 from '../../src/assets/assets1.png';
import assets2 from '../../src/assets/assets2.png';
import assets3 from '../../src/assets/assets3.png';
import assets4 from '../../src/assets/assets4.png';
import hotel1 from '../../src/assets/hotel1.png';
import hotel2 from '../../src/assets/hotel2.png';
import hotel3 from '../../src/assets/hotel3.png';
import hotel4 from '../../src/assets/hotel4.png';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const tabs = ["All", "Project-1", "Project-2"];

    const projects = [
        { image: assets1, title: "Banner Section", category: "Project-1" },
        { image: assets2, title: "Admin Dashboard", category: "Project-1" },
        { image: assets3, title: "Package Section", category: "Project-1" },
        { image: assets4, title: "All Request Page", category: "Project-1" },
        { image: hotel1, title: "Landing Page", category: "Project-2" },
        { image: hotel2, title: "Manage Booking Page", category: "Project-2" },
        { image: hotel3, title: "Banner Section", category: "Project-2" },
        { image: hotel4, title: "Booking Section", category: "Project-2" },
    ];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section id="projects">
            <div className="px-4 py-12 bg-gray-50 min-h-screen">
                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center space-x-8 mb-10"
                >
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedCategory(tab)}
                            className={`relative pb-2 text-lg font-semibold transition-colors duration-300 ${
                                selectedCategory === tab
                                    ? 'text-green-600'
                                    : 'text-gray-500 hover:text-green-600'
                            }`}
                        >
                            {tab}
                            {selectedCategory === tab && (
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-500 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 px-2">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="relative overflow-hidden rounded-xl shadow-md break-inside-avoid group"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
                                <h3 className="text-lg font-bold">{project.title}</h3>
                                <p className="text-sm">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
