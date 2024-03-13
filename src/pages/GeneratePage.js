import React from "react";

// load assets
import LogoUrl from "../assets/image/name-logo.png";
import CloudverseUrl from "../assets/image/cloudverse.webp";
import CloudsecUrl from "../assets/image/cloudsec.webp";
import CloudnetworkUrl from "../assets/image/cloudnetwork.webp";
import "./GeneratePage.scss";

const GeneratePage = () => {
  return (
    <div className="container generate-section">
      <div className="sub-section">
        <div className="fade-right">
          <img
            className="logo"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={LogoUrl}
          />
          <h1 className="title">
            Lorem ipsum <br /> Lorem ipsum dolor
          </h1>
          <div className="flex">
            <h1 className="text">PRODUCTS</h1>
            <div className="line"></div>
          </div>
          <div className="product">
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudverseUrl}
              />
              <p className="product-text">Celtex Cloudverse</p>
            </div>
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudsecUrl}
              />
              <p className="product-text">CloudSec Router</p>
            </div>
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudnetworkUrl}
              />
              <p className="product-text">Celtex Network</p>
            </div>
          </div>
        </div>
        <div className="fade-left">
          <h1 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
