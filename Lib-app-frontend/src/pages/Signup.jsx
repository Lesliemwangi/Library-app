import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const BASE_URL = "http://localhost:5000";

const schema = z.object({
  firstname: z
    .string({
      required_error: "First name is required",
    })
    .min(1, "First name must be at least 1 character")
    .max(50, "First name must not exceed 50 characters"),
  lastname: z
    .string({
      required_error: "Last name is required",
    })
    .min(1, "Last name must be at least 1 character")
    .max(50, "Last name must not exceed 50 characters"),
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must not exceed 50 characters"),
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

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.status === "fail") {
        toast.error(data.message);
        setModalMessage(data.message);
      } else {
        toast.success("User registered successfully!");
        setModalMessage("User registered successfully!");
        reset();
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred. Please try again.");
      setModalMessage("An error occurred. Please try again.");
    } finally {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className="form-container">
      <div className="signup-container">
        <h2 className="signup-heading">SIGN UP</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstname"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="signupFirstname" className="input-box">
                <Form.Label>
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  First Name:
                </Form.Label>
                <Form.Control
                  type="text"
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
            name="lastname"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="signupLastname" className="input-box">
                <Form.Label>
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  Last Name:
                </Form.Label>
                <Form.Control
                  type="text"
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
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="signupUsername" className="input-box">
                <Form.Label>
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  Username:
                </Form.Label>
                <Form.Control
                  type="text"
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
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="signupEmail" className="input-box">
                <Form.Label>
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  Email:
                </Form.Label>
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
              <Form.Group controlId="signupPassword" className="input-box">
                <Form.Label>
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  Password:
                </Form.Label>
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
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <p className="register-link mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Registration Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Signup;
