import React from "react";
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
        <footer className="footer container">
            <div className="footer__list">
                <img src={LogoFooter} alt="footer-logo" />
                <ul>
                    <li>
                        <img src={MapIcon} alt="map-icon" />
                        <div>
                            <h5>
                                123 Anywhere St., Any City,
                                <br /> Any Region, Any Country, <br />
                                ST 12345
                            </h5>
                            <h6>Oval Healthcare Center</h6>
                        </div>
                    </li>
                    <li>
                        <img src={BookIcon} alt="book-icon" />
                        <div>
                            <h5>+123-456-7890</h5>
                            <h6>(In an emergency, call 000)</h6>
                        </div>
                    </li>
                    <li>
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
                    </li>
                </ul>
            </div>
            <div className="footer__list">
                <h4>About Us</h4>
                <ul>
                    <li>
                        <h5>Get involved</h5>
                    </li>
                    <li>
                        <h5>Upcoming events</h5>
                    </li>
                    <li>
                        <h5>Partnerships</h5>
                    </li>
                    <li>
                        <h5>Patient charter</h5>
                    </li>
                    <li>
                        <h5>Location</h5>
                    </li>
                </ul>
            </div>
            <div className="footer__list">
                <h4>Services</h4>
                <ul>
                    <li>
                        <h5>Primary Care</h5>
                    </li>
                    <li>
                        <h5>Emergency Care</h5>
                    </li>
                    <li>
                        <h5>Virtual Care</h5>
                    </li>
                    <li>
                        <h5>Immunisations </h5>
                    </li>
                    <li>
                        <h5>Minor Procedures </h5>
                    </li>
                    <li>
                        <h5>Cancer Checks</h5>
                    </li>
                    <li>
                        <h5>Pre-pregnancy </h5>
                    </li>
                    <li>
                        <h5>Iron Infusions </h5>
                    </li>
                    <li>
                        <h5>Pathology </h5>
                    </li>
                    <li>
                        <h5>Podiatry</h5>
                    </li>
                </ul>
            </div>
            <div className="footer__list">
                <h4>Patient Information</h4>
                <ul>
                    <li>
                        <h5>Services & clinics</h5>
                    </li>
                    <li>
                        <h5>Coming to hospital</h5>
                    </li>
                </ul>
            </div>
            <div className="footer__list">
                <h4>Events</h4>
                <ul>
                    <li>
                        <h5>Get involved</h5>
                    </li>
                    <li>
                        <h5>Upcoming events</h5>
                    </li>
                    <li>
                        <h5>Partnerships</h5>
                    </li>
                    <li>
                        <h5>Patient charter</h5>
                    </li>
                </ul>
            </div>
            <div className="footer__list">
                <h4>Find us on</h4>
                <ul>
                    <li>
                        <img src={TwitterIcon} alt="twitter-icon" />
                    </li>
                    <li>
                        <img src={FacebookIcon} alt="facebook-icon" />
                    </li>
                    <li>
                        <img src={LinkedinIcon} alt="linkedin-icon" />
                    </li>
                </ul>
            </div>
            <div className="footer__list">
                <h4>Partners</h4>
                <ul>
                    <li>
                        <img src={SlackIcon} alt="slack-icon" />
                    </li>
                    <li>
                        <img src={NetflixIcon} alt="netflix-icon" />
                    </li>
                    <li>
                        <img src={GoogleIcon} alt="google-icon" />
                    </li>
                    <li>
                        <img src={UberIcon} alt="uber-icon" />
                    </li>
                    <li>
                        <img src={AirbnbIcon} alt="airbnb-icon" />
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
