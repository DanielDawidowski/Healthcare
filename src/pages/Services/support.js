import React from "react";
import ServicesImg1 from "../../assets/Images/services/services1.png";
import ServicesImg2 from "../../assets/Images/services/services2.png";
import ServicesImg3 from "../../assets/Images/services/services3.png";
import ServicesImg4 from "../../assets/Images/services/services4.png";
import ServicesImg5 from "../../assets/Images/services/services5.png";
import ServicesImg6 from "../../assets/Images/services/services6.png";
import ServicesImg7 from "../../assets/Images/services/services7.png";
import ServicesImg8 from "../../assets/Images/services/services8.png";

const horizontalArray = [
    {
        id: 0,
        title: "Behavioral and Mental Health Services",
        disc: "Common Conditions and Treatments",
        cases: ["Medical Therapies", "Professional Treatment", "Teletherapy"],
        img: ServicesImg1
    },
    {
        id: 1,
        title: "Primary Care and Family Medicine Physicians",
        disc: "Common Conditions and Treatments",
        cases: ["ADHD and ADD", "Common Cold", "Flu", "Headaches", "Sinusitis"],
        img: ServicesImg2
    },
    {
        id: 2,
        title: "Cancer Care and Oncology",
        disc: "Common Conditions and Treatments",
        cases: ["Medical Therapies", "Professional Treatment"],
        img: ServicesImg3
    },
    {
        id: 3,
        title: "Allergy, Immunology and Sinus",
        disc: "Common Conditions and Treatments",
        cases: ["Drug Allergy", "Food Allergy", "Contact Dermatitis"],
        img: ServicesImg4
    },
    {
        id: 4,
        title: "Audiology and Hearing",
        disc: "Common Conditions and Treatments",
        cases: ["Otosclerosis", "Acoustic Neuroma", "Ear Infection"],
        img: ServicesImg5
    },
    {
        id: 5,
        title: "Autoimmune Diseases and Disorders",
        disc: "Common Conditions and Treatments",
        cases: ["Diabetes", "IBD", "Sclerosis"],
        img: ServicesImg6
    },

    {
        id: 6,
        title: "Blood Cancer and Hematology",
        disc: "Common Conditions and Treatments",
        cases: ["Chemotherapy", "Immunotherapy"],
        img: ServicesImg7
    },
    {
        id: 7,
        title: "Breast Cancer Care",
        disc: "Common Conditions and Treatments",
        cases: ["Chemotherapy", "Radiation Therapy"],
        img: ServicesImg8
    }
];

const Support = () => {
    let vert = true;
    const randomElements = (array, num, vert = false) => {
        let randomEl = array.sort(() => 0.5 - Math.random()).slice(-num);
        return randomEl.map((el, i) => (
            <figure
                key={i}
                className={vert ? "vertical-card" : "horizontal-card"}
            >
                <img src={el.img} alt={el.title} />
                <figcaption>
                    <small>{el.title}</small>
                    {vert && <p>{el.disc}</p>}
                    <div>
                        {vert &&
                            el.cases.map((el, i) => <span key={i}>{el}</span>)}
                    </div>
                </figcaption>
            </figure>
        ));
    };

    return (
        <section className="services__support container">
            <div className="services__support-title ">
                <h1>Featured Services</h1>
            </div>
            <div className="support__cards-horizontal ">
                {randomElements(horizontalArray, 3)}
            </div>
            <div className="support__cards-vertical ">
                {randomElements(horizontalArray, 8, vert)}
            </div>
        </section>
    );
};

export default Support;
