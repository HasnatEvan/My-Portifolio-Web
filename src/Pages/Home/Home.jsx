import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Skill from "../../components/Skill";
import WhatIDo from "../../components/WhatIDo";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto ">
            <Banner />
            <About></About>
            <Skill></Skill>
            <WhatIDo></WhatIDo>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;
