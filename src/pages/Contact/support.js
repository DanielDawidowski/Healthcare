import React from "react";

const Support = () => {
    return (
        <section className="contact__support container">
            <div className="contact__support-card">
                <h3>
                    <b>Issues with Oval Smart Healthcare</b>
                </h3>
                <p>
                    If you have forgotten your Oval password, or are having
                    problems using or logging into the Oval app, please contact
                    the <b>Oval Smart Healthcare Help Desk</b> at{" "}
                    <b>
                        <u>844-552-4278</u>
                    </b>{" "}
                    Please note, COVID-19 Vaccine scheduling is not available
                    through the Oval Smart Healthcare Help Desk.
                </p>
            </div>
            <div className="contact__support-card">
                <h3>
                    <b>Medical Emergencies</b>
                </h3>
                <p>
                    If you have a medical emergency,<b>call 911</b> or go to the
                    nearest emergency department.
                </p>
            </div>
        </section>
    );
};

export default Support;
