import React from "react";

// load assets
import introVideoUrl from "../assets/video/bg-hero.mp4";
import MagnicficCanvas from "../components/MagnicficCanvas";
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
      <div className="canvas-section">
        <MagnicficCanvas />
      </div>
    </div>
  );
};

export default IntroPage;
