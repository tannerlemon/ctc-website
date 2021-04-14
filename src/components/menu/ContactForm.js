import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";

export default function ContactForm({ setShowContactForm }) {
  init("user_bPaXAe8v5z4t8bu9qPtnW");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    generateContactNumber();
    sendForm("ctc_jeremy", "default", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    setShowContactForm(false);
  };
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  return (
    <div
      className="contactFormWrapper"
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <div className="contactForm">
        <div
          className="yellowWrapper menuToggleHolder close"
          onClick={() => setShowContactForm(false)}
        >
          <h3>close</h3>
          <div>
            <div className="menuToggle"></div>
          </div>
        </div>
        <h2>Contact us</h2>
        <p>
          We are in the office M-F and will get back to you as soon as possible.
        </p>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="contact_number" value={contactNumber} />

          <input
            type="text"
            name="user_name"
            {...register("user_name", { required: true })}
            placeholder="Name"
            maxLength="30"
          />
          <br />
          <input
            type="email"
            name="user_email"
            {...register("user_email", { required: true })}
            placeholder="Email"
            maxLength="30"
          />
          <br />
          <textarea
            name="message"
            {...register("message", { required: true })}
            placeholder="Message"
            maxLength="1500"
          />
          <br />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    </div>
  );
}
