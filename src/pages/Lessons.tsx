import "./Lessons.css";
import horseHooray from "../assets/horse-hooray.jpg";
import React, { forwardRef, useRef } from "react";

const Lessons = forwardRef(
  (
    props: {
      navHeight: number;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const contentRef: React.RefObject<HTMLParagraphElement> =
      useRef<HTMLParagraphElement>(null);
    let parHeight: number | undefined = contentRef.current?.clientHeight;

    return (
      <div
        ref={ref}
        style={{
          scrollMarginTop: props.navHeight - 1,
        }}
        className="lessons-container"
      >
        <div className="lessons-main-container">
          <h1 className="title">LESSONS</h1>
          <div
            style={{
              width: "8px",
              height: parHeight,
              backgroundColor: "black",
            }}
          ></div>
          <p className="text-paragraph" ref={contentRef}>
            We offer lessons in Western saddles, English saddles, and bareback
            pads to those 6 years old and up. They generally run an hour and a
            half long.
            <br></br>
            <br></br>
            Riders are taught to catch, halter, lead, groom, clean, pick hooves,
            and tack their mounts before riding. After riding, riders are
            responsible for untacking and neatly stowing away the equipment,
            grooming the horse, safely putting the horse away, and sweeping.
            <br></br>
            <br></br>
            We currently offer lessons six days a week and will offer camps
            during the summer. We are also vendors for several charter schools
            for home-schooled children. We have a limited number of riders and
            are often at capacity. Check in with us periodically and we’ll get
            you in when possible!
          </p>
        </div>
        <img src={horseHooray} className="lessons-background-image"></img>
      </div>
    );
  }
);

export default Lessons;
