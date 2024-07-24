// review.jsx
import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  review: z
    .string({
      required_error: "Review is required",
    })
    .min(3, "Review must be at least 3 characters")
    .max(50, "Review must not exceed 50 characters"),
});

const BASE_URL = "http://127.0.0.1:5000";

const Review = ({ bookId }) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${BASE_URL}/reviews?book_id=${bookId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch reviews: ${response.statusText}`);
      }
      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [bookId]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: data.review,
          user_id: 1, // Replace with the actual logged-in user's ID
          book_id: bookId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const newReview = await response.json();
      setReviews([...reviews, newReview]);
      reset();
      setShowForm(false);
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting review:", error);
      setError(error.message);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      {!showForm && (
        <Button variant="primary" onClick={() => setShowForm(true)}>
          Add Review
        </Button>
      )}
      {showForm && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="review"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="reviewTextArea">
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...field}
                  placeholder="Write your review here..."
                />
                {fieldState.error && (
                  <div
                    className="error-message"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {fieldState.error.message}
                  </div>
                )}
              </Form.Group>
            )}
          />
          <Button variant="primary" type="submit" className="mt-2 mb-3">
            Submit Review
          </Button>
        </Form>
      )}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your review has been submitted successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="reviews-section mt-4">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textDecoration: 'underline'}}>REVIEWS</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        {reviews.length === 0 && <p>No reviews yet. Be the first to add one!</p>}
        {reviews.map((review) => (
        <div key={review.id} className="review mt-2" style={{ fontSize: '1.5rem'}}>
        <p><strong>{review.user.username} →</strong> {review.comment}</p>
      </div>
      
        ))}
      </div>
    </>
  );
};

export default Review;
