import "./Volunteering.css";
import encirclingHorse from "../assets/encircling-horse.avif";
import pullingWheelbarrow from "../assets/pulling-wheelbarrow.avif";
import horsesDrinking from "../assets/horses-drinking.jpg";
import React, { forwardRef, useRef } from "react";

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

    const img1width: number | undefined = img1Ref.current?.clientWidth;
    const img2width: number | undefined = img2Ref.current?.clientWidth;
    const img3width: number | undefined = img3Ref.current?.clientWidth;

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
            <p className="subtitle text-white text-center text-stretch">
              Volunteering is an essential component of our program, benefiting
              both the horses and volunteers
            </p>
          </div>
          <img ref={img3Ref} src={horsesDrinking} className="w-full"></img>
          <div className="volunteering-bottom-text-container text-large text-white p-4 text-center">
            We hope to grow solid and versatile riders with the skills needed to
            continue their equestrian journey while gaining lifelong friends.
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
          <p className="subtitle text-white text-center text-stretch">
            Volunteering is an essential component of our program, benefiting
            both the horses and volunteers
          </p>
        </div>
        <div className="volunteering-img-container">
          <img
            ref={img1Ref}
            src={encirclingHorse}
            className="volunteering-img"
          ></img>
          <img
            ref={img2Ref}
            src={pullingWheelbarrow}
            className="volunteering-img"
          ></img>
          <img
            ref={img3Ref}
            src={horsesDrinking}
            className="volunteering-img"
          ></img>
        </div>
        <div className="volunteering-bottom-text-container">
          <p className="text-large text-white p-4" style={{ width: img1width }}>
            We hope to grow solid and versatile riders with the skills needed to
            continue their equestrian journey while gaining lifelong friends.
          </p>
          <p className="text-large text-white p-4" style={{ width: img2width }}>
            The horses benefit from a village of volunteers who recognize their
            unique personalities and needs, providing consistent high quality
            care.
          </p>
          <p className="text-large text-white p-4" style={{ width: img3width }}>
            Volunteers learn to care for the horses through experience and gain
            confidence, responsibility, and accountability.
          </p>
        </div>
      </div>
    );
  }
);

export default Volunteering;
