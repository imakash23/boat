import React, { useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShip } from 'react-icons/fa';
import Boat from '../assets/boat.jfif'

const boats = [
  {
    name: 'Sunshine',
    type: 'Catamaran',
    description: 'A luxury cruise boat',
    seatCount: 40,
    yearBuilt: 2015,
    regNo: 'REG12345',
    image: Boat,
  },
  {
    name: 'Wave Rider',
    type: 'Speedboat',
    description: 'Fast and exciting ride',
    seatCount: 20,
    yearBuilt: 2018,
    regNo: 'REG67890',
    image: Boat,
  },
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function BookingCardView() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [formData, setFormData] = useState({
    userName: '',
    seats: '',
    day: '',
    date: '',
    price: '',
  });

  const handleShow = (boat) => {
    setSelectedBoat(boat);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ userName: '', seats: '', day: '', date: '', price: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = () => {
    const { userName, seats, day, date, price } = formData;
    if (!userName || !seats || !day || !date || !price) {
      toast.warning('Please fill all booking details.');
      return;
    }

    console.log('Booking Details:', { ...formData, boat: selectedBoat.name });
    toast.success('Booking Confirmed!');
    handleClose();
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold">Available Boats</h2>
      <Row>
        {boats.map((boat, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Img variant="top" src={boat.image} className="rounded-top-4" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  <FaShip className="me-2" />
                  {boat.name}
                </Card.Title>
                <Card.Text><strong>Type:</strong> {boat.type}</Card.Text>
                <Card.Text><strong>Description:</strong> {boat.description}</Card.Text>
                <Card.Text><strong>Seats:</strong> {boat.seatCount}</Card.Text>
                <Card.Text><strong>Year Built:</strong> {boat.yearBuilt}</Card.Text>
                <Card.Text><strong>Reg No:</strong> {boat.regNo}</Card.Text>
                <Button className="rounded-pill w-100 fw-semibold" variant="primary" onClick={() => handleShow(boat)}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedBoat?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                placeholder="e.g., 2"
                min="1"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Day</Form.Label>
              <div>
                {days.map((day, idx) => (
                  <Form.Check
                    key={idx}
                    inline
                    label={day}
                    name="day"
                    type="radio"
                    value={day}
                    checked={formData.day === day}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price (in ₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., 2000"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleBooking}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookingCardView;