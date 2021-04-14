import React from "react";

export default function Events({ event, setShowDetails }) {
  return (
    <>
      <div
        className="eventDetailsWrapper"
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      >
        <div className="eventDetails">
          <div
            className="yellowWrapper menuToggleHolder close"
            onClick={() => setShowDetails(null)}
          >
            <h3>close</h3>
            <div>
              <div className="menuToggle"></div>
            </div>
          </div>
          <div className="eventTitleAndImage">
            <div>
              <h2>{event.title}</h2>
              <h3>Dates: {event.dates}</h3>
            </div>
            <img src={event.image} className="eventImage" alt="event" />
          </div>
          <div>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
