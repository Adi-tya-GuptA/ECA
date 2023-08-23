import React, { Suspense } from "react";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetal from "./EventDetal";

import { useEffect, useState } from "react";
export default function App() {
  const [event, setEvent] = useState([]);

  useEffect(function () {
    async function fetchEvents() {
      try {
        const res = await fetch("http://localhost:9000/events");
        const data = await res.json(); // Corrected res.json() function call
        // console.log(data);
        setEvent(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage event={event} />} />

          <Route path="decription/:id" element={<EventDetal event={event} />} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
    </div>
  );
}
