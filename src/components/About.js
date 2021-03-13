import React from "react";
import "./Slider.css";
import background from "../imgs/main.jpg";

export default function About() {
  return (
    <div className="infoWrapper">
      <h1
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <span className="title">about us</span>
      </h1>
      <div className="info">
        <h2>vision</h2>
        <p>
          A healthy and thriving community working together to reduce substance
          abuse.
        </p>
        <h2>mission</h2>
        <p>
          We are committed to making the maximum positive effort for our
          community. Our coalition members, community leaders, and volunteers
          provides the momentum that helps us affect change. Using date driven
          models, we provide solutions that make long-lasting difference.
        </p>
        <h2>our history</h2>
        <p>
          Fayette County Communities that Care is dedicated to positively
          changing substance use among youth and adults. The Coalition formed in
          2013 after the growing concern of opiate prescription drug abuse and
          heroin use in Fayette County. A diverse group of community leaders,
          students and concerned citizens began efforts to raise awareness and
          support education regarding youth substance use. Since then,
          additional data collection, training, and a rich community assessment
          has allowed the group to target efforts to address underage drinking
          and marijuana use among youth.
        </p>
      </div>
    </div>
  );
}
