import React from "react";
import { motion } from "framer-motion";

const Support = ({ scrollRef }) => {
    return (
        <motion.section
            className="home__support"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 1 }
            }}
            viewport={{ root: scrollRef }}
        >
            <h2>our support</h2>
            <h1>Integrated with Health team center around the world</h1>
        </motion.section>
    );
};

export default Support;
