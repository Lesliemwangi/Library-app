// BookDetails.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
  Modal,
} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import Review from "./Review";
import Favorites from "../components/Favorites"; // Import the Favorites component
import { toast } from "react-hot-toast"; // Assuming you are using react-hot-toast for notifications

const BASE_URL = "http://localhost:5000"; // Update this with your actual base URL

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/books/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleAddToFavorites = () => {
    setShowModal(true); // Show the modal when a book is successfully added to favorites
  };

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Spinner animation="border" variant="light" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Error fetching book details: {error.message}
        </Alert>
      </Container>
    );
  }

  if (!book) {
    return (
      <Container className="mt-5">
        <Alert variant="warning">Book not found</Alert>
      </Container>
    );
  }

  return (
    <Container className="mb-5 mt-3 text-white">
      <Button
        onClick={() => navigate(-1)}
        className="mb-3"
        style={{ width: "100px" }}
      >
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
              alt={book.title}
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
              {book.title}
            </h2>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Author:</strong> {book.author}
            </p>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Published:</strong> {book.publication_year}
            </p>
            <p style={{ fontSize: "1.8rem" }}>
              <strong>Description:</strong> {book.description}
            </p>
            <div className="mb-4">
              <Review bookId={book.id} />
              <Col md={15}>
                <Favorites
                  bookId={id}
                  onAddToFavorites={handleAddToFavorites}
                />{" "}
                {/* Add the Favorites component here */}
              </Col>
            </div>
          </div>
        </Col>
      </Row>
      {/* Modal for adding to favorites */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>The book has been added to your favorites.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default BookDetails;
