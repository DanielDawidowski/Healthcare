import React, { useRef } from "react";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import Menu from "../menu/menu";
import LogoIcon from "../../assets/Images/logo/Logo.png";

const item = {
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
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

const Navigation = ({ toggleMenu, setToggleMenu }) => {
    const hamburger = useRef(null);
    return (
        <AnimatePresence>
            {toggleMenu && (
                <>
                    <motion.nav
                        initial={{ x: "-100%" }}
                        exit={{ x: "-100%" }}
                        animate={{ x: toggleMenu ? 0 : "-100%" }}
                        transition={{
                            duration: 0.5,
                            ease: [0.6, 0.05, -0.01, 0.9]
                        }}
                        className="navigation container"
                    >
                        <motion.div
                            variants={item}
                            className="navigation-header"
                        >
                            <img src={LogoIcon} alt="logo" />
                            <motion.div
                                variants={item}
                                className="hamburger-navigation"
                                onClick={() => setToggleMenu(!toggleMenu)}
                                ref={hamburger}
                            >
                                <button>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item} className="navigation-menu">
                            <Menu
                                grid
                                toggleMenu={toggleMenu}
                                setToggleMenu={setToggleMenu}
                            />
                        </motion.div>
                    </motion.nav>
                    <Menu />
                </>
            )}
        </AnimatePresence>
    );
};

export default Navigation;
