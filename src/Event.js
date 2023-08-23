import React from "react";
// import Img from "./img.png";
// import Img from "./img.png";
// import Eca from "./eca.png";
export default function Event({ event }) {
  // Check if the event prop is defined
  if (!event) {
    return <div>Loading...</div>;
  }
  // console.log(event.image);
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt="Event" />
      </div>
      <div className="event-content">
        <h2 className="event-title">{event.eventName}</h2>
        <p className="event-date">Date : {event.date}</p>
        <p className="event-club">Organised-by : {event.club}</p>
        {/* <p className="event-emoji">{event.emoji}</p> */}
      </div>
      {/* console.log(event); */}
    </div>
  );
}
