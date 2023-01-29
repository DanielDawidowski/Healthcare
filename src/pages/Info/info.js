import React from "react";
import Button from "../../components/button/button";

const infoArray = [
    {
        id: 0,
        title: "Spiritual Care",
        disc: "An unexpected twist or turn can be an anxious and lonely time, not only for loved ones, but friends and families. Discover more about healing body, mind and spirit."
    },
    {
        id: 1,
        title: "Quality & Patient Safety",
        disc: "As the region’s leading health care provider, Centura Health is firmly committed to quality and patient safety."
    },
    {
        id: 2,
        title: "Patient Rights & Policies",
        disc: "You have the right and responsibility to be informed and to participate in every decision that involves your care and treatment. If you are unable to do so, then your rights can be legally transferred and exercised by someone that you designate to make decisions on your behalf. View the patient bill of rights."
    },
    {
        id: 3,
        title: "Patient Privacy",
        disc: "Your personal medical information is private. Centura Health understands how important your personal medical information is to you. We know you are concerned with how that information might be used, the way in which it is disclosed and how you can access that information. Read about our patient privacy practices."
    },
    {
        id: 4,
        title: "Billing & Financial Services",
        disc: "You may have questions about your financial responsibility and what exactly your insurance may cover. View information about billing and financial services."
    },
    {
        id: 5,
        title: "Advance Directives",
        disc: "Documenting your medical decisions about medical treatment through a written advance directive is the best way to ensure your wishes are recognized, followed and met. We recommend you discuss medical decisions and your thoughts with your physician, family members and friends. Read about advance directives."
    }
];

const InfoComponent = () => {
    return (
        <section className="info__info">
            <div className="container">
                <h1>Next level care</h1>
                <p>
                    Centura Health believes that the best health care is
                    designed with you in mind. We work hard to provide you with
                    resources and solutions for every step in your health
                    journey. And because the best health care is prevention, we
                    put as much emphasis on helping keep you well as we do on
                    getting you well.
                </p>
            </div>
            <div className="info__cards container">
                {infoArray.map((el, i) => (
                    <div key={i} className="info__card">
                        <h1>{el.title}</h1>
                        <p>{el.disc}</p>
                        <Button title="Read more" primary />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfoComponent;
