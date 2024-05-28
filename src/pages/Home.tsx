import "./Home.css";
import adultOnHorse from "../assets/adult-on-horse.avif";
import twoRidingHorse from "../assets/two-riding-horse.avif";
import horseJumping from "../assets/horse-jumping.avif";
import huggingHorse from "../assets/hugging-horse.avif";
import React, { forwardRef } from "react";
import useImagePreloader from "../hooks/useImagePreloader";

//https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
const preloadSrcList: string[] = [
  adultOnHorse,
  twoRidingHorse,
  horseJumping,
  huggingHorse,
];

const Home = forwardRef(
  (
    props: {
      missionRef: React.RefObject<HTMLDivElement>;
      navHeight: number;
      setUsedLink: React.Dispatch<React.SetStateAction<boolean>>;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { imagesPreloaded } = useImagePreloader(preloadSrcList);

    const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        props.setUsedLink(true);
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (!imagesPreloaded) {
      if (props.isMobile) {
        return (
          <div
            ref={ref}
            className="home-container"
            style={{
              scrollMarginTop: props.navHeight - 1,
            }}
          >
            <div className="home-main-container">
              <div
                style={{ marginBottom: "-100px", marginTop: "-45px" }}
                className="flex justify-center align-center self-stretch"
              >
                <div className="home-stone-0-container">
                  <g className="home-mask-0-mobile">
                    <p>Image loading...</p>
                  </g>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end self-stretch">
                <div className="text-center title self-stretch">
                  HORSEBACK<br></br>RIDING
                </div>
                <div className="home-subtitle-main bottom-0">
                  One step at a time
                </div>
              </div>
            </div>
            <div className="home-button-container pt-6">
              <button
                className="home-next-button text-button"
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
                  <p>Image loading...</p>
                </g>
              </div>
              <div className="home-stone-1-container">
                <g className="home-mask-1">
                  <p>Image loading...</p>
                </g>
              </div>
              <div className="home-stone-2-container">
                <g className="home-mask-2">
                  <p>Image loading...</p>
                </g>
              </div>
              <div className="home-stone-3-container">
                <g className="home-mask-3">
                  <p>Image loading...</p>
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
              className="home-next-button text-button"
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

    if (props.isMobile) {
      return (
        <div
          ref={ref}
          className="home-container"
          style={{
            scrollMarginTop: props.navHeight - 1,
          }}
        >
          <div className="home-main-container">
            <div
              style={{ marginBottom: "-100px", marginTop: "-45px" }}
              className="flex justify-center align-center self-stretch"
            >
              <div className="home-stone-0-container">
                <g className="home-mask-0-mobile">
                  <img className="home-stone-0-image" src={adultOnHorse} />
                </g>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end self-stretch">
              <div className="text-center title self-stretch">
                HORSEBACK<br></br>RIDING
              </div>
              <div className="home-subtitle-main bottom-0">
                One step at a time
              </div>
            </div>
          </div>
          <div className="home-button-container pt-6">
            <button
              className="home-next-button text-button"
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
            className="home-next-button text-button"
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
