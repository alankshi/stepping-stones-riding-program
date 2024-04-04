import "./Volunteering.css";
import encirclingHorse from "../assets/encircling-horse.jpg";
import pullingWheelbarrow from "../assets/pulling-wheelbarrow.jpg";
import horsesDrinking from "../assets/horses-drinking.jpg";
import React, { forwardRef, useRef } from "react";

const Volunteering = forwardRef(
    (
        props: {
            navHeight: number;
        },
        ref: React.ForwardedRef<HTMLDivElement>
    ) => {
        const imgRef1: React.RefObject<HTMLImageElement> =
            useRef<HTMLImageElement>(null);
        const imgRef2: React.RefObject<HTMLImageElement> =
            useRef<HTMLImageElement>(null);
        const imgRef3: React.RefObject<HTMLImageElement> =
            useRef<HTMLImageElement>(null);

        return (
            <div
                ref={ref}
                style={{
                    scrollMarginTop: props.navHeight - 1,
                }}
                className="volunteering-container"
            >
                <div className="volunteering-top-text-container">
                    <h1 className="volunteering-title">Volunteering</h1>
                    <p className="volunteering-description">
                        Volunteering is an essential component of our program,
                        benefiting both the horses and volunteers
                    </p>
                </div>
                <div className="volunteering-img-container">
                    <img
                        ref={imgRef1}
                        src={encirclingHorse}
                        className="volunteering-img"
                    ></img>
                    <img
                        ref={imgRef2}
                        src={pullingWheelbarrow}
                        className="volunteering-img"
                    ></img>
                    <img
                        ref={imgRef3}
                        src={horsesDrinking}
                        className="volunteering-img"
                    ></img>
                </div>
                <div className="volunteering-bottom-text-container">
                    <p
                        className="volunteering-text"
                        style={{ width: imgRef1.current?.clientWidth - 40 }}
                    >
                        We hope to grow solid and versatile riders with the
                        skills needed to continue their equestrian journey while
                        gaining lifelong friends.
                    </p>
                    <p
                        className="volunteering-text"
                        style={{ width: imgRef2.current?.clientWidth - 40 }}
                    >
                        The horses benefit from a village of volunteers who
                        recognize their unique personalities and needs,
                        providing consistent high quality care.
                    </p>
                    <p
                        className="volunteering-text"
                        style={{ width: imgRef3.current?.clientWidth - 40 }}
                    >
                        Volunteers learn to care for the horses through
                        experience and gain confidence, responsibility, and
                        accountability.
                    </p>
                </div>
            </div>
        );
    }
);

export default Volunteering;
