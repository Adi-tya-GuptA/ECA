import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./EventDetail.css"; // Import your CSS file for styling
// import Img from ""
export default function EventDetail({ event }) {
  const { id } = useParams();
  const ID = Number(id);
  const [data, setData] = useState(null); // Initialize with null
  const BASE_URL = "http://localhost:9000/Events";

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`${BASE_URL}/${ID}`);
        const data = await res.json();
        // console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvent();
  }, [id]);
  //   console.log(data.image);
  return (
    <div className="event-detail">
      {data ? (
        <div className="event-info">
          <img src="img.png" alt="Event" className="event-image" />
          <h2>{data.eventName}</h2>
          <p>Club: {data.club}</p>
          <p>Date: {data.date}</p>
          <p>Notes: {data.notes}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
