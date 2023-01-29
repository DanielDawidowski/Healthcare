import React from "react";
import Button from "../../components/button/button";

const Info = () => {
    return (
        <section className="services__info">
            <div className="container">
                <h1>Service Category</h1>
                <div className="services__info-categories">
                    <div className="service__category">
                        <h4>Primary Care</h4>
                        <p>
                            Could Those Creepy Crawly Nighttime Leg Sensations
                            Be A Treatable Medical Condition One Woman S Search
                            For Relief
                        </p>
                        <Button title="Book Appointment" primary />
                    </div>
                    <div className="service__category">
                        <h4>Emergency Care</h4>
                        <p>
                            Could Those Creepy Crawly Nighttime Leg Sensations
                            Be A Treatable Medical Condition One Woman S Search
                            For Relief
                        </p>
                        <Button title="Book Appointment" primary />
                    </div>
                    <div className="service__category">
                        <h4>Virtual Care</h4>
                        <p>
                            Could Those Creepy Crawly Nighttime Leg Sensations
                            Be A Treatable Medical Condition One Woman S Search
                            For Relief
                        </p>
                        <Button title="Book Appointment" primary />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
