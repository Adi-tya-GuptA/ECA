import React from "react";
import Event from "./Event";
import { Link } from "react-router-dom";

export default function Events({ event }) {
  return (
    <div className="main">
      {event.map((e) => (
        <Link to={`/decription/${e.id}`}>
          <Event event={e} key={e.id} />
        </Link>
      ))}
    </div>
  );
}
