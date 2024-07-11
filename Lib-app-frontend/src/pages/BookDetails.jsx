import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Review from "./Review";
import Buying from "./Buying";

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((book) => book.id.toString() === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Container className="mb-5 mt-3 text-white">
      <Button onClick={() => navigate(-1)} className="mb-3">
        Back
      </Button>
      <Row>
        <Col md={6}>
          <div
            className="book-card"
            style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <img
              src={book.image_url}
              alt={book.name}
              className="book-image"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                borderRadius: "10px",
              }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div
            className="book-card"
            style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <h2
              style={{
                fontSize: "3.0rem",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {book.name}
            </h2>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Author:</strong> {book.author}
            </p>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Published:</strong> {book.published_date}
            </p>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Description:</strong> {book.description}
            </p>
            <div className="mb-4">
              <Review bookId={book.id} />
              <Buying bookId={book.id} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;