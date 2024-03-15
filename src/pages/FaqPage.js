import React, { useState } from "react";

// load assets
import "./FaqPage.scss";

const FaqPage = () => {
  const [faqFlags, setFaqFlags] = useState([
    {
      id: 1,
      flag: 0,
    },
    {
      id: 2,
      flag: 0,
    },
    {
      id: 3,
      flag: 0,
    },
    {
      id: 4,
      flag: 0,
    },
    {
      id: 5,
      flag: 0,
    },
    {
      id: 6,
      flag: 0,
    },
  ]);

  const handleFaqFlag = (item) => {
    const tempFaqFlags = faqFlags.filter((filterItem) => {
      return filterItem.id !== item.id;
    });
    if (item.flag === 1) {
      tempFaqFlags.push({
        id: item.id,
        flag: 2,
      });
      tempFaqFlags.sort((a, b) => {
        return a.id - b.id;
      });
      setFaqFlags(tempFaqFlags);

      setTimeout(() => {
        const tempFaqFlags = faqFlags.filter((filterItem) => {
          return filterItem.id !== item.id;
        });
        tempFaqFlags.push({
          id: item.id,
          flag: 0,
        });
        tempFaqFlags.sort((a, b) => {
          return a.id - b.id;
        });
        setFaqFlags(tempFaqFlags);
      }, 100);
    } else {
      tempFaqFlags.push({
        id: item.id,
        flag: 1,
      });
      tempFaqFlags.sort((a, b) => {
        return a.id - b.id;
      });
      setFaqFlags(tempFaqFlags);
    }
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
                    What sets Celtex apart from other project deployment
                    platforms?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={item.flag === 1 ? "rotate" : ""}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  className={
                    item.flag === 1
                      ? "description"
                      : item.flag === 2
                      ? "description hiddenbefore"
                      : "description hidden"
                  }
                >
                  <div className="des-content">
                    One unique feature of Celtex is its decentralized
                    architecture, which allows users total control over their
                    projects. Because of its decentralization, Celtex stands
                    apart in the field of project deployment because of its
                    increased security and autonomy
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
