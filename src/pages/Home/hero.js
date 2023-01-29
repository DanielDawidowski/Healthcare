import React from "react";
import Button from "../../components/button/button";
import HomeVideo from "../../components/video/video";

const Hero = () => {
    return (
        <>
            <section className="home">
                <div className="home__hero container">
                    <div className="home__hero-subtitle">
                        <hr className="subtitle-line" />
                        <h3>
                            Welcome to Oval Healthcare Center. First in Care,
                            Research and Learning.
                        </h3>
                    </div>
                    <h1>
                        <b>
                            We Provide a Smart and Modern leading healthcare for
                            people worldwide
                        </b>
                    </h1>
                    <div className="home__hero-buttons">
                        <Button title="Book Appointment" primary />
                        <Button title="Find a Clinic" />
                    </div>
                </div>
            </section>
            <section className="home__video">
                <HomeVideo />
            </section>
        </>
    );
};

export default Hero;
