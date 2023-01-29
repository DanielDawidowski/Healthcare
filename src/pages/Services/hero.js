import React from "react";

const Hero = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services__hero">
                    <div className="services__hero-title ">
                        <h1>Health Care Services & Specialties</h1>
                    </div>
                    <div className="services__hero-search">
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
