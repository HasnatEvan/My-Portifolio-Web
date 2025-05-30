import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Skill from "../../components/Skill";
import WhatIDo from "../../components/WhatIDo";



const Home = () => {
    return (
        <div className="overflow-hidden">
             <Banner></Banner>
             <About></About>
             <WhatIDo></WhatIDo>
             <Skill></Skill>
             <Projects></Projects>
             <Education></Education>
             <Contact></Contact>
        </div>
    );
};

export default Home;