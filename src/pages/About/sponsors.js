import React from "react";
import AmazonIcon from "../../assets/Images/about/Amazon.png";
import AtlassianIcon from "../../assets/Images/about/Atlassian.png";
import CanonIcon from "../../assets/Images/about/Canon.png";
import GilletteIcon from "../../assets/Images/about/Gillette.png";
import GoogleIcon from "../../assets/Images/about/Google.png";
import IntelIcon from "../../assets/Images/about/Intel.png";

const sponsorsArray = [
    {
        id: 0,
        img: AmazonIcon
    },
    {
        id: 1,
        img: AtlassianIcon
    },
    {
        id: 2,
        img: CanonIcon
    },
    {
        id: 3,
        img: GilletteIcon
    },
    {
        id: 4,
        img: GoogleIcon
    },
    {
        id: 5,
        img: IntelIcon
    }
];

const Sponsors = () => {
    return (
        <section className="about__sponsors container">
            <div className="title-divider">
                <h2>sponsor</h2>
                <hr />
            </div>
            <div className="sponsors">
                <ul>
                    {sponsorsArray.map((el, i) => (
                        <li key={i}>
                            <img src={el.img} alt="sponsor-icon" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sponsors;
