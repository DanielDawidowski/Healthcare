import React from "react";
import Button from "../../components/button/button";

const infoArray = [
    "Make an Appointment",
    "Media Relations",
    "Customer Service and Bill Pay",
    "ONC Cures Act",
    "Oval Health Online"
];

const Info = () => {
    return (
        <section className="contact__info container">
            {infoArray.map((el, i) => (
                <div key={i} className="contact__info-accordion">
                    <details>
                        <summary>
                            <b>{el}</b>
                        </summary>
                        <p>
                            Fast, same-day care for illnesses and injuries from
                            sudden fevers and stomach upsets to cuts, rashes and
                            sprains.
                        </p>
                        <div>
                            <Button title="Book Appointment" primary />
                        </div>
                    </details>
                </div>
            ))}
        </section>
    );
};

export default Info;
