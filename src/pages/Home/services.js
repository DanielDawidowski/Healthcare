import React from "react";
import Service2Img from "../../assets/Images/hero/services2.png";
import Ticket from "../../assets/SVG/ticket.svg";
import Clock from "../../assets/SVG/clock.svg";
import FirstIad from "../../assets/SVG/firstAid.svg";
import Button from "../../components/button/button";

const Services = () => {
    return (
        <section className="home__services">
            <div className="home__services-left">
                <div className="services__card">
                    <div className="services__card-header">
                        <img src={Service2Img} alt="avatar" />
                        <div>
                            <h4>
                                <b>Lisandro Matos</b>
                            </h4>
                            <h5>
                                <b>approved</b>
                            </h5>
                        </div>
                    </div>
                    <div className="services__card-content">
                        <ul>
                            <li>
                                <img src={Ticket} alt="ticket" />
                                <b>20 - C1</b>
                                <small>3 patients remaining</small>
                            </li>
                            <li>
                                <img src={Clock} alt="clock" />
                                <div>
                                    <b>Sun, 26 Nov 2018</b>
                                    <span>08:00 - 09:00</span>
                                </div>
                            </li>
                            <li>
                                <img src={FirstIad} alt="first aid" />
                                <span>Emergency Care</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="home__services-right">
                <h2>OUR SERVICE CATEGORIES</h2>
                <div className="services__slider">
                    <details>
                        <summary>
                            <b>Emergency Care</b>
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
            </div>
        </section>
    );
};

export default Services;
