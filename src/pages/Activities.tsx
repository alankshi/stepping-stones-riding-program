import "./Activities.css";
import Carousel from "../components/Carousel";
import React, { forwardRef } from "react";

import img_0 from "../assets/carousel-images/0.jpg";
import img_1 from "../assets/carousel-images/1.jpg";
import img_2 from "../assets/carousel-images/2.jpg";
import img_3 from "../assets/carousel-images/3.jpg";
import img_4 from "../assets/carousel-images/4.jpg";
import img_5 from "../assets/carousel-images/5.jpg";
import img_6 from "../assets/carousel-images/6.png";
import img_7 from "../assets/carousel-images/7.jpg";

const Activities = forwardRef(
  (
    props: {
      navHeight: number;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        style={{
          scrollMarginTop: props.navHeight - 1,
        }}
        className="activities-container"
      >
        <div className="activities-text-container">
          <h1 className="title text-center">Activities</h1>
          <p className="text-paragraph">
            Our riders have many experiences besides lessons in the arena. We
            trail ride, attend clinics, tour vet clinics, go to horse shows,
            compete in regional and national horse judging and hippology
            contests, volunteer at horse events across the state, participate in
            parades and exhibitions, go camping with the horses, and more!
            <br></br> <br></br>For our long-term experienced riders, we also
            have sponsorship/lease options available which give riders
            opportunities to ride on their own outside of a lesson. Older and
            more experienced riders can gain responsibility and leadership
            opportunities by being paired with newer riders and assisting in
            lessons and camps.
          </p>
        </div>
        <div className="activities-carousel-container">
          <Carousel
            images={[img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7]}
          ></Carousel>
        </div>
      </div>
    );
  }
);

export default Activities;
