import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./components/Home";
import Header from "./pages/Header"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Books from "./components/BookList";

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
  ];

  return (<>
    <Home />
    <Header />  
    <Navbar />
    <Login />  
    <Signup /> 
    <Books books={books} />

  </>);
}


export default App;