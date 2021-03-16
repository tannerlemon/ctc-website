import React from "react";
import fileIcon from "../imgs/file.png";
import messageIcon from "../imgs/message.png";
import calendarIcon from "../imgs/calendar.png";
import logo from "../imgs/ctc-white.png";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation({ handleShowOverlay }) {
  return (
    <div className="gradient">
      <Link to="/about" className="Link">
        <div className="navigation" onClick={() => handleShowOverlay()}>
          <div className="icon">
            <img alt="file icon" src={fileIcon} />
          </div>
          <div className="navItem">about</div>
        </div>
      </Link>
      <Link to="/contact" className="Link">
        <div className="navigation" onClick={() => handleShowOverlay()}>
          <div className="icon">
            <img alt="message icon" src={messageIcon} />
          </div>
          <div className="navItem">contact</div>
        </div>
      </Link>
      <Link to="/events" className="Link">
        <div className="navigation" onClick={() => handleShowOverlay()}>
          <div className="icon">
            <img alt="calendar icon" src={calendarIcon} />
          </div>
          <div className="navItem">events</div>
        </div>
      </Link>
      <div className="logo">
        <img alt="Communities That Care logo" src={logo} />
      </div>
      <h1 className="name">
        <span className="communities">communities</span> <br />
        <span className="that">that</span>
        <span className="care">care</span>
      </h1>
    </div>
  );
}
