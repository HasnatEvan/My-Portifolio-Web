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
                <title>Hasnat Evan | Web Developer</title>

                <meta
                    name="description"
                    content="Hasnat Evan is a Web Developer from Bangladesh. Explore my portfolio, projects, skills, and services. Available for freelance and full-time opportunities."
                />

                <meta name="robots" content="index, follow" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://hasnatevan.top/" />

                {/* Open Graph / Social Media */}
                <meta property="og:title" content="Hasnat Evan | Web Developer" />
                <meta
                    property="og:description"
                    content="Hasnat Evan is a Web Developer from Bangladesh. Explore my portfolio, projects, skills, and services."
                />
                <meta property="og:url" content="https://hasnatevan.top/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://hasnatevan.top/og-image.jpg"
                />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hasnat Evan | Web Developer" />
                <meta
                    name="twitter:description"
                    content="Hasnat Evan is a Web Developer from Bangladesh. Explore my portfolio, projects, skills, and services."
                />
                <meta
                    name="twitter:image"
                    content="https://hasnatevan.top/og-image.jpg"
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
