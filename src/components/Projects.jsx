import React from "react";
import project1 from "../../src/assets/Project (1).png";
import project2 from "../../src/assets/Project (2).png";
import project3 from "../../src/assets/Project (3).png";
import project4 from "../../src/assets/Project (4).png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: project1,
      link: "https://frontlinebd.net/",
      bg: "from-green-700 to-black",
    },
    {
      id: 2,
      image: project2,
      link: "https://frontlinebd.net/",
      bg: "from-green-600 to-black",
    },
    {
      id: 3,
      image: project3,
      link: "https://fastforwardlogistics.org",
      bg: "from-yellow-600 to-black",
    },
    {
      id: 4,
      image: project4,
      link: "https://khajahconstructingltd.com/",
      bg: "from-yellow-600 to-black",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-black text-white py-16 px-5 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Heading Section */}
      <div className="text-center mb-12 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
         𝒞𝒽𝑒𝒸𝓀 𝒪𝓊𝓉 𝑀𝓎 𝐿𝒶𝓉𝑒𝓈𝓉 𝒫𝓇𝑜𝒿𝑒𝒸𝓉𝓈

        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          I’m here to help if you’re looking for a skilled MERN Stack developer
          to bring your ideas to life, or a reliable full-stack partner to
          elevate your business to the next level.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-gray-700 hover:border-gray-400 transition duration-300 shadow-md hover:shadow-lg"
          >
            {/* Image Section */}
            <div
              className={`rounded-t-xl overflow-hidden bg-gradient-to-b ${project.bg} flex justify-center items-center`}
            >
              <img
                src={project.image}
                alt="project"
                className="w-full object-contain rounded-t-xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Button */}
            <div className="text-center py-6">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-white hover:text-black transition font-medium text-sm sm:text-base"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
