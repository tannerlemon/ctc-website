import React from "react";
import menuPhoto from "../../imgs/City.jpg";
import { interpolate, interpolateTransformSvg } from "d3-interpolate";
import { easeBounceOut } from "d3-ease";
import { Animate } from "react-move";
import { Link } from "react-router-dom";

export default function Menu({
  closedBar,
  showMenu,
  setShowMenu,
  setShowContactForm,
}) {
  return (
    <div
      className="menu"
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    >
      <Animate
        show={showMenu}
        start={{
          top: "-100vh",
        }}
        enter={{
          top: ["0"],
          timing: { duration: 1000, ease: easeBounceOut },
        }}
        update={{
          top: ["0"],
          timing: { duration: 1000, ease: easeBounceOut },
        }}
        leave={{
          top: ["-100vh"],
          timing: { duration: 1050, ease: easeBounceOut },
        }}
        interpolation={(begValue, endValue, attr) => {
          if (attr === "transform") {
            return interpolateTransformSvg(begValue, endValue);
          }

          return interpolate(begValue, endValue);
        }}
      >
        {({ bottom }) => {
          return (
            <div
              className="menuTopPortion"
              style={{
                bottom,
              }}
            >
              <div className="menuItems">
                <a
                  className="menuItem"
                  href="#Vision"
                  onClick={() => setShowMenu(false)}
                >
                  <h2>Vision</h2>
                </a>
                <a
                  className="menuItem"
                  href="#Mission"
                  onClick={() => setShowMenu(false)}
                >
                  <h2>Mission</h2>
                </a>
                <Link
                  className="menuItem"
                  to="/about"
                  onClick={() => setShowMenu(false)}
                >
                  <h2>History</h2>
                </Link>
                <a
                  className="menuItem"
                  href="#Contact"
                  onClick={() => setShowContactForm(true)}
                >
                  <h2>Contact</h2>
                </a>
                <a
                  className="menuItem"
                  href="#Events"
                  onClick={() => setShowMenu(false)}
                >
                  <h2>Events</h2>
                </a>
              </div>
              <div
                className="menuPhotoHolder"
                style={{
                  backgroundImage: `url(${menuPhoto})`,
                }}
              >
                {closedBar()}
              </div>
            </div>
          );
        }}
      </Animate>
    </div>
  );
}
