import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BASE_URL = "http://localhost:5000"; // Update this with your actual base URL

const User = () => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`${BASE_URL}/user`);
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await userResponse.json();
        setUser(userData);

        const favoritesResponse = await fetch(`${BASE_URL}/favorites`);
        if (!favoritesResponse.ok) {
          throw new Error("Failed to fetch favorites");
        }
        const favoritesData = await favoritesResponse.json();
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Favorites</h2>
          <Row>
            {favorites.map((book) => (
              <Col md={4} key={book.id}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={book.image_url} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
