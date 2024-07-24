import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BooksCard from "./BooksCard";
import { toast } from "react-hot-toast";

const BASE_URL = 'http://localhost:5000';  // Update with your backend URL

function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/books`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError(error);
      });
  }, []);

  const handleDelete = async (bookId) => {
    console.log(`Attempting to delete book with ID: ${bookId}`);
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

      setBooks(books.filter((book) => book.id !== bookId));  // Update the book list
      toast.success('Book deleted successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete book');
    }
  };

  if (error) {
    return <div>Error fetching books: {error.message}</div>;
  }

  return (
    <Container>
      <Row className="mt-3">
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-5">
            <BooksCard book={book} onDelete={() => handleDelete(book.id)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Books;
