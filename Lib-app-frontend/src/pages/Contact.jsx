import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="mt-5">
        <h3>Contact Information</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>


        <h3>Follow Us</h3>
        <ul className="list-unstyled">
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
