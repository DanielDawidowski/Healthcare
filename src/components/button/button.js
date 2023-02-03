import React from "react";
import { motion } from "framer-motion";

const Button = ({ primary, title }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
        >
            {title}
        </motion.button>
    );
};

export default Button;
