import React, { useRef } from "react";
// import { useHistory } from "react-router-dom";
import LogoIcon from "../../assets/Images/logo/Logo.png";
import Menu from "../menu/menu";

const Header = ({ toggleMenu, setToggleMenu, small = false }) => {
    const hamburger = useRef(null);
    // let history = useHistory();

    return (
        <div className={`header ${small && "bg"}`}>
            <div className="header__menu container">
                <a href="/">
                    <img src={LogoIcon} alt="logo" />
                </a>
                <Menu />
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
        </div>
    );
};

export default Header;
