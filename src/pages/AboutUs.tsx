import "./AboutUs.css";
import ridingValley from "../assets/riding-valley.jpg";
import React, { useState, forwardRef, useRef, useEffect } from "react";

const AboutUs = forwardRef(
  (
    props: {
      navHeight: number;
      setUsedLink: React.Dispatch<React.SetStateAction<boolean>>;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [learningMore, setLearningMore] = useState<boolean>(false);

    const handleClick = (): void => {
      setLearningMore(!learningMore);
    };

    useEffect(() => {
      if (learningMore && contentRef.current) {
        props.setUsedLink(true);
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, [learningMore]);

    const contentRef: React.RefObject<HTMLDivElement> =
      useRef<HTMLDivElement>(null);
    const buttonRef: React.RefObject<HTMLButtonElement> =
      useRef<HTMLButtonElement>(null);
    const textRef: React.RefObject<HTMLParagraphElement> =
      useRef<HTMLParagraphElement>(null);

    let buttonDims: number[] = [0, 0];
    let buttonOffset: number = 0;
    let textOffset: number = 0;
    let arrowPadding: number = 0;
    if (buttonRef.current) {
      buttonDims = [
        buttonRef.current.clientWidth,
        buttonRef.current.clientHeight,
      ];
      buttonOffset = buttonDims[1] + 10;
    }
    if (textRef.current) {
      textOffset = textRef.current.clientHeight + 27;
      arrowPadding = textRef.current.clientWidth / 2 - 46;
    }

    if (props.isMobile) {
      return (
        <div
          ref={ref}
          style={{
            scrollMarginTop: props.navHeight - 1,
          }}
          className="flex justify-center items-start self-stretch overflow-clip"
        >
          <img src={ridingValley} style={{ width: "50%" }}></img>
          <div
            ref={contentRef}
            style={{ flex: "1 0 0" }}
            className="about-content flex flex-col items-center self-stretch gap-6 py-6 px-12"
          >
            <h1 className="title text-center">About Us</h1>
            <p className="about-main-text">
              We are located in the beautiful{" "}
              <a
                href="https://maps.app.goo.gl/yprtR4FrvkCVNK6m6"
                target="_blank"
                className="underline"
              >
                Santa Rosa Valley Equestrian Park
              </a>
              , giving riders access to excellent facilities with direct access
              to miles of trails.
            </p>
            <div className="flex flex-col items-center gap-7 self-stretch relative">
              <hr
                className="about-learn-more-button-line"
                style={{
                  top: buttonDims[1] / 2,
                  width: learningMore ? "100%" : buttonDims[0],
                }}
              />
              <button
                className="about-learn-more-button text-button"
                onClick={handleClick}
                ref={buttonRef}
              >
                LEARN MORE
              </button>
              <p
                className="text-paragraph self-stretch"
                style={{}}
                ref={textRef}
              >
                Stepping Stones was founded as a nonprofit in 2012 by three
                friends, Kylie Joseph, Nancy McChesney, and Meaghan Shaffer to
                connect horses and people regardless of circumstance and wealth.
                Fate led us to the Conejo Valley YMCA, where we put hundreds of
                campers on horses each summer. When the YMCA closed permanently
                due to COVID-19, we relocated temporarily, and finally settled
                in Santa Rosa Valley.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 100% 100%"
                fill="none"
                className="about-learn-more-downarrow"
                style={{
                  top: learningMore ? buttonOffset + textOffset : buttonOffset,
                  paddingLeft: arrowPadding,
                  paddingRight: arrowPadding,
                }}
              >
                <line
                  x1="0.25"
                  y1="0.819383"
                  x2="46.3212"
                  y2="27.4186"
                  stroke="black"
                />
                <line
                  x1="45.679"
                  y1="27.1663"
                  x2="91.7501"
                  y2="0.567119"
                  stroke="black"
                />
              </svg>
            </div>
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
        className="flex justify-center items-start self-stretch overflow-clip"
      >
        <img src={ridingValley} style={{ width: "50%" }}></img>
        <div
          ref={contentRef}
          style={{ flex: "1 0 0" }}
          className="about-content flex flex-col items-center self-stretch gap-6 py-6 px-12"
        >
          <h1 className="title text-center">About Us</h1>
          <p className="about-main-text">
            We are located in the beautiful{" "}
            <a
              href="https://maps.app.goo.gl/yprtR4FrvkCVNK6m6"
              target="_blank"
              className="underline"
            >
              Santa Rosa Valley Equestrian Park
            </a>
            , giving riders access to excellent facilities with direct access to
            miles of trails.
          </p>
          <div className="flex flex-col items-center gap-7 self-stretch relative">
            <hr
              className="about-learn-more-button-line"
              style={{
                top: buttonDims[1] / 2,
                width: learningMore ? "100%" : buttonDims[0],
              }}
            />
            <button
              className="about-learn-more-button text-button"
              onClick={handleClick}
              ref={buttonRef}
            >
              LEARN MORE
            </button>
            <p className="text-paragraph self-stretch" style={{}} ref={textRef}>
              Stepping Stones was founded as a nonprofit in 2012 by three
              friends, Kylie Joseph, Nancy McChesney, and Meaghan Shaffer to
              connect horses and people regardless of circumstance and wealth.
              Fate led us to the Conejo Valley YMCA, where we put hundreds of
              campers on horses each summer. When the YMCA closed permanently
              due to COVID-19, we relocated temporarily, and finally settled in
              Santa Rosa Valley.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 100% 100%"
              fill="none"
              className="about-learn-more-downarrow"
              style={{
                top: learningMore ? buttonOffset + textOffset : buttonOffset,
                paddingLeft: arrowPadding,
                paddingRight: arrowPadding,
              }}
            >
              <line
                x1="0.25"
                y1="0.819383"
                x2="46.3212"
                y2="27.4186"
                stroke="black"
              />
              <line
                x1="45.679"
                y1="27.1663"
                x2="91.7501"
                y2="0.567119"
                stroke="black"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

export default AboutUs;
