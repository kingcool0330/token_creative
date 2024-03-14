import React from "react";

// load assets
import BurnImageUrl from "../assets/image/tokenomics/burn-1.png.webp";
import SupplyImageUrl from "../assets/image/tokenomics/supply-1.png.webp";
import TaxesImageUrl from "../assets/image/tokenomics/taxes-1.png.webp";
import TeamImageUrl from "../assets/image/tokenomics/team-1.png.webp";
import "./TokenomicsPage.scss";

const TokenomicsPage = () => {
  return (
    <div className="container tokenomics-section">
      <div className="sub-section">
        <div className="title-section">
          <h1>Tokenomics</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="flex">
            <h1 class="text">Key Features</h1>
            <div class="line"></div>
          </div>
        </div>
        <div className="content">
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={SupplyImageUrl}
              />
            </div>
            <div className="description">
              <h3>Supply</h3>
              <p>
                Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={BurnImageUrl}
              />
            </div>
            <div className="description">
              <h3>Burn</h3>
              <p>
                Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={TaxesImageUrl}
              />
            </div>
            <div className="description">
              <h3>Taxes</h3>
              <p>
                Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={TeamImageUrl}
              />
            </div>
            <div className="description">
              <h3>Team</h3>
              <p>
                Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;
