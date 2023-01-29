import React from "react";
import AboutImg from "../../assets/Images/about/hero.png";

const Hero = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__hero">
                    <div className="about__hero-title ">
                        <h1>About Oval Healthcare</h1>
                    </div>
                    <div className="about__hero-subtitle">
                        <hr className="subtitle-line" />
                        <h3>
                            The region's largest health care network, with one
                            very important mission
                        </h3>
                    </div>
                    <div className="about__hero-img">
                        <img src={AboutImg} alt="about-hero" />
                    </div>
                    <div className="about__hero-content">
                        <p>
                            Your health and wellness guide everything we do. We
                            celebrate the value of each person's life as we seek
                            to combine medical expertise with a compassionate
                            touch to holistically care for a person's body, mind
                            and spirit.
                            <br />
                            <br />
                            <br />
                            Centura Health 21,000+ mission-centered
                            professionals share our ministry and are guided by
                            our Mission to extend the healing ministry of Christ
                            by caring for those who are ill and by nurturing the
                            health of the people in our communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
