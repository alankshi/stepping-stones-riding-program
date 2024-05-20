import "./ContactUs.css";
import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import React, { forwardRef } from "react";

const ContactUs = forwardRef(
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
        className="contact-container"
      >
        <div className="flex flex-col justify-center">
          <h1 className="title">Contact Us</h1>
          <div className="flex flex-row items-center w-full justify-center gap-5">
            <a
              target="_blank"
              href="https://www.instagram.com/s.s.r.p?igsh=ZWI2YzEzYmMxYg=="
            >
              <img className="contact-icon" src={instagramIcon}></img>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/groups/SteppingStonesTO/?ref=share_group_link"
            >
              <img className="contact-icon" src={facebookIcon}></img>
            </a>
          </div>
        </div>
        <p className="contact-body text-large">
          We are available start_day to end_day from start_time to end_time.
          Feel free to contact us with any questions
        </p>
        <div className="flex flex-col justify-center">
          <span className="text-large text-center">(123) 456 7890</span>
          <a
            className="text-large text-center underline"
            href="mailto: steppingstonesridingprogram@gmail.com"
          >
            steppingstonesridingprogram@gmail.com
          </a>
        </div>
      </div>
    );
  }
);

export default ContactUs;
