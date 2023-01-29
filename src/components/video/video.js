import React from "react";
import Video from "../../assets/Video/video.mp4";

const HomeVideo = () => {
    return (
        <div className="container">
            <div className="video-container">
                <iframe src={Video} type="video/mp4" title="mp4"></iframe>
            </div>
        </div>
    );
};

export default HomeVideo;
