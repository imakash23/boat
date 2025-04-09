import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FaShip } from 'react-icons/fa';

function BoatForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    seatCount: '',
    yearBuilt: '',
    registerNumber: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      type,
      description,
      seatCount,
      yearBuilt,
      registerNumber,
      image,
    } = formData;

    if (!name || !type || !description || !seatCount || !yearBuilt || !registerNumber || !image) {
      toast.warning('Please fill all fields');
      return;
    }

    if (seatCount <= 0) {
      toast.error('Seat count must be greater than 0');
      return;
    }

    console.log('Boat Created:', formData);
    toast.success('Boat added successfully!');

    setFormData({
      name: '',
      type: '',
      description: '',
      seatCount: '',
      yearBuilt: '',
      registerNumber: '',
      image: null,
    });
  };

  return (
    <Card className="container mt-5 shadow-lg border-0 rounded-4 p-4 bg-light bg-gradient">
      <Card.Body>
        <div className="text-center mb-4">
          <FaShip size={36} className="text-primary mb-2" />
          <h4 className="fw-bold text-dark">Add a New Boat</h4>
          <p className="text-muted">Fill in the details below</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">🛥️ Boat Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Ocean Queen"
                  className="rounded-3"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">⛵ Boat Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="e.g., Catamaran"
                  className="rounded-3"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">🛡️ Register Number</Form.Label>
                <Form.Control
                  type="text"
                  name="registerNumber"
                  value={formData.registerNumber}
                  onChange={handleChange}
                  placeholder="e.g., TN-07-1234"
                  className="rounded-3"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">📅 Year Built</Form.Label>
                <Form.Control
                  type="number"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                  placeholder="e.g., 2020"
                  className="rounded-3"
                  min="1900"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">💺 Seat Count</Form.Label>
                <Form.Control
                  type="number"
                  name="seatCount"
                  value={formData.seatCount}
                  onChange={handleChange}
                  placeholder="e.g., 20"
                  className="rounded-3"
                  min="1"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">📷 Boat Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="rounded-3"
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group>
                <Form.Label className="fw-semibold">📝 Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Short description about the boat"
                  className="rounded-3"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-grid mt-4">
            <Button
              variant="primary"
              type="submit"
              className="rounded-pill fw-semibold py-2"
            >
              ➕ Add Boat
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default BoatForm;
