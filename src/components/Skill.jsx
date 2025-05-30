import React, { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "Next.js", percent: 65 },
  { name: "MongoDB", percent: 75 },
  { name: "Express.js", percent: 80 },
  { name: "React.js", percent: 85 },
  { name: "Node.js", percent: 80 },
  { name: "Firebase", percent: 90 },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const [fillPercents, setFillPercents] = useState(skills.map(() => 0));

  const checkIfInView = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
      setFillPercents(skills.map((skill) => skill.percent));
    } else {
      setFillPercents(skills.map(() => 0));
    }
  };

  useEffect(() => {
    checkIfInView();
    window.addEventListener("scroll", checkIfInView);
    return () => window.removeEventListener("scroll", checkIfInView);
  }, []);

  return (
    <section
       id="skills"
  ref={sectionRef}
  className="py-10 px-6 bg-white w-full min-h-screen"
    >
      <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2 font-semibold text-gray-800">
              <span>{skill.name}</span>
              <span>{fillPercents[idx]}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-in-out shadow-md"
                style={{ width: `${fillPercents[idx]}%` }}
                aria-label={`${skill.name} proficiency: ${fillPercents[idx]}%`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://drive.google.com/file/d/1OrgD71rAg3f2RIXIuawM1pKSQYU9IS93/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 border border-gray-500 text-gray-700 rounded-full hover:bg-gray-100 transition"
          download
        >
          Download Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Skill;
