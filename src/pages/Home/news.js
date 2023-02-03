import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { throttle } from "throttle-debounce";
import Img1 from "../../assets/Images/hero/news1.png";
import Img2 from "../../assets/Images/hero/news2.png";
import Img3 from "../../assets/Images/hero/news3.png";
import Img4 from "../../assets/Images/hero/news4.png";

const slideAnimation = {
    variants: {
        full: { backgroundColor: "#f94144" },
        partial: { backgroundColor: "#808080" }
    },
    initial: "partial",
    whileInView: "full",
    viewport: { amount: 1, once: true }
};

const newsArray = [
    {
        id: 0,
        title: "Emergency department lull as Victorians stay home",
        disc: "Emergency department presentations at The Alfred and Sandringham…",
        img: Img1
    },
    {
        id: 1,
        title: "The Alfred prepares for COVID-19",
        disc: "In response to the COVID-19 global health crisis, The Alfred has significa…",
        img: Img2
    },
    {
        id: 2,
        title: "Alfred Health Graduate Nurse Program Information",
        disc: "The initial part of this event includes short presentations & then an information",
        img: Img3
    },
    {
        id: 3,
        title: "Nursing Scholarship Lunch – Advancing Nursing Leadership",
        disc: "While our annual luncheon is a core part of scholarship fundraising",
        img: Img4
    },
    {
        id: 4,
        title: "Emergency department lull as Victorians stay home",
        disc: "Emergency department presentations at The Alfred and Sandringham…",
        img: Img1
    },
    {
        id: 5,
        title: "The Alfred prepares for COVID-19",
        disc: "In response to the COVID-19 global health crisis, The Alfred has significa…",
        img: Img2
    },
    {
        id: 6,
        title: "Alfred Health Graduate Nurse Program Information",
        disc: "The initial part of this event includes short presentations & then an information",
        img: Img3
    },
    {
        id: 7,
        title: "Nursing Scholarship Lunch – Advancing Nursing Leadership",
        disc: "While our annual luncheon is a core part of scholarship fundraising",
        img: Img4
    }
];

function useElementViewportPosition(ref) {
    const [position, setPosition] = useState([0, 0]);

    useEffect(() => {
        if (!ref || !ref.current) return;

        const pageHeight = document.body.scrollHeight;
        const start = ref.current.offsetTop;
        const end = start + ref.current.offsetHeight;

        setPosition([start / pageHeight, end / pageHeight]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { position };
}

const News = ({ scrollRef }) => {
    const ref = useRef(null);
    const carouselRef = useRef(null);
    const { position } = useElementViewportPosition(ref);
    const [carouselEndPosition, setCarouselEndPosition] = useState(0);
    const { scrollYProgress, scrollY } = useScroll();
    const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

    useEffect(() => {
        window.addEventListener(
            "scroll",
            () => {}
            // console.log({ scrollYProgress: scrollYProgress.current, scrollY })
        );
    }, [scrollYProgress, scrollY]);

    useEffect(() => {
        if (!carouselRef || !carouselRef.current) return;
        const parent = carouselRef.current.parentElement;
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        const resetCarouselEndPosition = () => {
            if (carouselRef && carouselRef.current) {
                const newPosition =
                    carouselRef.current.clientWidth -
                    window.innerWidth +
                    scrollbarWidth +
                    parent.offsetLeft * 2;

                setCarouselEndPosition(-newPosition);
            }
        };
        resetCarouselEndPosition();
        const handleResize = throttle(1, resetCarouselEndPosition);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="home__news">
            <div className="home__news-inner"></div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        delay: 0.6,
                        duration: 1.6
                    }
                }}
                viewport={{
                    root: scrollRef
                }}
            >
                news
            </motion.h2>
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        delay: 0.4,
                        duration: 0.6
                    }
                }}
                viewport={{
                    root: scrollRef
                }}
            >
                The latest updates about Covid-19
            </motion.h1>
            <div
                ref={ref}
                className="container-news"
                style={{ height: "300vh" }}
            >
                <div className="sticky-wrapper">
                    <motion.div
                        ref={carouselRef}
                        className="carousel"
                        style={{ x }}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
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
                        {newsArray.map((el, i) => (
                            <motion.figure
                                key={i}
                                className="home__news-card"
                                wariants={slideAnimation}
                            >
                                <img src={el.img} alt={el.title} />
                                <figcaption>
                                    <h2>
                                        <b>{el.id}</b>
                                    </h2>
                                    <b>{el.title}</b>
                                    <p>{el.disc}</p>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );

    return (
        <section className="home__news">
            <div className="home__news-inner">
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
                    news
                </motion.h2>
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
                    The latest updates about Covid-19
                </motion.h1>
                <motion.div
                    ref={carouselRef}
                    className="home__news-cards"
                    style={{ x }}
                >
                    {newsArray.map((el, i) => (
                        <motion.figure key={el.id} className="home__news-card">
                            <img src={el.img} alt={el.title} />
                            <figcaption>
                                <b>{el.title}</b>
                                <p>{el.disc}</p>
                            </figcaption>
                        </motion.figure>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default News;
