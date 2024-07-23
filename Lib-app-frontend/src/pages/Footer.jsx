import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-dark py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{ fontSize: "1.2rem" }}>
            <h3>
              <u>Chapter Chatter</u>
            </h3>
            <p>
              Chapter Chatter is your ultimate destination for book lovers. We are committed to fostering a love for reading by providing a vast collection of books across all genres. Whether you are seeking knowledge, adventure, or simply a good story, our library app is designed to connect you with the perfect book.
            </p>
          </div>
          <div className="col-md-4" style={{ fontSize: "1.2rem" }}>
            <h3>
              <u>Links</u>
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-dark">
                  Book List
                </Link>
              </li>
              <li>
                <Link to="/addbooks" className="text-dark">
                  Add Books
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-dark">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4" style={{ fontSize: "1.2rem" }}>
            <h3>
              <u>Contact Info</u>
            </h3>
            <p>Address: Westlands, Nairobi, Kenya</p>
            <p>Email: chapterchatter@libraryapp.com</p>
            <p>Phone: +254 722 000 111</p>
            <p>Phone: +254 722 111 000</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center" style={{ fontSize: "1.1rem" }}>
            <p>
              &copy; {new Date().getFullYear()} Chapter Chatter. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
