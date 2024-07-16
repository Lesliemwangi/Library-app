import React from "react";
import '../App.css';

function Header() {
  return (
    <header>
      <div className="header-brand" style={{ textAlign: 'center', backgroundColor: 'white', padding: '10px' }}>
        <img
          src="https://www.logodesign.net/logo/abstract-book-with-digital-pixels-263ld.png?nwm=1&nws=1&industry=library&sf=&txt_keyword=All"
          height="100"
          className="d-inline-block align-top"
          alt="Chapter Chatter logo"
        />
        <span
          className="ml-2 brand-name"
          style={{
            fontSize: "4.0rem",
            fontWeight: "bold",
            marginLeft: "10px",
            textDecoration: "underline",
          }}
        >
          CHAPTER CHATTER
        </span>
      </div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "4.0rem",
          fontWeight: "bold",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <u>LIBRARY APP</u>
      </h1>
    </header>
  );
}

export default Header;
