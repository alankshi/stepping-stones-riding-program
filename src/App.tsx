import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurMission from "./pages/OurMission";
import AboutUs from "./pages/AboutUs";
import Lessons from "./pages/Lessons";
import Volunteering from "./pages/Volunteering";
import Activities from "./pages/Activities";
import ContactUs from "./pages/ContactUs";
import React, { createRef, useState, useEffect } from "react";

function App() {
  const [usedLink, setUsedLink] = useState<boolean>(false);
  const [navHeight, setNavHeight] = useState<number>(0);

  const navRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  const homeRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  const missionRef: React.RefObject<HTMLDivElement> =
    createRef<HTMLDivElement>();
  const lessonsRef: React.RefObject<HTMLDivElement> =
    createRef<HTMLDivElement>();
  const aboutRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  const volunteerRef: React.RefObject<HTMLDivElement> =
    createRef<HTMLDivElement>();
  const activitiesRef: React.RefObject<HTMLDivElement> =
    createRef<HTMLDivElement>();
  const contactRef: React.RefObject<HTMLDivElement> =
    createRef<HTMLDivElement>();

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef]);

  return (
    <div className="main">
      <Navbar
        ref={navRef}
        homeRef={homeRef}
        missionRef={missionRef}
        lessonsRef={lessonsRef}
        aboutRef={aboutRef}
        volunteerRef={volunteerRef}
        activitiesRef={activitiesRef}
        contactRef={contactRef}
        usedLink={usedLink}
        setUsedLink={setUsedLink}
      ></Navbar>
      <Home
        ref={homeRef}
        navHeight={navHeight}
        missionRef={missionRef}
        setUsedLink={setUsedLink}
      ></Home>
      <OurMission ref={missionRef} navHeight={navHeight}></OurMission>
      <AboutUs
        ref={aboutRef}
        navHeight={navHeight}
        setUsedLink={setUsedLink}
      ></AboutUs>
      <Lessons ref={lessonsRef} navHeight={navHeight}></Lessons>
      <Activities ref={activitiesRef} navHeight={navHeight}></Activities>
      <Volunteering ref={volunteerRef} navHeight={navHeight}></Volunteering>
      <ContactUs ref={contactRef} navHeight={navHeight}></ContactUs>
    </div>
  );
}

export default App;
