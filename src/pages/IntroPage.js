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
      <div className="intro">
        <div className="description">
          <h1 className="first">
            OpSec Ecosystem is a privacy-focused network dedicated to making
            operations on the cloud very seamless and efficient.
          </h1>
          <h1 className="second">
            OpSec decentralized cloud solutions range from high level nodes,
            light speed router devices, GPUs and hosting services.
          </h1>
        </div>
        <div className="bottom-description">
          <h1 className="des-title">Pioneering the Next Generation</h1>
          <h1 className="des-title-second">
            Decentralized <br /> Supercomputer Applications
          </h1>
          <h1 className="des-title-second-hidden">
            OpSec Ecosystem is a privacy-focused network dedicated to making
            operations on the cloud very seamless and efficient. OpSec
            decentralized cloud solutions range from high level nodes, light
            speed router devices, GPUs and hosting services.
          </h1>
          <a
            target="_blank"
            href="https://docs.opsec.computer"
            rel="noreferrer"
            className="dec-btn"
          >
            <button className="btn docs-btn">
              <span>START BUILDING</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
