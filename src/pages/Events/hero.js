import React from "react";

const Hero = () => {
    return (
        <section className="events">
            <div className="container">
                <div className="events__hero">
                    <div className="events__hero-title ">
                        <h1>Oval Classes & Events</h1>
                        <h3>
                            We believe that being healthy is a way of life.
                            That’s why we’ve put together a schedule of classes
                            and events to educate and inspire community members
                            to achieve a healthier state of body, mind, and
                            spirit. See what’s going on near you...
                        </h3>
                    </div>
                    <div className="events__hero-search">
                        <input
                            type="text"
                            placeholder="Search for health care services and specialties"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
