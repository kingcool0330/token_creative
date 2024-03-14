import React from "react";

// load assets
import introVideoUrl from "../assets/video/bg-hero.mp4";
import "./IntroPage.scss";

const IntroPage = () => {
  return (
    <div className="intro-section">
      <video
        src={introVideoUrl}
        className="video-tag"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
};

export default IntroPage;
