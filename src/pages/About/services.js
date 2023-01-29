import React from "react";
import FirstAidIcon from "../../assets/SVG/medical.svg";
import SafetyIcon from "../../assets/SVG/safety.svg";
import ContactsIcon from "../../assets/SVG/contacts.svg";

const Services = () => {
    return (
        <section className="about__services">
            <div className="about__services-title container">
                <h1>Work where you’re encouraged to live your purpose.</h1>
                <h3>
                    Search jobs, apply, update your profile or check application
                    status using the portals below.
                </h3>
            </div>
            <div className="about__services-content">
                <ul>
                    <li className="services__card">
                        <div className="services__card-icon">
                            <img src={FirstAidIcon} alt="service-icon" />
                        </div>
                        <div className="services__card-content">
                            <h3>All Applicants</h3>
                            <h5>Nursing, Clinical, Business & Support Roles</h5>
                        </div>
                    </li>
                    <li className="services__card">
                        <div className="services__card-icon">
                            <img src={SafetyIcon} alt="service-icon" />
                        </div>
                        <div className="services__card-content">
                            <h3>Oval Health Associates</h3>
                            <h5>Current Associate's Internal Marketplace</h5>
                        </div>
                    </li>
                    <li className="services__card">
                        <div className="services__card-icon">
                            <img src={ContactsIcon} alt="service-icon" />
                        </div>
                        <div className="services__card-content">
                            <h3>Providers</h3>
                            <h5>
                                Physician & Advanced Practice Provider
                                Opportunities
                            </h5>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Services;
