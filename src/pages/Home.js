import React, { useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./Home/hero";
import Layout from "../components/layout/layout";
import Info from "./Home/info";
import Services from "./Home/services";
import Support from "./Home/support";
import News from "./Home/news";
import Apps from "./Home/apps";
import Feedback from "./Home/feedback";

const Home = () => {
    const scrollRef = useRef(null);

    return (
        <Layout>
            <Hero scrollRef={scrollRef} />
            <Info scrollRef={scrollRef} />
            <Services scrollRef={scrollRef} />
            <Support scrollRef={scrollRef} />
            <News scrollRef={scrollRef} />
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <Apps />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <Feedback />
            </motion.div>
        </Layout>
    );
};

export default Home;
