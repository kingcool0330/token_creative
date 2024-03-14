import React from "react";
import RoadMapItem from "../components/RoadMapItem";

// load assets
import "./RoadmapPage.scss";

const tempList = ["0", "1", "2", "3", "0", "1", "2", "3", "0"];

const RoadmapPage = () => {
  return (
    <div className="container roadmap-section">
      <div className="sub-section">
        <div className="title">
          <h2>Our RoadMap</h2>
          <span>RoadMap</span>
        </div>
        <div className="content">
          <div className="stickLine"></div>
          {tempList?.map((item, key) => {
            return (
              <RoadMapItem
                position={key % 2 === 0 ? "right" : "left"}
                fill={key < tempList.length / 2 ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
