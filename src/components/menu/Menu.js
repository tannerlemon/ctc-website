import React from "react";
import menuPhoto from "../../imgs/City.jpg";
import { interpolate, interpolateTransformSvg } from "d3-interpolate";
import { easeBounceOut } from "d3-ease";
import { Animate } from "react-move";

export default function Menu({ closedBar, showMenu }) {
  return (
    <div
      className="menu"
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
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
                <a className="menuItem" href="#Vision">
                  <h2>Vision</h2>
                </a>
                <a className="menuItem" href="#Mission">
                  <h2>Mission</h2>
                </a>
                <a className="menuItem" href="#History">
                  <h2>History</h2>
                </a>
                <a className="menuItem" href="#Contact">
                  <h2>Contact</h2>
                </a>
                <a className="menuItem" href="#Events">
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
