import React, { useState } from "react";
import "./Slider.css";
import { interpolate, interpolateTransformSvg } from "d3-interpolate";
import { easeBounceOut } from "d3-ease";
import { Animate } from "react-move";

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
            ></div>
          );
        }}
      </Animate>
    </div>
  );
}
