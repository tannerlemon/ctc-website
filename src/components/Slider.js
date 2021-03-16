import React, { useState } from "react";
import "./Slider.css";
import { interpolate, interpolateTransformSvg } from "d3-interpolate";
import { easeBounceOut } from "d3-ease";
import { Animate } from "react-move";
import About from "./About";
import Contact from "./Contact";
import Events from "./Events";
import cancelIcon from "../imgs/cancel.png";
import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";

export default function Slider() {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleShowOverlay = () => {
    setShowOverlay(true);
  };
  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Navigation handleShowOverlay={handleShowOverlay} />
      <Animate
        show={showOverlay}
        start={{
          bottom: "-100vh",
        }}
        enter={{
          bottom: ["0"],
          timing: { duration: 1000, ease: easeBounceOut },
        }}
        update={{
          bottom: ["0"],
          timing: { duration: 1000, ease: easeBounceOut },
        }}
        leave={{
          bottom: ["-100vh"],
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
              className="sliderWrapper"
              style={{
                position: "absolute",
                bottom,
              }}
            >
              <div
                className="cancel"
                onClick={() => {
                  handleCloseOverlay();
                }}
              >
                <img alt="cancel icon" src={cancelIcon} />
              </div>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/events" component={Events} />
              </Switch>
            </div>
          );
        }}
      </Animate>
    </div>
  );
}
