import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src={book.image_url}
        alt={book.name}
        className="custom-card-img"
      />
      <Card.Body className="custom-card-body" style={{ fontSize: "1.1rem" }}>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>{book.description.substring(0, 100)}...</Card.Text>
        <Link to={`/books/${book.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BooksCard;