import React from "react";
import AppleButton from "../../assets/Images/hero/appStore-button.png";
import GoogleButton from "../../assets/Images/hero/googlePlay-button.png";

const Apps = () => {
    return (
        <section className="home__apps">
            <div className="title-divider container">
                <h2>mobile app</h2>
                <hr />
            </div>
            <div className="home__apps-content container">
                <div className="apps-left">
                    <h1>All your health at your fingertips</h1>
                    <h3>
                        No paperwork, no hassle. We keep things digital and
                        easy.
                    </h3>
                </div>
                <div className="apps-right">
                    <img src={AppleButton} alt="apple-btn" />
                    <img src={GoogleButton} alt="google-btn" />
                </div>
            </div>
        </section>
    );
};

export default Apps;
