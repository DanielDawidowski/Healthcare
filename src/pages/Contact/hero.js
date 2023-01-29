import React from "react";
import ContactImg from "../../assets/Images/contact/hero.png";

const Hero = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact__hero">
                    <div className="contact__hero-title ">
                        <h1>Let us help you every step of the way</h1>
                    </div>
                    <div className="contact__hero-subtitle">
                        <hr className="subtitle-line" />
                        <h3>Connect With Us</h3>
                    </div>
                    <div className="contact__hero-img">
                        <img src={ContactImg} alt="contact-hero" />
                    </div>
                    <div className="contact__hero-content">
                        <p>
                            Connect with us to make an appointment, get your
                            customer service and billing questions answered, and
                            stay up to date with supportive healthy living tips.
                            <br />
                            <br />
                            <br />
                            <b>
                                Here are some helpful links to get you the
                                information you need.
                            </b>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
