import React from "react";
import FeedbackImg from "../../assets/Images/hero/feedback.png";

const Feedback = () => {
    return (
        <section className="feedback">
            <div className="container">
                <div className="feedback__left">
                    <img src={FeedbackImg} alt="feedback-icon" />
                    <div>
                        <h3>Have some feedback for us? </h3>
                        <h3>Use our feedback process to let us know</h3>
                    </div>
                </div>
                <div className="feedback__right">
                    <h2>give feedback</h2>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
