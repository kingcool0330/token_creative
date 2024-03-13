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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt et dolore magna aliqua.
          </h1>
          <h1 className="second">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt et dolore magna aliqua.
          </h1>
        </div>
        <div className="bottom-description">
          <h1 className="des-title">Lorem ipsum dolor</h1>
          <h1 className="des-title-second">
            Lorem ipsum
            <br /> Lorem ipsum dolor
          </h1>
          <h1 className="des-title-second-hidden">
            Celtex Ecosystem is a privacy-focused network dedicated to making
            operations on the cloud very seamless and efficient. Celtex
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
              <span>COMING SOON</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
