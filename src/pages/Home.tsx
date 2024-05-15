import "./Home.css";
import adultOnHorse from "../assets/adult-on-horse.png";
import twoRidingHorse from "../assets/two-riding-horse.png";
import horseJumping from "../assets/horse-jumping.png";
import huggingHorse from "../assets/hugging-horse.png";
import React, { forwardRef } from "react";

const Home = forwardRef(
  (
    props: {
      missionRef: React.RefObject<HTMLDivElement>;
      navHeight: number;
      setUsedLink: React.Dispatch<React.SetStateAction<boolean>>;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        props.setUsedLink(true);
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    return (
      <div
        ref={ref}
        className="home-container"
        style={{
          scrollMarginTop: props.navHeight - 1,
        }}
      >
        <div className="home-main-container">
          <div className="home-stones-container">
            <div className="home-stone-0-container">
              <g className="home-mask-0">
                <img className="home-stone-0-image" src={adultOnHorse} />
              </g>
            </div>
            <div className="home-stone-1-container">
              <g className="home-mask-1">
                <img className="home-stone-1-image" src={twoRidingHorse} />
              </g>
            </div>
            <div className="home-stone-2-container">
              <g className="home-mask-2">
                <img className="home-stone-2-image" src={horseJumping} />
              </g>
            </div>
            <div className="home-stone-3-container">
              <g className="home-mask-3">
                <img className="home-stone-3-image" src={huggingHorse} />
              </g>
            </div>
          </div>
          <div className="home-text-container">
            <div className="text-right title">
              HORSEBACK<br></br>RIDING
            </div>
            <div className="home-subtitle-main">One step at a time</div>
          </div>
        </div>
        <div className="home-button-container">
          <button
            className="home-next-button"
            onClick={() => handleClick(props.missionRef)}
          >
            TAKE THE FIRST STEP
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="29"
            viewBox="0 0 92 29"
            fill="none"
          >
            <line
              x1="0.249939"
              y1="1.20966"
              x2="46.3211"
              y2="27.8089"
              stroke="black"
            />
            <line
              x1="45.6788"
              y1="27.5566"
              x2="91.75"
              y2="0.957378"
              stroke="black"
            />
          </svg>
        </div>
      </div>
    );
  }
);

export default Home;
