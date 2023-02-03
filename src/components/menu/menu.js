import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import GlassIcon from "../../assets/SVG/glass.svg";
import LocationIcon from "../../assets/SVG/location.svg";
import SearchBar from "../../components/search/search";
import BookData from "../../data.json";

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
            duration: 2.6
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

//Variants
const variants = {
    active: {
        x: "-20px"
    },
    inActive: {
        x: "20px"
    },
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Menu = ({ grid = false, toggleMenu, setToggleMenu }) => {
    const [showInput, setShowInput] = useState(false);

    // let history = useHistory();

    // const logoutAndClose = (grid) => {
    //     let close = grid ? () => setToggleMenu(!toggleMenu) : null;
    //     return close;
    // };

    return (
        <motion.div
            className={grid ? "menu-grid" : "menu"}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <motion.ul>
                <motion.li variants={item} whileHover={{ scale: 1.1 }}>
                    <a href="/about">About</a>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: 1.1 }}>
                    <a href="/services">Services</a>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: 1.1 }}>
                    <a href="/info">Patient Information</a>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: 1.1 }}>
                    <a href="/events">Events</a>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: 1.1 }}>
                    <a href="/contact">Contact</a>
                </motion.li>
            </motion.ul>
            <motion.ul>
                <motion.li variants={item} whileHover={{ scale: 1.1 }}>
                    <img src={LocationIcon} alt="Location Icon" />
                </motion.li>
                <AnimatePresence>
                    <motion.li
                        variants={item}
                        className="search"
                        whileHover={{ scale: 1.1 }}
                    >
                        {showInput && (
                            <SearchBar placeholder="Search" data={BookData} />
                        )}
                        <motion.img
                            src={GlassIcon}
                            alt="Magnifying Glass Icon"
                            onClick={() => setShowInput(!showInput)}
                        />
                    </motion.li>
                </AnimatePresence>
            </motion.ul>
        </motion.div>
    );
};

export default Menu;
