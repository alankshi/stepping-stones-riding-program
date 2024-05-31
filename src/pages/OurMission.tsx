import "./OurMission.css";
import horseConga from "../assets/horse-conga.mp4";
import React, { forwardRef, useState } from "react";
import missionText from "../assets/editable-content/our-mission-subtitle.txt";

const OurMission = forwardRef(
  (
    props: {
      navHeight: number;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [subtitleText, setSubtitleText] = useState<string>("Loading...");

    fetch(missionText)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setSubtitleText(responseText);
      });

    if (props.isMobile) {
      return (
        <div
          ref={ref}
          className="mission-our-mission-container"
          style={{
            scrollMarginTop: props.navHeight - 1,
          }}
        >
          <div
            style={{ height: "85vh" }}
            className="overflow-hidden flex justify-center items-center"
          >
            <video loop autoPlay muted className="mission-video-background">
              <source src={horseConga} type="video/mp4"></source>
            </video>
          </div>
          <div className="mission-text-container">
            <h1 className="title text-center text-white title-mobile">
              Our Mission
            </h1>
            <p className="subtitle text-center text-white mission-text whitespace-pre-line">
              {subtitleText}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className="mission-our-mission-container"
        style={{
          scrollMarginTop: props.navHeight - 1,
        }}
      >
        <div className="mission-video-container">
          <video loop autoPlay muted className="mission-video-background">
            <source src={horseConga} type="video/mp4"></source>
          </video>
        </div>
        <div className="mission-text-container">
          <h1 className="title text-center text-white">Our Mission</h1>
          <p className="subtitle text-center text-white mission-text whitespace-pre-line">
            {subtitleText}
          </p>
        </div>
      </div>
    );
  }
);

export default OurMission;
