import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import GlassIcon from "../../assets/SVG/glass.svg";
import LocationIcon from "../../assets/SVG/location.svg";
import SearchBar from "../../components/search/search";
import BookData from "../../data.json";

const Menu = ({ grid = false, toggleMenu, setToggleMenu }) => {
    const [showInput, setShowInput] = useState(false);

    // let history = useHistory();

    // const logoutAndClose = (grid) => {
    //     let close = grid ? () => setToggleMenu(!toggleMenu) : null;
    //     return close;
    // };

    return (
        <motion.div className={grid ? "menu-grid" : "menu"}>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/info">Patient Information</a>
                </li>
                <li>
                    <a href="/events">Events</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <ul>
                <li>
                    <img src={LocationIcon} alt="Location Icon" />
                </li>
                <AnimatePresence>
                    <motion.li className="search">
                        {showInput && (
                            <SearchBar
                                placeholder="Search"
                                data={BookData}
                                setShowInput={setShowInput}
                                showInput={showInput}
                            />
                        )}
                        <motion.img
                            src={GlassIcon}
                            alt="Magnifying Glass Icon"
                            onClick={() => setShowInput(!showInput)}
                        />
                    </motion.li>
                </AnimatePresence>
            </ul>
        </motion.div>
    );
};

export default Menu;
