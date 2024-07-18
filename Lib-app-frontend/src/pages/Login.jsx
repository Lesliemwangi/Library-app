import React, { useState } from "react";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";

const schema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must not exceed 50 characters"),
});

const Login = () => {
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log("User Details:", data);
    setModalMessage("Login successful!");
    setShowModal(true);
    reset();
    navigate("/dashboard");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className="login-background text-white">
      <Container className="mt-5 login-container">
        <Row className="justify-content-md-center">
          <Col md="6">
            <h1 className="text-center login-heading" style={{ fontSize: "5.0rem", fontWeight: "bold" }}>Login</h1>
            <Form onSubmit={handleSubmitForm(handleSubmit)}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Form.Group controlId="loginEmail" className="mb-3" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      {...field}
                      isInvalid={!!fieldState.error}
                    />
                    {fieldState.error && (
                      <Form.Control.Feedback type="invalid">
                        {fieldState.error.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Form.Group controlId="loginPassword" className="mb-3" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      {...field}
                      isInvalid={!!fieldState.error}
                    />
                    {fieldState.error && (
                      <Form.Control.Feedback type="invalid">
                        {fieldState.error.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                )}
              />
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              <p className="mt-3 text-center" style={{ fontSize: "2.0rem", fontWeight: "bold" }}>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </Form>

            <Modal show={showModal} onHide={handleCloseModal} centered>
              <Modal.Header closeButton>
                <Modal.Title>Login Status</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalMessage}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
      <div className="cool-text">Welcome to Our Awesome App!</div>
    </div>
  );
};

export default Login;
