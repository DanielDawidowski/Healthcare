import React from "react";
import Layout from "../components/layout/layout";
import Hero from "./Services/hero";
import Info from "./Services/info";
import Feedback from "./Home/feedback";
import Support from "./Services/support";

const Services = () => {
    return (
        <Layout>
            <Hero />
            <Info />
            <Support />
            <Feedback />
        </Layout>
    );
};

export default Services;
