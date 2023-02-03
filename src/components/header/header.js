import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
// import { useHistory } from "react-router-dom";
import LogoIcon from "../../assets/Images/logo/Logo.png";
import Menu from "../menu/menu";

const item = {
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 2.2
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            ease: "easeInOut",
            duration: 0.8
        }
    }
};

const Header = ({ toggleMenu, setToggleMenu, small = false }) => {
    const hamburger = useRef(null);
    // let history = useHistory();
    const { scrollYProgress } = useScroll();
    return (
        <div className={`header ${small && "bg"}`}>
            <div className="header__menu container">
                <motion.a
                    href="/"
                    variants={item}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <img src={LogoIcon} alt="logo" />
                </motion.a>
                <Menu />
            </div>
            <div
                className="hamburger-menu"
                onClick={() => setToggleMenu(!toggleMenu)}
                ref={hamburger}
            >
                <button>
                    <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            width: "40px",
                            transition: {
                                type: "spring",
                                stiffness: 200,
                                delay: 2.6,
                                duration: 0.6
                            }
                        }}
                        exit={{ width: 0, opacity: 0 }}
                    ></motion.span>
                    <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            width: "40px",
                            transition: {
                                type: "spring",
                                stiffness: 200,
                                delay: 2.6,
                                duration: 0.6
                            }
                        }}
                        exit={{ width: 0, opacity: 0 }}
                    ></motion.span>
                    <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            width: "40px",
                            transition: {
                                type: "spring",
                                stiffness: 200,
                                delay: 2.6,
                                duration: 0.6
                            }
                        }}
                        exit={{ width: 0, opacity: 0 }}
                    ></motion.span>
                </button>
            </div>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
        </div>
    );
};

export default Header;
