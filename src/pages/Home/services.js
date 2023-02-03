import React from "react";
import { motion } from "framer-motion";
import Service2Img from "../../assets/Images/hero/services2.png";
import Ticket from "../../assets/SVG/ticket.svg";
import Clock from "../../assets/SVG/clock.svg";
import FirstIad from "../../assets/SVG/firstAid.svg";
import Button from "../../components/button/button";

const Services = ({ scrollRef }) => {
    return (
        <section className="home__services">
            <motion.div
                className="home__services-left"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 1 }
                }}
                viewport={{ root: scrollRef }}
            >
                <motion.div
                    className="services__card"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.6, duration: 1 }
                    }}
                    viewport={{ root: scrollRef }}
                >
                    <motion.div
                        className="services__card-header"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.3, duration: 1 }
                        }}
                        viewport={{ root: scrollRef }}
                    >
                        <img src={Service2Img} alt="avatar" />
                        <div>
                            <h4>
                                <b>Lisandro Matos</b>
                            </h4>
                            <h5>
                                <b>approved</b>
                            </h5>
                        </div>
                    </motion.div>
                    <div className="services__card-content">
                        <ul>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 1, duration: 0.5 }
                                }}
                                viewport={{ root: scrollRef }}
                            >
                                <img src={Ticket} alt="ticket" />
                                <b>20 - C1</b>
                                <small>3 patients remaining</small>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 1.2, duration: 0.5 }
                                }}
                                viewport={{ root: scrollRef }}
                            >
                                <img src={Clock} alt="clock" />
                                <div>
                                    <b>Sun, 26 Nov 2018</b>
                                    <span>08:00 - 09:00</span>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 1.4, duration: 0.5 }
                                }}
                                viewport={{ root: scrollRef }}
                            >
                                <img src={FirstIad} alt="first aid" />
                                <span>Emergency Care</span>
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
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
