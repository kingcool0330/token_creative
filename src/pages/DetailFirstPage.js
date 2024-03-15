import React from "react";

// load assets
import VideoUrl from "../assets/video/cloudverse-demo.mp4";
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
            <h1>Celtex Cloudverse</h1>
            <p className="text">
              Connecting millions of people around the globe using advanced
              cloud based products ranging from nodes, to validators, mining
              opportunities and computational protocols.
              <br />
              <br />
              Connecting millions of people around the globe using advanced
              cloud based products ranging from nodes, to validators, mining
              opportunities and computational protocols.
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
