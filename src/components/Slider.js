import React from "react";
import "./Slider.css";
import { interpolate, interpolateTransformSvg } from "d3-interpolate";
import { easeBackOut, easeBackInOut } from "d3-ease";
import { Animate } from "react-move";
import About from "./About";
import cancelIcon from "../imgs/cancel.png";

export default function Slider({ showOverlay, handleCloseOverlay }) {
  return (
    <div style={{ width: "100%" }}>
      <Animate
        show={showOverlay}
        start={() => ({
          bottom: "-150vh",
        })}
        enter={() => [
          {
            bottom: "0",
            backgroundColor: "#ffffff",
            timing: { delay: 700, duration: 700, ease: easeBackOut },
          },
        ]}
        update={() => ({
          bottom: "0",
          backgroundColor: "#000000",
          timing: { duration: 700, ease: easeBackOut },
        })}
        leave={() => [
          {
            bottom: "-150vh",
            timing: { duration: 750, ease: easeBackInOut },
          },
        ]}
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
              <About />
            </div>
          );
        }}
      </Animate>
    </div>
  );
}
