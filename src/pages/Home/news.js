import React from "react";
import Img1 from "../../assets/Images/hero/news1.png";
import Img2 from "../../assets/Images/hero/news2.png";
import Img3 from "../../assets/Images/hero/news3.png";
import Img4 from "../../assets/Images/hero/news4.png";

const newsArray = [
    {
        id: 0,
        title: "Emergency department lull as Victorians stay home",
        disc: "Emergency department presentations at The Alfred and Sandringham…",
        img: Img1
    },
    {
        id: 1,
        title: "The Alfred prepares for COVID-19",
        disc: "In response to the COVID-19 global health crisis, The Alfred has significa…",
        img: Img2
    },
    {
        id: 2,
        title: "Alfred Health Graduate Nurse Program Information",
        disc: "The initial part of this event includes short presentations & then an information",
        img: Img3
    },
    {
        id: 3,
        title: "Nursing Scholarship Lunch – Advancing Nursing Leadership",
        disc: "While our annual luncheon is a core part of scholarship fundraising",
        img: Img4
    }
];

const News = () => {
    return (
        <section className="home__news">
            <div className="home__news-inner">
                <h2>news</h2>
                <h1>The latest updates about Covid-19</h1>
                <div className="home__news-cards">
                    {newsArray.map((el, i) => (
                        <figure key={el.id} className="home__news-card">
                            <img src={el.img} alt={el.title} />
                            <figcaption>
                                <b>
                                    <p>{el.title}</p>
                                </b>
                                <p>{el.disc}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
