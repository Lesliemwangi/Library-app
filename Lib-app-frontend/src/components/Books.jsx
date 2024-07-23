import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BooksCard from "./BooksCard";
import { BASE_URL } from "../components/Data";

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

  if (error) {
    return <div>Error fetching books: {error.message}</div>;
  }

  return (
    <Container>
      <Row className="mt-3">
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-5">
            <BooksCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Books;
