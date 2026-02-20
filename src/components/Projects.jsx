import React from "react";
import project1 from "../../src/assets/Project (1).png";
import project2 from "../../src/assets/Project (2).png";
import project3 from "../../src/assets/Project (3).png";
import project4 from "../../src/assets/Project (4).png";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projectData = [
    { id: 1, image: project1, link: "https://frontlinebd.net/", bg: "from-green-700 to-black" },
    { id: 2, image: project2, link: "http://graphicsamazon.com", bg: "from-green-600 to-black" },
    { id: 3, image: project3, link: "https://fastforwardlogistics.org", bg: "from-yellow-600 to-black" },
    { id: 4, image: project4, link: "https://khajahconstructingltd.com/", bg: "from-yellow-600 to-black" },
  ];

  return (
    <section id="projects" className="w-full theme-page py-16 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-12 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t("projects.title")}</h2>
        <p className="theme-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{t("projects.summary")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border theme-border hover:border-gray-400 transition duration-300 shadow-md hover:shadow-lg"
          >
            <div className={`rounded-t-xl overflow-hidden bg-gradient-to-b ${project.bg} flex justify-center items-center`}>
              <img
                src={project.image}
                alt="project"
                className="w-full object-contain rounded-t-xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="text-center py-6">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block border theme-border px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-white hover:text-black transition font-medium text-sm sm:text-base"
              >
                {t("projects.viewLive")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

