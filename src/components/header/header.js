import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
// import { useHistory } from "react-router-dom";
import LogoIcon from "../../assets/Images/logo/Logo.png";
import Menu from "../menu/menu";

const Header = ({ toggleMenu, setToggleMenu, small = false }) => {
    const hamburger = useRef(null);
    // let history = useHistory();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 10,
        restDelta: 0.001
    });
    console.log(scrollYProgress);

    return (
        <header className={`header ${small && "bg"}`}>
            <div className="header__menu container">
                <a href="/">
                    <img src={LogoIcon} alt="logo" />
                </a>
                <Menu />
                <motion.div className="progress-bar" style={{ scaleX }} />
            </div>
            <div
                className="hamburger-menu"
                onClick={() => setToggleMenu(!toggleMenu)}
                ref={hamburger}
            >
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
