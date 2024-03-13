import React from "react";

// load assets
import VideoUrl from "../assets/video/network.mp4";
import "./DetailFirstPage.scss";

const DetailFirstPage = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="left">
          <video
            src={VideoUrl}
            className="video-tag"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="right">
          <div className="title">
            <h1>Lorem ipsum</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <a
            target="_blank"
            href="https://docs.opsec.computer/category/opsec-cloudverse"
            rel="noreferrer"
            className="learn-btn"
          >
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailFirstPage;
