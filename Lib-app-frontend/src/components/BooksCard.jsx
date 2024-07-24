import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BooksCard = ({ book, onDelete }) => {
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
        <div className="d-flex">
          <div className="w-100 me-2">
            <Link to={`/books/${book.id}`} className="d-block">
              <Button variant="primary" className="w-100">View Details</Button>
            </Link>
          </div>
          <div className="w-100">
            <Button variant="danger" className="w-100" onClick={onDelete}>Delete</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BooksCard;
