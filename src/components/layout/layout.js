import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../../components/footer/footer";

const Layout = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 10)
            );
        }
        return () =>
            window.removeEventListener("scroll", () =>
                setSmall(window.pageYOffset < 10)
            );
    }, []);
    return (
        <div className="layout">
            <Header
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                small={small}
            />
            <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
