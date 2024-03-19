import React from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact/contact.jpg";

const handleClick = (e) => {
  alert("Thank you for your message! We will get back to you soon.");
};
export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_col">
              <div className="contact_image">
                <img src={ContactImage} alt="Contact" />
              </div>
            </div>
            <div className="contact_col">
              <h2>Contact US</h2>
              <form>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name..."
                    autocomplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone..."
                    autocomplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email..."
                    autocomplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <textarea placeholder="Write a Message..."></textarea>
                </div>
                <div className="btn_wrapper">
                  <a className="btn" onClick={handleClick}>
                    Submit
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
