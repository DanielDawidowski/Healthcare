import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/Images/hero/home-info1.png";
import Img2 from "../../assets/Images/hero/home-info2.png";
import Img3 from "../../assets/Images/hero/home-info3.png";

const infoArray = [
    {
        id: 0,
        title: "Book an appontments",
        img: Img1
    },
    {
        id: 1,
        title: "Chat with your doc & team",
        img: Img2
    },
    {
        id: 2,
        title: "All your health in one place",
        img: Img3
    }
];

const Info = ({ scrollRef }) => {
    return (
        <section className="home__info container">
            <div className="title-divider">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            delay: 1.6,
                            duration: 1.6
                        }
                    }}
                    viewport={{
                        root: scrollRef
                    }}
                >
                    smart & hassle-free
                </motion.h2>
                <motion.hr
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{
                        opacity: 1,
                        width: "85%",
                        transition: { duration: 2 }
                    }}
                    viewport={{
                        root: scrollRef
                    }}
                />
            </div>
            <div className="home__info-title">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            delay: 0.6,
                            duration: 0.6
                        }
                    }}
                    viewport={{
                        root: scrollRef
                    }}
                >
                    A friendlier healthcare experience
                </motion.h1>
            </div>
            <motion.div className="home__info-cards">
                {infoArray.map((el, i) => (
                    <motion.figure
                        key={i}
                        className="home__info-card"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.5,
                                duration: 0.6
                            }
                        }}
                        viewport={{
                            root: scrollRef
                        }}
                    >
                        <img src={el.img} alt={el.title} />
                        <figcaption>
                            <b>{el.title}</b>
                        </figcaption>
                    </motion.figure>
                ))}
            </motion.div>
        </section>
    );
};

export default Info;
