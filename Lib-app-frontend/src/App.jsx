import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./pages/Header";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Books from "./components/Books";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import AboutUs from "./components/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/addbooks" element={<AddBook />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
