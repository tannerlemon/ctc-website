import React from "react";
import "./Slider.css";
import background from "../imgs/contact.jpg";

export default function Contact() {
  return (
    <div className="infoWrapper">
      <h1
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <span className="title">contact</span>
      </h1>
      <div className="info">
        <h2>stop by</h2>
        <p>
          Connersville CTC <br />
          901 Meyer Avenue
          <br />
          Connersville, Indiana 47331
        </p>
        <h2>email</h2>
        <h3>Sarah Rathburn</h3>
        <p>
          Coalition Coordinator
          <br />
          sarahh@fspp.org
        </p>
      </div>
    </div>
  );
}
