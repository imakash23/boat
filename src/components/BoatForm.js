import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FaShip } from 'react-icons/fa';

function BoatForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    seatCount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, type, seatCount } = formData;

    if (!name || !type || !seatCount) {
      toast.warning('Please fill all fields');
      return;
    }

    if (seatCount <= 0) {
      toast.error('Seat count must be greater than 0');
      return;
    }

    console.log('Boat Created:', formData);
    toast.success('Boat added successfully!');

    setFormData({ name: '', type: '', seatCount: '' });
  };

  return (
    <Card className="container mt-5 shadow-lg border-0 rounded-4 p-3 bg-light bg-gradient">
      <Card.Body>
        <div className="text-center mb-4">
          <FaShip size={36} className="text-primary mb-2" />
          <h4 className="fw-bold text-dark">Add a New Boat</h4>
          <p className="text-muted">Fill in the details below</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">🛥️ Boat Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Ocean Queen"
              className="rounded-pill px-4 py-2 border border-primary-subtle"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">⛵ Boat Type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="e.g., Catamaran"
              className="rounded-pill px-4 py-2 border border-primary-subtle"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">💺 Seat Count</Form.Label>
            <Form.Control
              type="number"
              name="seatCount"
              value={formData.seatCount}
              onChange={handleChange}
              placeholder="Total number of seats"
              className="rounded-pill px-4 py-2 border border-primary-subtle"
              min="1"
              required
            />
          </Form.Group>

          <div className="d-grid">
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
