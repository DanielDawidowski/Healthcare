import React from "react";

const Button = ({ primary, title }) => {
    return (
        <button className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}>
            {title}
        </button>
    );
};

export default Button;
