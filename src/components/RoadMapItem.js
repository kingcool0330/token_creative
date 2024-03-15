import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// load assets
import "./RoadMapItem.scss";

const RoadMapItem = ({ position, fill }) => {
  return (
    <>
      <div className="roadmapitem-section">
        <div className="item">
          {position === "left" && (
            <div className={"description " + position}>
              <h2 className="title">LAUNCH</h2>
              <p className="text">
                Fudders and people that came for a quick buck are starting to
                leave out of boredom, wholesome community is building
              </p>
            </div>
          )}
        </div>
        <div className={fill ? "mark" : "mark nobackground"}>
          {fill && <FontAwesomeIcon icon={faCheck} />}
        </div>
        <div className="item">
          {position === "right" && (
            <div className={"description " + position}>
              <h2 className="title">LAUNCH</h2>
              <p className="text">
                Fudders and people that came for a quick buck are starting to
                leave out of boredom, wholesome community is building
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="roadmapitem-mobile-section">
        <div className={fill ? "mark" : "mark nobackground"}>
          {fill && <FontAwesomeIcon icon={faCheck} />}
        </div>
        <div className="item">
          <div className="description right">
            <h2 className="title">Lorem</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMapItem;
