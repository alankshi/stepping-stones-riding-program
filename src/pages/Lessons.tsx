import "./Lessons.css";
import horseHooray from "../assets/horse-hooray.jpg";
import React, { forwardRef } from "react";

const Lessons = forwardRef(
    (
        props: {
            navHeight: number;
        },
        ref: React.ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <div
                ref={ref}
                style={{
                    scrollMarginTop: props.navHeight - 1,
                }}
                className="lessons-container"
            >
                <img
                    src={horseHooray}
                    className="lessons-background-image"
                ></img>
                <div className="lessons-main-container">
                    <h1 className="lessons-title">LESSONS</h1>
                    <div className="lessons-divider"></div>
                    <p className="lessons-body-text">
                        We offer lessons in Western saddles, English saddles,
                        and bareback pads to those 6 years old and up. They
                        generally run an hour and a half long.
                        <br></br>
                        <br></br>
                        Riders are taught to catch, halter, lead, groom, clean,
                        pick hooves, and tack their mounts before riding. After
                        riding, riders are responsible for untacking and neatly
                        stowing away the equipment, grooming the horse, safely
                        putting the horse away, and sweeping.
                        <br></br>
                        <br></br>
                        We currently offer lessons six days a week and will
                        offer camps during the summer. We are also vendors for
                        several charter schools for home-schooled children. We
                        have a limited number of riders and are often at
                        capacity. Check in with us periodically and we’ll get
                        you in when possible!
                    </p>
                </div>
            </div>
        );
    }
);

export default Lessons;
