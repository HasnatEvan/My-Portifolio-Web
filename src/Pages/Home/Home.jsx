import React from "react";
import { Helmet } from "react-helmet";
import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Skill from "../../components/Skill";
import WhatIDo from "../../components/WhatIDo";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Hasnat Evan -  Web Developer</title>
                <meta
                    name="description"
                    content="Hasnat Evan's personal portfolio showcasing web development projects, skills, and services. Explore my work, skills, and get in touch for collaboration or hiring."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://yourportfolio.com/" />

                {/* Open Graph / Social Media */}
                <meta property="og:title" content="Hasnat Evan -  Web Developer" />
                <meta
                    property="og:description"
                    content="Hasnat Evan's personal portfolio showcasing web development projects, skills, and services. Explore my work, skills, and get in touch for collaboration or hiring."
                />
                <meta property="og:url" content="https://yourportfolio.com/" />
                <meta property="og:type" content="website" />

                {/* Optional Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hasnat Evan -  Web Developer" />
                <meta
                    name="twitter:description"
                    content="Hasnat Evan's personal portfolio showcasing web development projects, skills, and services. Explore my work, skills, and get in touch for collaboration or hiring."
                />
            </Helmet>

            {/* Page Components */}
            <Banner />
            <About />
            <Skill />
            <WhatIDo />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;
