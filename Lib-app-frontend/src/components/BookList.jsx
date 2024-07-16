import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BooksCard from "./BooksCard";

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p>No books available.</p>;
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

export default BookList;