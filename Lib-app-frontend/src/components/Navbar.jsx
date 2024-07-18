// import React from "react";
// import { Navbar as NavigationBar, Nav, Container, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <NavigationBar
//       bg="light"
//       expand="lg"
//       style={{ position: "sticky", top: 0, zIndex: 1000 }}
//     >
//       <Container fluid>
//         <NavigationBar.Brand as={NavLink} to="/">
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
//         </NavigationBar.Brand>
//         <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
//         <NavigationBar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto w-100 justify-content-center">
//             <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
//               <Nav.Link as={NavLink} to="/" className="text-center" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
//                 Home
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
//               <Nav.Link as={NavLink} to="/books" className="text-center" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
//                 BookList
//               </Nav.Link>
//             </Nav.Item>
         
//             <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
//               <Nav.Link as={NavLink} to="/addbooks" className="text-center" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
//                 Add Books
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
//               <Nav.Link as={NavLink} to="/contacts" className="text-center" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
//                 Contacts
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//           <Nav className="ml-auto">
//             <Nav.Item className="mx-4">
//               <NavLink to="/login">
//                 <Button className="nav-link" style={{ fontSize: "1.5rem", fontWeight: "bold", backgroundColor: "#007bff", borderColor: "#007bff", marginRight: "10px" }}>
//                   Login
//                 </Button>
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="mx-4">
//               <NavLink to="/signup">
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