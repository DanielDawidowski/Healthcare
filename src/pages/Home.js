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

const cardVariants = {
    offscreen: {
        y: -100,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Home = () => {
    const scrollRef = useRef(null);
    return (
        <Layout ref={scrollRef} style={{ overflow: "scroll" }}>
            <motion.div
                className="card-container"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <Hero />
            </motion.div>
            <motion.div
                className="card-container"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <Info />
            </motion.div>
            <motion.div
                className="card-container"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <Services />
            </motion.div>
            <motion.div
                className="card-container"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <Support />
            </motion.div>
            <motion.div
                className="card-container"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <News />
            </motion.div>
            <motion.div
                className="card-container"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ root: scrollRef }}
            >
                <Apps />
            </motion.div>
            <motion.div
                className="card-container"
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
