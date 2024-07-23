import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="contacts-container">
    <div className="container mt-5 text-white">
      <h1
        style={{
          fontSize: "5.0rem",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Contact Us
      </h1>
      <form>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
            style={{ fontSize: "2.0rem", fontWeight: "bold" }}
          >
            Name:
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ fontSize: "2.0rem", fontWeight: "bold" }}
          >
            Email:
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label
            htmlFor="subject"
            className="form-label"
            style={{ fontSize: "2.0rem", fontWeight: "bold" }}
          >
            Subject:
          </label>
          <input type="text" className="form-control" id="subject" required />
        </div>
        <div className="mb-3">
          <label
            htmlFor="message"
            className="form-label"
            style={{ fontSize: "2.0rem", fontWeight: "bold" }}
          >
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mt-5" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
        <h1
          style={{
            fontSize: "4.0rem",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Location
        </h1>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.914028992375!2d36.80194479413885!3d-1.2697011470476017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112041fb2f9f%3A0x9a7e9ed5baf000f0!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1626535226837!5m2!1sen!2ske"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </div>

      <div className="mt-5" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
        <h1
          style={{
            fontSize: "4.0rem",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Contact Information
        </h1>
        <p>Address: Weslands, Nairobi, Kenya</p>
        <p>Email: chapterchatter@libraryapp.com</p>
        <p>Phone: +254 722 000 111</p>
        <p>Phone: +254 722 111 000</p>

        <h1
          style={{
            fontSize: "4.0rem",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Follow Us
        </h1>
        <ul className="list-unstyled">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <i className="fab fa-x-twitter"></i> X
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Contact;
