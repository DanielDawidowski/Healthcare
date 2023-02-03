import React from "react";
import { motion } from "framer-motion";
import Video from "../../assets/Video/video.mp4";

const HomeVideo = ({ scrollRef }) => {
    return (
        <div className="container">
            <motion.div
                className="video-container"
                initial={{ scale: 0 }}
                whileInView={{
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        delay: 0.6,
                        duration: 0.6
                    }
                }}
                viewport={{
                    root: scrollRef
                }}
            >
                <iframe src={Video} type="video/mp4" title="mp4"></iframe>
            </motion.div>
        </div>
    );
};

export default HomeVideo;
