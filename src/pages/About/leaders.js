import React from "react";
import LeaderImg1 from "../../assets/Images/about/leader1.png";
import LeaderImg2 from "../../assets/Images/about/leader2.png";
import LeaderImg3 from "../../assets/Images/about/leader3.png";
import LeaderImg4 from "../../assets/Images/about/leader4.png";
import LeaderImg5 from "../../assets/Images/about/leader5.png";
import LeaderImg6 from "../../assets/Images/about/leader6.png";
import LeaderImg7 from "../../assets/Images/about/leader7.png";
import LeaderImg8 from "../../assets/Images/about/leader8.png";

const leadersArray = [
    {
        id: 0,
        name: "Michael Carson",
        role: "President & Chief Executive Officer",
        img: LeaderImg1
    },
    {
        id: 1,
        name: "Raymond Snyder",
        role: "Executive Vice President & Chief Operating Officer",
        img: LeaderImg2
    },
    {
        id: 2,
        name: "Keith Clark",
        role: "Senior Vice President & Chief Information Officer",
        img: LeaderImg3
    },
    {
        id: 3,
        name: "Lloyd Hernandez",
        role: "Group President, Physician Alignment",
        img: LeaderImg4
    },
    {
        id: 4,
        name: "Emma Kennedy",
        role: "Chief Diversity and Inclusion Officer",
        img: LeaderImg5
    },
    {
        id: 5,
        name: "Ethan Harrison",
        role: "Chief Strategy Officer",
        img: LeaderImg6
    },
    {
        id: 6,
        name: "Mamie Cooper",
        role: "Chief Nursing Officer",
        img: LeaderImg7
    },
    {
        id: 7,
        name: "Lelia Stone",
        role: "General Counsel",
        img: LeaderImg8
    }
];

const Leaders = () => {
    return (
        <section className="about__leaders container">
            <h1>Our Leaders</h1>
            <h3>A vision for the future of health care.</h3>
            <div className="about__leaders-cards">
                {leadersArray.map((el, i) => (
                    <figure key={i} className="leaders-card">
                        <div>
                            <img src={el.img} alt={el.name} />
                        </div>
                        <figcaption>
                            <b>{el.name}</b>
                            <small>{el.role}</small>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Leaders;
