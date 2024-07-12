// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// function Navbar() {
//   return (
//     <div id="header">
//       <div className="container">
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Sign up</Link></li>
//             <li><Link to="/books">Book List</Link></li>
//             <li><Link to="/add-book">Add Book</Link></li>
//             <li><a href="#about-us">About us</a></li>
//             <li><a href="#contact-us">Contact Us</a></li>
//           </ul>
//         </nav>
//         <div className="intro">
//           <h1>Welcome to<br /><span>Chapter Chatter</span></h1>
//         </div>

//         <div className="header-text">
//           <h1>Where every page turn <span>is</span><br />a new adventure</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import React from "react";
// import { Navbar as NavigationBar, Nav, Container, Button } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <NavigationBar
//       bg="light"
//       expand="lg"
//       style={{ position: "sticky", top: 0, zIndex: 1000 }}
//       className="bg-light text-center fixed-top py-3"
//     >
//       <Container fluid>
//         <NavigationBar.Brand as={Link} to="/" className="mr-5">
//           <img
//             src="https://www.logodesign.net/logo/abstract-book-with-digital-pixels-263ld.png?nwm=1&nws=1&industry=library&sf=&txt_keyword=All"
//             height="70"
//             className="d-inline-block align-top"
//             alt="Chapter Chatter logo"
//           />
//           <span
//             className="ml-2"
//             style={{ fontSize: "2.0rem", fontWeight: "bold" }}
//           >
//             Chapter Chatter
//           </span>
//           </NavigationBar.Brand>
//         <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
//         <NavigationBar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Item className="mx-5">
//               <NavLink to="/" activeClassName="active" exact>
//                 <span className="nav-link" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
//                   Home
//                 </span>
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="mx-5">
//               <NavLink to="/books" activeClassName="active">
//                 <span className="nav-link" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
//                   Book List
//                 </span>
//               </NavLink>
//             </Nav.Item>
//           </Nav>
//           <Nav>
//             <Nav.Item className="mx-4">
//               <NavLink to="/login" activeClassName="active">
//                 <Button className="nav-link" style={{ fontSize: "1.5rem", fontWeight: "bold", backgroundColor: "#007bff", borderColor: "#007bff", marginRight: "10px" }}>
//                   Login
//                 </Button>
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item>
//               <NavLink to="/signup" activeClassName="active">
//                 <Button className="nav-link" style={{ fontSize: "1.5rem", fontWeight: "bold", backgroundColor: "#28a745", borderColor: "#28a745" }}>
//                   Signup
//                 </Button>
//               </NavLink>
//             </Nav.Item>
//           </Nav>
//         </NavigationBar.Collapse>
//       </Container>
//     </NavigationBar>
//   );
// }

// export default Navbar;

import React from "react";
import { Navbar as NavigationBar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <NavigationBar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <Container fluid>
        <NavigationBar.Brand href="/">
          <img
            src="https://www.logodesign.net/logo/abstract-book-with-digital-pixels-263ld.png?nwm=1&nws=1&industry=library&sf=&txt_keyword=All"
            height="70"
            className="d-inline-block align-top"
            alt="Luciannah Ventures logo"
          />
          <span
            className="ml-2"
            style={{ fontSize: "2.0rem", fontWeight: "bold" }}
          >
            Chapter Chatter
          </span>
        </NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-center">
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/books"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
               BookList
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/about"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/news"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/contacts"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                Contacts
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}

export default Navbar;