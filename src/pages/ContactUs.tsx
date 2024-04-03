import "./ContactUs.css";
import React, { forwardRef } from "react";

const ContactUs = forwardRef(
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
                    height: 1000,
                }}
                className="volunteering-container"
            ></div>
        );
    }
);

export default ContactUs;
