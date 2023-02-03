import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/button/button";
import HomeVideo from "../../components/video/video";

const Hero = ({ scrollRef }) => {
    return (
        <>
            <section className="home">
                <div className="home__hero container">
                    <motion.div className="home__hero-subtitle">
                        <motion.hr
                            className="subtitle-line"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                opacity: 1,
                                width: "50px",
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    delay: 2.6,
                                    duration: 0.6
                                }
                            }}
                            exit={{ width: 0, opacity: 0 }}
                        />
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    ease: "linear",
                                    delay: 2.7,
                                    duration: 0.6
                                }
                            }}
                            exit={{ width: 0, opacity: 0 }}
                        >
                            Welcome to Oval Healthcare Center. First in Care,
                            Research and Learning.
                        </motion.h3>
                    </motion.div>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                delay: 2.2,
                                duration: 0.6
                            }
                        }}
                    >
                        <b>
                            We Provide a Smart and Modern leading healthcare for
                            people worldwide
                        </b>
                    </motion.h1>
                    <motion.div
                        className="home__hero-buttons"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                delay: 2.4,
                                duration: 0.6
                            }
                        }}
                        exit={{ y: -100, opacity: 0 }}
                    >
                        <Button title="Book Appointment" primary />
                        <Button title="Find a Clinic" />
                    </motion.div>
                </div>
            </section>
            <section className="home__video">
                <HomeVideo scrollRef={scrollRef} />
            </section>
        </>
    );
};

export default Hero;
