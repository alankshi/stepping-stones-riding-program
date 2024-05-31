import "./Activities.css";
import Carousel from "../components/Carousel";
import React, { forwardRef, useState } from "react";

import activitiesPar1 from "../assets/editable-content/activities-above.txt";
import activitiesPar2 from "../assets/editable-content/activities-below.txt";

import img_0 from "../assets/carousel-images/0.avif";
import img_1 from "../assets/carousel-images/1.avif";
import img_2 from "../assets/carousel-images/2.jpg";
import img_3 from "../assets/carousel-images/3.jpg";
import img_4 from "../assets/carousel-images/4.jpg";
import img_5 from "../assets/carousel-images/5.jpg";
import img_6 from "../assets/carousel-images/6.avif";
import img_7 from "../assets/carousel-images/7.avif";

const Activities = forwardRef(
  (
    props: {
      navHeight: number;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [activitiesParagraph1, setActivitiesParagraph1] =
      useState<string>("Loading...");
    const [activitiesParagraph2, setActivitiesParagraph2] =
      useState<string>("Loading...");

    fetch(activitiesPar1)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setActivitiesParagraph1(responseText);
      });
    fetch(activitiesPar2)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setActivitiesParagraph2(responseText);
      });

    if (props.isMobile) {
      return (
        <div
          ref={ref}
          style={{
            scrollMarginTop: props.navHeight - 1,
          }}
          className="flex flex-col justify-center items-start self-stretch"
        >
          <div className="flex flex-col gap-0 items-center justify-start self-stretch p-6">
            <h1 className="title text-center">Activities</h1>
            <p className="text-paragraph whitespace-pre-line">
              {activitiesParagraph1}
            </p>
            <div style={{ height: "400px" }} className="w-full">
              <Carousel
                images={[
                  img_0,
                  img_1,
                  img_2,
                  img_3,
                  img_4,
                  img_5,
                  img_6,
                  img_7,
                ]}
                isMobile={props.isMobile}
              ></Carousel>
            </div>
            <p className="text-paragraph whitespace-pre-line">
              {activitiesParagraph2}
            </p>
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
        className="flex justify-center items-start self-stretch pl-6"
      >
        <div
          style={{ width: "40%" }}
          className="flex flex-col gap-0 items-center justify-start self-stretch p-6"
        >
          <h1 className="title text-center">Activities</h1>
          <p className="text-paragraph whitespace-pre-line">
            {activitiesParagraph1}
            <br></br> <br></br>
            {activitiesParagraph2}
          </p>
        </div>
        <div className="activities-carousel-container">
          <Carousel
            images={[img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7]}
            isMobile={props.isMobile}
          ></Carousel>
        </div>
      </div>
    );
  }
);

export default Activities;
