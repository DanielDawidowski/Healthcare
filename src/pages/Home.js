import React from "react";
import Hero from "./Home/hero";
import Layout from "../components/layout/layout";
import Info from "./Home/info";
import Services from "./Home/services";
import Support from "./Home/support";
import News from "./Home/news";
import Apps from "./Home/apps";

import Feedback from "./Home/feedback";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Info />
            <Services />
            <Support />
            <News />
            <Apps />
            <Feedback />
        </Layout>
    );
};

export default Home;
