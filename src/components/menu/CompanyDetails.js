import React from "react";
import background from "../../imgs/City.jpg";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function CompanyDetails() {
  return (
    <div>
      <div
        className="pageWrapper about"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div>
          <Link to="/">
            <div className="yellowWrapper menuToggleHolder close back">
              <h3>back</h3>
              <div>
                <div className="menuToggle"></div>
              </div>
            </div>
          </Link>
        </div>

        <div className="heroWrapper">
          <div className="about hero">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <h4>
          <span className="sectionLabel">vision</span> A healthy and thriving
          community working together to reduce substance abuse.
        </h4>
      </div>
      <div className="aboutUs">
        <h4>
          <span className="sectionLabel">mission</span> We are committed to
          making the maximum positive effort for our community. Our coalition
          members, community leaders, and volunteers provides the momentum that
          helps us affect change. Using date driven models, we provide solutions
          that make long-lasting difference.
        </h4>
      </div>
      <div className="aboutUs">
        <h4>
          <span className="sectionLabel">history</span> Fayette County
          Communities that Care is dedicated to positively changing substance
          use among youth and adults. The Coalition formed in 2013 after the
          growing concern of opiate prescription drug abuse and heroin use in
          Fayette County. A diverse group of community leaders, students and
          concerned citizens began efforts to raise awareness and support
          education regarding youth substance use. Since then, additional data
          collection, training, and a rich community assessment has allowed the
          group to target efforts to address underage drinking and marijuana use
          among youth.
        </h4>
      </div>
      <Footer />
    </div>
  );
}
