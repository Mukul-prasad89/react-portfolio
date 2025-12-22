import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const notify = () => toast("Email sent successfully!");
  const  formSubmitHandler = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    notify();
  };
  return (
    <div className="contact-section margin">
      <div className="contact-content">
        <div className="contact-left">
          <h1 className="contact-heading">Let's Collaborate</h1>
          <p className="contact-description">
            Have a question, project idea, or collaboration in mind?  
            Get in Touch for Web Magic
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message..." rows="5" />

            <button onClick={formSubmitHandler} type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
