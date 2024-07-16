import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function Home() {
  return (
    <>

      <div id="header">
        <Container className="text-center">
          <Row className="align-items-center" style={{ height: '100vh' }}>
            <Col>
              <h1 className="text-decoration-underline text-white" style={{ fontSize: "5.0rem", fontWeight: "bold" }}>
                Welcome to<br /><span className="highlight">Chapter Chatter</span>
              </h1>
              <p className="lead mt-0 text-white" style={{ fontSize: "2.0rem" }}>
                Your gateway to a world of knowledge and stories. At Chapter Chatter, we believe every book has a story waiting to be discovered. 
                Our library offers a diverse collection of books from various genres, catering to all age groups and interests. Whether you are looking 
                to dive into the world of fiction, explore new horizons in non-fiction, or find the perfect book for your research, we have something for everyone. 
                Join our community of book lovers and embark on a new adventure with every page turn.
              </p>
              <p className="lead mt-0 text-white" style={{ fontSize: "2.0rem" }}>
                Your gateway to a world of knowledge and stories. At Chapter Chatter, we believe every book has a story waiting to be discovered. 
                Our library offers a diverse collection of books from various genres, catering to all age groups and interests. Whether you are looking 
                to dive into the world of fiction, explore new horizons in non-fiction, or find the perfect book for your research, we have something for everyone. 
                Join our community of book lovers and embark on a new adventure with every page turn.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;