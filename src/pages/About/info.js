import React from "react";

const Info = () => {
    return (
        <section className="about__info container">
            <div className="about__info-card">
                <h1>Mission</h1>
                <h3>
                    We extend the healing ministry of Christ by caring for those
                    who are ill and by nurturing the health of the people in our
                    communities.
                </h3>
            </div>
            <div className="about__info-card">
                <h1>Vision</h1>
                <h3>
                    Every community, every neighborhood, every life - whole and
                    healthy.
                </h3>
            </div>
            <div className="about__info-card">
                <h1>Values</h1>
                <div>
                    <span>Compassion</span>
                    <span>Integrity</span>
                    <span>Stewardship</span>
                    <span>Excellence</span>
                    <span>Respect</span>
                    <span>Respect</span>
                    <span>Imagination</span>
                </div>
            </div>
        </section>
    );
};

export default Info;
