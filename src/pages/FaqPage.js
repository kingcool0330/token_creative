import React, { useState } from "react";

// load assets
import "./FaqPage.scss";

const FaqPage = () => {
  const [faqFlags, setFaqFlags] = useState([
    {
      id: 1,
      flag: false,
    },
    {
      id: 2,
      flag: false,
    },
    {
      id: 3,
      flag: false,
    },
    {
      id: 4,
      flag: false,
    },
    {
      id: 5,
      flag: false,
    },
    {
      id: 6,
      flag: false,
    },
  ]);

  const handleFaqFlag = (item) => {
    const tempFaqFlags = faqFlags.filter((filterItem) => {
      return filterItem.id !== item.id;
    });
    tempFaqFlags.push({
      id: item.id,
      flag: !item.flag,
    });
    tempFaqFlags.sort((a, b) => {
      return a.id - b.id;
    });
    console.log(tempFaqFlags, "--temfaqflags ---", faqFlags);
    setFaqFlags(tempFaqFlags);
  };

  return (
    <div className="faq-section">
      <div className="sub-section">
        <div id="faq" className="title">
          <h1>FAQ</h1>
        </div>
        <div className="menu">
          {faqFlags.map((item, key) => {
            return (
              <div className="item" key={key}>
                <h3 className="content">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleFaqFlag(item)}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={item.flag && "rotate"}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  className={item.flag ? "description" : "description hidden"}
                >
                  <div className="des-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
