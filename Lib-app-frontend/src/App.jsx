import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./pages/Header";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookList from "./components/BookList";
import AddBook from "./pages/AddBook";
import Contact from "./pages/Contact"
import Footer from "./pages/Footer";



// import About from "./components/About";
// import Contacts from "./components/Contacts";

const App = () => {
  const books = [
    {
      id: 1,
      name: "The Great Gatsby",
      description: "A novel written by American author F. Scott Fitzgerald.",
      image_url: "https://example.com/gatsby.jpg",
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      description: "A novel by Harper Lee published in 1960.",
      image_url: "https://example.com/mockingbird.jpg",
    },
    {
      id: 3,
      name: "1984",
      description: "A dystopian social science fiction novel by George Orwell.",
      image_url: "https://example.com/1984.jpg",
    },
    {
      id: 4,
      name: "The Great Gatsby",
      description: "A novel written by American author F. Scott Fitzgerald.",
      image_url: "https://example.com/gatsby.jpg",
    },
    {
      id: 5,
      name: "To Kill a Mockingbird",
      description: "A novel by Harper Lee published in 1960.",
      image_url: "https://example.com/mockingbird.jpg",
    },
    {
      id: 6,
      name: "1984",
      description: "A dystopian social science fiction novel by George Orwell.",
      image_url: "https://example.com/1984.jpg",
    },
  ];

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList books={books} />} />
        <Route path="/addbooks" element={<AddBook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contacts" element={<Contact />} /> 
        
        {/* <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
