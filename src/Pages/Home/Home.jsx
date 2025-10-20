import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Skill from "../../components/Skill";
import WhatIDo from "../../components/WhatIDo";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto ">
            <Banner />
            <About></About>
            <Skill></Skill>
            <WhatIDo></WhatIDo>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;
