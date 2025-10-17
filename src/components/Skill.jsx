import { useEffect, useState, useRef } from "react";

const skillsFront = [
  { name: "React.js", percent: 90 },
  { name: "Next.js", percent: 60 },
  { name: "JavaScript (ES6+)", percent: 90 },
  { name: "HTML5", percent: 100 },
  { name: "CSS3", percent: 90 },
  { name: "Tailwind CSS", percent: 100 },
];

const skillsBack = [
  { name: "Node.js", percent: 90 },
  { name: "Express.js", percent: 95 },
  { name: "MongoDB", percent: 100 },
  { name: "Firebase", percent: 95 },
  { name: "JWT Authentication", percent: 100 },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const [frontProgress, setFrontProgress] = useState(skillsFront.map(() => 0));
  const [backProgress, setBackProgress] = useState(skillsBack.map(() => 0));
  const animationRef = useRef(null);

  const animateSkills = () => {
    const start = performance.now();
    const duration = 1000; // 1 second

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);

      setFrontProgress(
        skillsFront.map((s) => Math.floor(s.percent * progress))
      );
      setBackProgress(
        skillsBack.map((s) => Math.floor(s.percent * progress))
      );

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) animateSkills();
          else {
            setFrontProgress(skillsFront.map(() => 0));
            setBackProgress(skillsBack.map(() => 0));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full bg-[#0B0B0B] text-white py-20 px-4 md:px-16 lg:px-24"
    >
      {/* === Section Title === */}
      <div className="text-center mb-16">
        <p className="uppercase text-gray-400 font-semibold tracking-widest">
          My Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Technical <span className="text-[#C6FF00]">Skills</span>
        </h2>
      </div>

      {/* === Skill Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Front-End */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-[0_0_15px_rgba(198,255,0,0.05)] border border-transparent hover:border-[#C6FF00] transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-6 text-[#C6FF00]">
            Front-End
          </h3>
          <ul className="space-y-5">
            {skillsFront.map((skill, i) => (
              <li key={i}>
                <div className="flex justify-between text-sm sm:text-base mb-1">
                  <span>{skill.name}</span>
                  <span>{frontProgress[i]}%</span>
                </div>
                <div className="w-full bg-gray-700/60 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C6FF00] h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${frontProgress[i]}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Back-End */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-[0_0_15px_rgba(198,255,0,0.05)] border border-transparent hover:border-[#C6FF00] transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-6 text-[#C6FF00]">
            Back-End
          </h3>
          <ul className="space-y-5">
            {skillsBack.map((skill, i) => (
              <li key={i}>
                <div className="flex justify-between text-sm sm:text-base mb-1">
                  <span>{skill.name}</span>
                  <span>{backProgress[i]}%</span>
                </div>
                <div className="w-full bg-gray-700/60 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C6FF00] h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${backProgress[i]}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
