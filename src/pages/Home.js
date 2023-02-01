import React from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence,
    useScroll
} from "framer-motion";
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
            <motion.div>
                <Hero />
            </motion.div>

            <motion.div>
                <Info />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1
                }}
                exit={{ opacity: 0, y: 100 }}
            >
                <Services />
            </motion.div>
            <Support />
            <News />
            <Apps />
            <Feedback />
        </Layout>
    );
};

export default Home;
