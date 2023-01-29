import React from "react";
import Hero from "./About/hero";
import Info from "./About/info";
import Leaders from "./About/leaders";
import Services from "./About/services";
import Sponsors from "./About/sponsors";
import Layout from "../components/layout/layout";

const About = () => {
    return (
        <Layout>
            <Hero />
            <hr className="container" />
            <Info />
            <Sponsors />
            <Leaders />
            <Services />
        </Layout>
    );
};

export default About;
