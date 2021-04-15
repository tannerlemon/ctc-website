import React from "react";
import rightArrow from "../../imgs/right-arrow.png";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <div className="aboutUs" id="Mission">
      <h4>
        <span className="sectionLabel">mission</span> We are committed to making
        the maximum positive effort for our community. Our coalition members,
        community leaders, and volunteers provides the momentum that helps us
        affect change. Using date driven models, we provide solutions that make
        long-lasting difference.
      </h4>
      <Link to="/about" className="Link">
        <div className="button">
          Learn more
          <img className="rightArrow" src={rightArrow} alt="right arrow" />
        </div>
      </Link>
    </div>
  );
}
