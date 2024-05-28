import "./Navbar.css";
import logo from "../assets/logo-long-text.avif";
import React, { forwardRef, useState, useEffect } from "react";

const Navbar = forwardRef(
  (
    props: {
      homeRef: React.RefObject<HTMLDivElement>;
      missionRef: React.RefObject<HTMLDivElement>;
      lessonsRef: React.RefObject<HTMLDivElement>;
      aboutRef: React.RefObject<HTMLDivElement>;
      volunteerRef: React.RefObject<HTMLDivElement>;
      activitiesRef: React.RefObject<HTMLDivElement>;
      contactRef: React.RefObject<HTMLDivElement>;
      usedLink: boolean;
      setUsedLink: React.Dispatch<React.SetStateAction<boolean>>;
      isMobile: boolean;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);
    const [mouseVisible, setMouseVisible] = useState<boolean>(false);
    const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);

    const handleScroll = (): void => {
      if (props.usedLink) {
        setVisible(true);
        return;
      }

      const currentScrollPos: number = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };
    const handleScrollEnd = () => {
      if (props.usedLink) {
        props.setUsedLink(false);
      }
      if (props.isMobile) {
        setHamburgerClicked(false);
      }
    };
    const handleEnter = () => {
      if (!visible) {
        setVisible(true);
        setMouseVisible(true);
      }
    };
    const handleLeave = () => {
      if (mouseVisible) {
        setVisible(false);
        setMouseVisible(false);
      }
    };

    useEffect(() => {
      if (!props.usedLink) {
        setVisible(true);
      }
    }, [props.usedLink]);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scrollend", handleScrollEnd);
    });

    const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        props.setUsedLink(true);
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const handleHamburgerClick = () => {
      setHamburgerClicked(!hamburgerClicked);
    };

    if (props.isMobile) {
      return (
        <div
          className="flex flex-col items-center self-stretch sticky top-0 z-30"
          ref={ref}
        >
          <div
            style={{ backgroundColor: "#F5F5F5" }}
            className="flex justify-center self-stretch py-3 px-9"
          >
            <img
              src={logo}
              style={{ width: "201px", height: "46px" }}
              alt="Stepping Stones Riding Program logo"
            ></img>
          </div>
          <hr className="w-full z-10 m-0 border-black"></hr>
          <div
            style={{
              top: visible || hamburgerClicked ? "0px" : "-100px",
              backgroundColor: "#F5F5F5",
              transition: "top 0.5s",
            }}
            className={
              "sliding-nav-container p-4 flex justify-center self-stretch relative -z-40"
            }
          >
            <span className="nonprofit-text-mobile">
              A 501(c)(3) Nonprofit Organization
            </span>
            <button
              className="absolute"
              style={{
                visibility: hamburgerClicked ? "hidden" : "visible",
                width: 20,
                height: 11,
                right: 15,
                top: 18,
                borderTop: "#000 1px solid",
                borderBottom: "#000 1px solid",
              }}
              onClick={handleHamburgerClick}
            ></button>
            <button
              className="absolute"
              onClick={handleHamburgerClick}
              style={{
                visibility: hamburgerClicked ? "visible" : "hidden",
                height: 15,
                width: 15,
                right: 15,
                top: 16,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <line x1="0" y1="0" x2="15" y2="15" stroke="black" />
                <line x1="15" y1="0" x2="0" y2="15" stroke="black" />
              </svg>
            </button>
          </div>
          <div
            style={{
              top: hamburgerClicked ? "115px" : "-400px",
              backgroundColor: "#F5F5F5",
              transition: "top 1s",
            }}
            className={"flex flex-col absolute w-full p-4 -z-50 gap-2.5"}
          >
            <a className="nav-link" onClick={() => handleClick(props.homeRef)}>
              HOME
            </a>
            <span></span>
            <a
              className="nav-link"
              onClick={() => handleClick(props.missionRef)}
            >
              OUR MISSION
            </a>
            <a className="nav-link" onClick={() => handleClick(props.aboutRef)}>
              ABOUT US
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.lessonsRef)}
            >
              LESSONS
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.activitiesRef)}
            >
              ACTIVITIES
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.volunteerRef)}
            >
              VOLUNTEER
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.contactRef)}
            >
              CONTACT US
            </a>
          </div>
        </div>
      );
    }

    return (
      <div
        className="flex flex-col items-center self-stretch sticky top-0 z-30"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        ref={ref}
      >
        <div //sticky container
          style={{ backgroundColor: "#F5F5F5" }}
          className="flex justify-between items-center self-stretch py-3 px-9"
        >
          <img
            src={logo}
            style={{ width: "201px", height: "46px" }}
            alt="Stepping Stones Riding Program logo"
          ></img>
          <div className="nonprofit-text text-black text-base">
            A 501(c)(3) Nonprofit Organization
          </div>
        </div>
        <hr className="w-full z-10 m-0 border-black"></hr>
        <div //nav container
          style={{
            top: visible ? "0px" : "-100px",
            transition: "top 0.5s",
            backgroundColor: "#F5F5F5",
          }}
          className={
            "flex px-9 py-4 justify-between items-start self-stretch relative -z-40"
          }
        >
          <a className="nav-link" onClick={() => handleClick(props.homeRef)}>
            HOME
          </a>
          <div className="links-container flex justify-between items-start">
            <a
              className="nav-link"
              onClick={() => handleClick(props.missionRef)}
            >
              OUR MISSION
            </a>
            <a className="nav-link" onClick={() => handleClick(props.aboutRef)}>
              ABOUT US
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.lessonsRef)}
            >
              LESSONS
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.activitiesRef)}
            >
              ACTIVITIES
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.volunteerRef)}
            >
              VOLUNTEER
            </a>
            <a
              className="nav-link"
              onClick={() => handleClick(props.contactRef)}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default Navbar;
