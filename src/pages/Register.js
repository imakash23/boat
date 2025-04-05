import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      toast.warning('Please fill in all fields');
      return;
    }


    toast.success('Registered Successfully!');
    setFormData({ name: '', email: '', password: '' });

  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100  px-2">
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
          <Card className="shadow-lg p-3 border-0 rounded-4">
            <Card.Body>
              <SectionHeader title="Register" />
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-semibold">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    className="rounded-3"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="rounded-3"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create password"
                    className="rounded-3"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded-pill fw-semibold"
                >
                  Create Account
                </Button>

                <div className="mt-3 text-center">
                  <small className="text-muted">
                    Already registered?{' '}
                    <a href="/login" className="text-primary fw-semibold">Login</a>
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
