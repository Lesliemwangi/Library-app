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
                Discover a world of captivating stories and enriching knowledge with Chapter Chatter. Our library is dedicated to curating an extensive and diverse collection of books that span across all genres, from timeless classics to contemporary bestsellers. 
                Whether you are an avid reader seeking your next page-turner or someone new to the joys of reading, our collection offers something for everyone. Dive into the realms of fiction, explore the intricacies of non-fiction, or uncover new insights with our research materials. 
                Every visit promises a new adventure and a deeper connection to the literary world.
              </p>
              <p className="lead mt-0 text-white" style={{ fontSize: "2.0rem" }}>
                At Chapter Chatter, we celebrate the transformative power of books to inspire, educate, and entertain. Our community is passionate about reading and sharing experiences, and we invite you to be part of this vibrant dialogue. Engage in thought-provoking discussions, attend exciting events, and contribute to a culture that values knowledge and storytelling. 
                Stay updated with the latest book releases, participate in our interactive book clubs, and share your own literary journey with fellow enthusiasts. Let Chapter Chatter be your gateway to a world where every book opens a new chapter in your life.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
