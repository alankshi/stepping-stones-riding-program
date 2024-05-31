import "./Volunteering.css";
import encirclingHorse from "../assets/encircling-horse.avif";
import pullingWheelbarrow from "../assets/pulling-wheelbarrow.avif";
import horsesDrinking from "../assets/horses-drinking.jpg";
import React, { forwardRef, useRef, useState } from "react";

import volunteeringSubtitle from "../assets/editable-content/volunteering-subtitle.txt";
import volunteeringParLeft from "../assets/editable-content/volunteering-paragraph-left.txt";
import volunteeringParCenter from "../assets/editable-content/volunteering-paragraph-center.txt";
import volunteeringParRight from "../assets/editable-content/volunteering-paragraph-right.txt";

const Volunteering = forwardRef(
  (
    props: {
      navHeight: number;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const img1Ref: React.RefObject<HTMLImageElement> =
      useRef<HTMLImageElement>(null);
    const img2Ref: React.RefObject<HTMLImageElement> =
      useRef<HTMLImageElement>(null);
    const img3Ref: React.RefObject<HTMLImageElement> =
      useRef<HTMLImageElement>(null);

    const [subtitle, setSubtitle] = useState<string>("Loading...");
    const [parLeft, setParLeft] = useState<string>("Loading...");
    const [parCenter, setParCenter] = useState<string>("Loading...");
    const [parRight, setParRight] = useState<string>("Loading...");

    const img1width: number | undefined = img1Ref.current?.clientWidth;
    const img2width: number | undefined = img2Ref.current?.clientWidth;
    const img3width: number | undefined = img3Ref.current?.clientWidth;

    fetch(volunteeringSubtitle)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setSubtitle(responseText);
      });
    fetch(volunteeringParLeft)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setParLeft(responseText);
      });
    fetch(volunteeringParCenter)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setParCenter(responseText);
      });
    fetch(volunteeringParRight)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setParRight(responseText);
      });

    if (props.isMobile) {
      return (
        <div
          ref={ref}
          style={{
            scrollMarginTop: props.navHeight - 1,
          }}
          className="volunteering-container-mobile"
        >
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="volunteering-top-text-container flex flex-col items-center absolute top-0 w-full p-2 gap-2.5"
          >
            <h1 className="title-mobile title text-center text-white text-stretch">
              Volunteering
            </h1>
            <p className="subtitle text-white text-center text-stretch whitespace-pre-line">
              {subtitle}
            </p>
          </div>
          <img
            ref={img3Ref}
            src={horsesDrinking}
            className="w-full"
            alt="4 horses surround a bucket of water, looking up from drinking at the camera."
          ></img>
          <div className="volunteering-bottom-text-container text-large text-white p-4 text-center whitespace-pre-line">
            {parLeft}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        style={{
          scrollMarginTop: props.navHeight - 1,
        }}
        className="volunteering-container"
      >
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          className="flex flex-col items-center absolute top-0 w-full p-2"
        >
          <h1 className="title text-center text-white text-stretch">
            Volunteering
          </h1>
          <p className="subtitle text-white text-center text-stretch whitespace-pre-line">
            {subtitle}
          </p>
        </div>
        <div className="volunteering-img-container">
          <img
            ref={img1Ref}
            src={encirclingHorse}
            className="volunteering-img"
            alt="7 adults surround a horse, listening to someone talking not shown in the image."
          ></img>
          <img
            ref={img2Ref}
            src={pullingWheelbarrow}
            className="volunteering-img"
            alt="5 children work together to pull a wheelbarrow away from the camera towards a metal gate."
          ></img>
          <img
            ref={img3Ref}
            src={horsesDrinking}
            className="volunteering-img"
            alt="4 horses surround a bucket of water, looking up from drinking at the camera."
          ></img>
        </div>
        <div className="volunteering-bottom-text-container">
          <p
            className="text-large text-white p-4 whitespace-pre-line"
            style={{ width: img1width }}
          >
            {parLeft}
          </p>
          <p
            className="text-large text-white p-4 whitespace-pre-line"
            style={{ width: img2width }}
          >
            {parCenter}
          </p>
          <p
            className="text-large text-white p-4 whitespace-pre-line"
            style={{ width: img3width }}
          >
            {parRight}
          </p>
        </div>
      </div>
    );
  }
);

export default Volunteering;
