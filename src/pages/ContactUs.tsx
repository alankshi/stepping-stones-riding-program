import "./ContactUs.css";
import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import React, { forwardRef, useState } from "react";
import contactText from "../assets/editable-content/contact-us.txt";

const ContactUs = forwardRef(
  (
    props: {
      navHeight: number;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [paragraph, setParagraph] = useState<string>("Loading");
    fetch(contactText)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        setParagraph(responseText);
      });

    return (
      <div
        ref={ref}
        style={{
          scrollMarginTop: props.navHeight - 1,
        }}
        className="contact-container"
      >
        <div className="flex flex-col justify-center">
          <h1 className="title text-center">Contact Us</h1>
          <div className="flex flex-row items-center w-full justify-center gap-5">
            <a
              target="_blank"
              href="https://www.instagram.com/s.s.r.p?igsh=ZWI2YzEzYmMxYg=="
            >
              <img
                className="contact-icon"
                src={instagramIcon}
                alt="Instagram logo"
              ></img>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/groups/SteppingStonesTO/?ref=share_group_link"
            >
              <img
                className="contact-icon"
                src={facebookIcon}
                alt="Facebook logo"
              ></img>
            </a>
          </div>
        </div>
        <p className="contact-body text-large whitespace-pre-line">
          {paragraph}
        </p>
        <div className="flex flex-col justify-center w-full">
          {/* <span className="text-large text-center">(123) 456 7890</span> */}
          <a
            className="text-large text-center underline break-words w-full text-wrap"
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
