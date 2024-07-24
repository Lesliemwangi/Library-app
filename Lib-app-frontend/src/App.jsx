import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./pages/Footer";
import Home from "./components/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Books from "./components/Books";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import AboutUs from "./components/AboutUs";
import Contact from "./pages/Contact";
import { toast } from 'react-hot-toast';

const BASE_URL = 'http://localhost:5000';  // Update with your backend URL

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${BASE_URL}/books`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch books');
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete book: ${errorText}`);
      }

      setBooks(books.filter((book) => book.id !== bookId));
      toast.success('Book deleted successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete book');
    }
  };

  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} onDelete={handleDelete} />} />
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
