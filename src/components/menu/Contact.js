import React from "react";
import background from "../../imgs/Together.jpg";
import rightArrow from "../../imgs/right-arrow.png";
import ContactForm from "./ContactForm";

export default function Contact({ showContactForm, setShowContactForm }) {
  return (
    <div>
      <div
        className="contactWrapper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="yellowWrapper hero">
          <h3>work with us</h3>
          <h1>
            there's room <br />
            for you
          </h1>
          <div className="button" onClick={() => setShowContactForm(true)}>
            Contact us
            <img className="rightArrow" src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
      {showContactForm && (
        <ContactForm setShowContactForm={setShowContactForm} />
      )}
    </div>
  );
}
