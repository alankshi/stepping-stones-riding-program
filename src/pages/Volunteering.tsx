import "./Volunteering.css";
import encirclingHorse from "../assets/encircling-horse.jpg.jpg";
import pullingWheelbarrow from "../assets/pulling-wheelbarrow.jpg.jpg";
import horsesDrinking from "../assets/horses-drinking.jpg.jpg";
import React, { forwardRef } from "react";

const Volunteering = forwardRef(
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
                className="volunteering-container"
            ></div>
        );
    }
);

export default Volunteering;
