import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    age: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      number,
      age,
      address,
      username,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !email ||
      !number ||
      !age ||
      !address ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      toast.warning('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    toast.success('Registered Successfully!');
    setFormData({
      name: '',
      email: '',
      number: '',
      age: '',
      address: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 px-2">
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={10} className="mx-auto">
          <Card className="shadow-lg p-3 border-0 rounded-4">
            <Card.Body>
              <SectionHeader title="Register" />
              <Form onSubmit={handleRegister}>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      className="rounded-3"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="rounded-3"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Mobile Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter number"
                      className="rounded-3"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Age</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter age"
                      className="rounded-3"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      className="rounded-3"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Choose username"
                      className="rounded-3"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create password"
                      className="rounded-3"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter password"
                      className="rounded-3"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded-pill fw-semibold mt-3"
                >
                  Create Account
                </Button>

                <div className="mt-3 text-center">
                  <small className="text-muted">
                    Already registered?{' '}
                    <a href="/login" className="text-primary fw-semibold">
                      Login
                    </a>
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

export default Register;
