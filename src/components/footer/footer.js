import React from "react";
import { motion } from "framer-motion";
import LogoFooter from "../../assets/Images/footer/footerLogo.png";
import MapIcon from "../../assets/Images/footer/map.png";
import BookIcon from "../../assets/Images/footer/phoneBook.png";
import PinIcon from "../../assets/Images/footer/pin.png";
import TwitterIcon from "../../assets/Images/footer/twitter.png";
import FacebookIcon from "../../assets/Images/footer/facebook.png";
import LinkedinIcon from "../../assets/Images/footer/linkedin.png";
import SlackIcon from "../../assets/Images/footer/slack.png";
import NetflixIcon from "../../assets/Images/footer/netflix.png";
import GoogleIcon from "../../assets/Images/footer/google.png";
import UberIcon from "../../assets/Images/footer/uber.png";
import AirbnbIcon from "../../assets/Images/footer/airbnb.png";

const Footer = () => {
    return (
        <motion.footer
            className="footer container"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1 }
            }}
        >
            <div className="footer__list">
                <img src={LogoFooter} alt="footer-logo" />
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={MapIcon} alt="map-icon" />
                        <div>
                            <h5>
                                123 Anywhere St., Any City,
                                <br /> Any Region, Any Country, <br />
                                ST 12345
                            </h5>
                            <h6>Oval Healthcare Center</h6>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={BookIcon} alt="book-icon" />
                        <div>
                            <h5>+123-456-7890</h5>
                            <h6>(In an emergency, call 000)</h6>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={PinIcon} alt="pin-icon" />
                        <div>
                            <h5>
                                Melbourne <br /> Bendigo <br />
                                Box Hill <br />
                                Moorabbin
                                <br />
                                Sunshine
                            </h5>
                        </div>
                    </motion.li>
                </ul>
            </div>
            <div className="footer__list">
                <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    About Us
                </motion.h4>
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Get involved</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Upcoming events</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Partnerships</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Patient charter</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Location</h5>
                    </motion.li>
                </ul>
            </div>
            <div className="footer__list">
                <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    Services
                </motion.h4>
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Primary Care</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Emergency Care</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Virtual Care</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Immunisations </h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Minor Procedures </h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Cancer Checks</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Pre-pregnancy </h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Iron Infusions </h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Pathology </h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Podiatry</h5>
                    </motion.li>
                </ul>
            </div>
            <div className="footer__list">
                <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    Patient Information
                </motion.h4>
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Services & clinics</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Coming to hospital</h5>
                    </motion.li>
                </ul>
            </div>
            <div className="footer__list">
                <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    Events
                </motion.h4>
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Get involved</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Upcoming events</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Partnerships</h5>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h5>Patient charter</h5>
                    </motion.li>
                </ul>
            </div>
            <div className="footer__list">
                <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    Find us on
                </motion.h4>
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={TwitterIcon} alt="twitter-icon" />
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={FacebookIcon} alt="facebook-icon" />
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={LinkedinIcon} alt="linkedin-icon" />
                    </motion.li>
                </ul>
            </div>
            <div className="footer__list">
                <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    Partners
                </motion.h4>
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={SlackIcon} alt="slack-icon" />
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={NetflixIcon} alt="netflix-icon" />
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={GoogleIcon} alt="google-icon" />
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={UberIcon} alt="uber-icon" />
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 1 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <img src={AirbnbIcon} alt="airbnb-icon" />
                    </motion.li>
                </ul>
            </div>
        </motion.footer>
    );
};

export default Footer;
