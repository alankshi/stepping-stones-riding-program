import "./CurrentEvents.css";
import eventsText from "../assets/editable-content/current-event.txt";
import eventImage from "../assets/editable-content/current-event.jpeg";
import { useState } from "react";

const CurrentEvents = (props: { isMobile: boolean }) => {
  const [eventsSubtitle, setEventsSubtitle] = useState<string>("Loading...");
  fetch(eventsText)
    .then((response) => {
      return response.text();
    })
    .then((responseText) => {
      setEventsSubtitle(responseText);
    });

  if (props.isMobile) {
    return (
      <div className="flex flex-col p-6 gap-4 justify-center events-container">
        <h1 className="title text-center">Current Events</h1>
        <p className="subtitle text-center whitespace-pre-line">
          {eventsSubtitle}
        </p>
        <img
          src={eventImage}
          className="self-stretch"
          alt="Current event image"
        ></img>
      </div>
    );
  }

  return (
    <div className="flex flex-row p-6 gap-6 self-stretch items-start justify-center events-container">
      <img
        src={eventImage}
        className="half-width self-stretch"
        alt="Current event image"
      ></img>
      <div className="flex flex-col self-stretch half-width gap-4">
        <h1 className="title text-center">Current Events</h1>
        <p className="subtitle text-center whitespace-pre-line">
          {eventsSubtitle}
        </p>
      </div>
    </div>
  );
};

export default CurrentEvents;
