import React, { useState } from "react";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast"; // For displaying toast notifications
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const BASE_URL = "http://localhost:5000"; // Update this with your actual base URL

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
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setIsLoading(false);

      if (result.status === "fail") {
        toast.error(result.message);
      } else {
        const { user, access_token } = result;
        localStorage.setItem("accessToken", access_token); 
        setModalMessage("Login successful!");
        setShowModal(true);
        reset();
        setTimeout(() => navigate("/"), 2000); 
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(`An error occurred: ${error.message}`);
      console.error("Login error:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className="wrapper">
      <Container className="login-container">
        {/* <Row className="justify-content-md-center">
          <Col md="6"> */}
            <h2 className="login-heading"> <u>LOGIN</u></h2>
            <Form onSubmit={handleSubmitForm(handleSubmit)}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Form.Group controlId="loginEmail" className="mb-3 input-box" >
                    <Form.Label>Email:</Form.Label>
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <Form.Control
                      type="email"
                      placeholder="Email"
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
                  <Form.Group controlId="loginPassword" className="mb-3 input-box" >
                    <Form.Label>Password:</Form.Label>
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <Form.Control
                      type="password"
                      placeholder="Password"
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
              <div className="remember-forgot" >
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              <p className="mt-3 text-center" >
                Don't have an account? <Link to="/signup">Register</Link>
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
          {/* </Col>
        </Row> */}
      </Container>
      <div className="cool-text">Welcome to Our Awesome App!</div>
    </div>
  );
};

export default Login;
