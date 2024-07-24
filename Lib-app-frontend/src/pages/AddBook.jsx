import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './AddBook.css';

const BASE_URL = "http://localhost:5000";

export default function AddBook() {
  // State variables for form fields
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Example userId, replace with actual logic to get the user ID from your authentication
  const userId = 1; // Replace with actual logic to get user ID (ensure it's an integer)

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!userId) {
      setError('User ID is required');
      toast.error('User ID is required');
      return;
    }

    // Create a book object
    const book = {
      title,
      author,
      description,
      publication_year: parseInt(year, 10), // Ensure year is an integer
      genre,
      image_url: imageUrl,
      user_id: userId // Ensure user_id is an integer
    };

    // Log the book object to verify the payload
    console.log('Book object:', book);

    try {
      const response = await fetch(`${BASE_URL}/add_book`, { // Updated endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add book: ${errorText}`);
      }

      setSuccess('Book added successfully!');
      toast.success('Book added successfully!');
      // Clear form fields after successful submission
      setTitle('');
      setAuthor('');
      setDescription('');
      setYear('');
      setGenre('');
      setImageUrl('');
    } catch (err) {
      console.error(err);
      setError('Failed to add book');
      toast.error('Failed to add book');
    }
  };

  return (
    <Container className="mb-5 mt-3 text-white">
      <Row className="justify-content-center">
        <Col md={8}>
          <div
            className="book-card"
            style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                textDecoration: "underline",
                marginBottom: "20px"
              }}
            >
              Add New Book
            </h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder='Type the title of the book'
                />
              </Form.Group>
              <Form.Group controlId="formAuthor">
                <Form.Label>Author:</Form.Label>
                <Form.Control
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  placeholder='Type the name of the author'
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder='Give a brief description of the book'
                />
              </Form.Group>
              <Form.Group controlId="formYear">
                <Form.Label>Publication Year:</Form.Label>
                <Form.Control
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  placeholder='Type the publication year of the book'
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                  placeholder='Paste the URL of the cover image'
                />
              </Form.Group>
              <Form.Group controlId="formGenre">
                <Form.Label>Genre:</Form.Label>
                <Form.Control
                  as="select"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                >
                  <option value="">Select a genre</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Biography">Biography</option>
                  <option value="Romance">Romance</option>
                  <option value="Historical Fiction">Historical Fiction</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Cookbook">Cookbook</option>
                  <option value="Children's">Children's</option>
                  <option value="Thriller">Thriller</option>
                </Form.Control>
              </Form.Group>

              <Button type="submit" className="submit-button mt-3">Submit</Button>
              {success && <Alert variant="success" className="mt-3">{success}</Alert>}
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
