import React from "react";
import Img1 from "../../assets/Images/hero/home-info1.png";
import Img2 from "../../assets/Images/hero/home-info2.png";
import Img3 from "../../assets/Images/hero/home-info3.png";

const infoArray = [
    {
        id: 0,
        title: "Book an appontments",
        img: Img1
    },
    {
        id: 1,
        title: "Chat with your doc & team",
        img: Img2
    },
    {
        id: 2,
        title: "All your health in one place",
        img: Img3
    }
];

const Info = () => {
    return (
        <section className="home__info container">
            <div className="title-divider">
                <h2>smart & hassle-free</h2>
                <hr />
            </div>
            <div className="home__info-title">
                <h1>A friendlier healthcare experience</h1>
            </div>
            <div className="home__info-cards">
                {infoArray.map((el, i) => (
                    <figure key={i} className="home__info-card">
                        <img src={el.img} alt={el.title} />
                        <figcaption>
                            <b>{el.title}</b>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Info;
