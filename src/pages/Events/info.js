import React, { useState, useEffect } from "react";
import Button from "../../components/button/button";
import PinIcon from "../../assets/Images/footer/pin.png";
import ClockIcon from "../../assets/SVG/clock.svg";

const events = [
    {
        id: 1,
        title: "Zoom BIG for Life!",
        region: "Littleton",
        hospital: "Adventist Hospital",
        time: "12:30 PM - 1:30 PM",
        month: "Sep",
        day: "04",
        disc: "Join us for a virtual tour of our New Life Center and the opportunity to learn more about our beautiful birth center and the care and amenities you can expect during your delivery. Once you register for the tour, you will be sent a link to access the tour. We will not be holding in person tours in order to keep moms, babies and staff safe."
    },
    {
        id: 2,
        title: "Understanding Breastfeeding eClass",
        region: "Avista",
        hospital: "Adventist Hospital",
        time: "05:30 AM",
        month: "Jun",
        day: "24",
        disc: "Understanding Birth eClass This interactive online course covers essential information on labor and more, and highlights ways partners can help throughout the process. You’ll also get a sense of what labor is really like as you watch several birth stories. You’ll even have an opportunity to create your own birth plan! Allow 4-6 hours to complete. Once payment is received you will…"
    },
    {
        id: 3,
        title: "Understanding Birth eClass",
        region: "Church Ranch",
        hospital: "Neighborhood Health Center",
        time: "10:00 AM - 11:00 AM",
        month: "Jul",
        day: "12",
        disc: "The eClass, Understanding Birth, is a unique online learning experience that allows wide-ranging childbirth information in the comfort of your home."
    },
    {
        id: 4,
        title: "Virtual BirthPlace Tour",
        region: "Littleton",
        hospital: "Adventist Hospital",
        time: "05:30 AM",
        month: "Jul",
        day: "16",
        disc: "Learn essential information about a multiple pregnancy. Schedule a class with our instructor, who is a NICU nurse with twins of her own. She will cover material not addressed in a standard childbirth class."
    },
    {
        id: 5,
        title: "Zoom BIG for Life!",
        region: "Littleton",
        hospital: "Welcome Health Center",
        time: "12:30 PM - 1:30 PM",
        month: "Sep",
        day: "16",
        disc: "Join us for a virtual tour of our New Life Center and the opportunity to learn more about our beautiful birth center and the care and amenities you can expect during your delivery. Once you register for the tour, you will be sent a link to access the tour. We will not be holding in person tours in order to keep moms, babies and staff safe."
    },
    {
        id: 6,
        title: "Virtual CPR",
        region: "Church Ranch",
        hospital: "Welcome Health Center",
        time: "12:30 PM - 1:30 PM",
        month: "Nov",
        day: "26",
        disc: "Learn essential information about a multiple pregnancy. Schedule a class with our instructor, who is a NICU nurse with twins of her own. She will cover material not addressed in a standard childbirth class."
    },
    {
        id: 7,
        title: "Virtual Birth eClass",
        region: "Avista",
        hospital: "Neighborhood Health Center",
        time: "11:00 AM - 15:00 PM",
        month: "Dec",
        day: "11",
        disc: "The eClass, Understanding Birth, is a unique online learning experience that allows wide-ranging childbirth information in the comfort of your home."
    }
];

const Info = () => {
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [hospital, setHospital] = useState();
    const [region, setRegion] = useState();

    const hospitals = Array.from(
        new Set(events.map((event) => event.hospital))
    );

    const regions = Array.from(new Set(events.map((event) => event.region)));

    useEffect(() => {
        setFilteredEvents(
            events.filter((event) => {
                return (
                    (!hospital || hospital === event.hospital) &&
                    (!region || region === event.region)
                );
            })
        );
    }, [hospital, region]);

    const clearFilters = () => {
        setHospital();
        setRegion();
    };

    return (
        <section className="events__news container">
            <div className="events__news-title">
                <h1>Upcoming Events</h1>
            </div>
            <div className="events__news-filters">
                <select
                    defaultValue="DEFAULT"
                    onChange={(e) => setHospital(e.target.value)}
                >
                    <option value="DEFAULT" disabled>
                        Hospital
                    </option>

                    {hospitals.map((hospital) => {
                        return (
                            <option defaultValue={hospital} key={hospital}>
                                {hospital}
                            </option>
                        );
                    })}
                </select>

                <select
                    defaultValue="DEFAULT"
                    onChange={(e) => setRegion(e.target.value)}
                >
                    <option value="DEFAULT" disabled>
                        Region
                    </option>

                    {regions.map((region) => {
                        return (
                            <option defaultValue={region} key={region}>
                                {region}
                            </option>
                        );
                    })}
                </select>

                <button onClick={clearFilters}>Clear All filters</button>
            </div>
            <div className="events__news-output">
                <ul>
                    {filteredEvents
                        .sort(
                            (a, b) =>
                                new Date(a.date).getTime() -
                                new Date(b.date).getTime()
                        )
                        .map((event) => {
                            const {
                                title,
                                region,
                                hospital,
                                id,
                                month,
                                day,
                                time,
                                disc
                            } = event;
                            return (
                                <li key={id} className="event__card">
                                    <div className="event__date">
                                        <small>{month}</small>
                                        <b>{day}</b>
                                    </div>
                                    <div className="event__content">
                                        <div className="event__title">
                                            <b>{title}</b>
                                        </div>
                                        <div className="event__location">
                                            <div>
                                                <img src={PinIcon} alt="pin" />
                                                <h5>
                                                    {region}
                                                    &nbsp;&nbsp;&nbsp;
                                                    {hospital}
                                                </h5>
                                            </div>
                                            <div>
                                                <img
                                                    src={ClockIcon}
                                                    alt="clock"
                                                />
                                                <h5>{time}</h5>
                                            </div>
                                        </div>
                                        <div className="event__discription">
                                            <p>{disc}</p>
                                        </div>
                                    </div>
                                    <div className="event__info">
                                        <Button title="More Info" primary />
                                    </div>
                                </li>
                            );
                        })}
                    {filteredEvents.length === 0 && (
                        <div className="no-result">
                            <h3>No events matching the filter</h3>
                        </div>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Info;
