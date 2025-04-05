
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning("Please enter both email and password");
      return;
    }
    if (email === "admin@boat.com" && password === "admin123") {
      toast.success("Login successful!");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100  px-2">
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
          <Card className="shadow-lg p-3 border-0 rounded-4">
            <Card.Body>
              <SectionHeader title="Login" />
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="rounded-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="rounded-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded-pill fw-semibold"
                >
                  Login
                </Button>

                <div className="mt-3 text-center">
                  <small className="text-muted">
                    Don't have an account?{" "}
                    <a href="/register" className="text-primary fw-semibold">Register</a>
                  </small>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
