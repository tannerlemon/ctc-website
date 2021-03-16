import { React } from "react";

export default function MoreInfo({ event }) {
  return (
    <div className="infoWrapper">
      <h1>{event.title}</h1>
    </div>
  );
}
