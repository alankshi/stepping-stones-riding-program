import "./CurrentEvents.css";

import eventImage from "../assets/editable-content/current-event.jpeg";

const CurrentEvents = (props: { isMobile: boolean }) => {
  if (props.isMobile) {
    return (
      <div className="flex flex-col p-6 gap-4 justify-center events-container">
        <h1 className="title text-center">Current Events</h1>
        <p className="subtitle text-center">
          We are having our ribbon cutting ceremony at our new location on June
          1st, 2024. Please come check it out!
        </p>
        <img src={eventImage} className="self-stretch"></img>
      </div>
    );
  }

  return (
    <div className="flex flex-row p-6 gap-6 self-stretch items-start justify-center events-container">
      <img src={eventImage} className="half-width self-stretch"></img>
      <div className="flex flex-col self-stretch half-width gap-4">
        <h1 className="title text-center">Current Events</h1>
        <p className="subtitle text-center">
          We are having our ribbon cutting ceremony at our new location on June
          1st, 2024. Please come check it out!
        </p>
      </div>
    </div>
  );
};

export default CurrentEvents;
