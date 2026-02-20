import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

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
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [frontProgress, setFrontProgress] = useState(skillsFront.map(() => 0));
  const [backProgress, setBackProgress] = useState(skillsBack.map(() => 0));
  const animationRef = useRef(null);

  const animateSkills = () => {
    const start = performance.now();
    const duration = 1000;

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);

      setFrontProgress(skillsFront.map((s) => Math.floor(s.percent * progress)));
      setBackProgress(skillsBack.map((s) => Math.floor(s.percent * progress)));

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
    <section id="skills" ref={sectionRef} className="w-full theme-page py-20 px-4 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <p className="uppercase theme-muted font-semibold tracking-widest">{t("skill.badge")}</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">{t("skill.title")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="theme-surface rounded-2xl p-8 shadow-[0_0_15px_rgba(198,255,0,0.05)] border border-transparent accent-hover-border transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-6 accent-text">{t("skill.frontEnd")}</h3>
          <ul className="space-y-5">
            {skillsFront.map((skill, i) => (
              <li key={i}>
                <div className="flex justify-between text-sm sm:text-base mb-1">
                  <span>{skill.name}</span>
                  <span>{frontProgress[i]}%</span>
                </div>
                <div className="w-full theme-surface-strong h-3 rounded-full overflow-hidden">
                  <div
                    className="accent-bg h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${frontProgress[i]}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="theme-surface rounded-2xl p-8 shadow-[0_0_15px_rgba(198,255,0,0.05)] border border-transparent accent-hover-border transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-6 accent-text">{t("skill.backEnd")}</h3>
          <ul className="space-y-5">
            {skillsBack.map((skill, i) => (
              <li key={i}>
                <div className="flex justify-between text-sm sm:text-base mb-1">
                  <span>{skill.name}</span>
                  <span>{backProgress[i]}%</span>
                </div>
                <div className="w-full theme-surface-strong h-3 rounded-full overflow-hidden">
                  <div
                    className="accent-bg h-3 rounded-full transition-all duration-500 ease-out"
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

