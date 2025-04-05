import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionHeader from '../components/SectionHeader';

const mockBoats = ['Sunshine', 'Wave Rider', 'Ocean Breeze'];
const mockSeats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];

function BookingPage() {
  const [selectedBoat, setSelectedBoat] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!selectedBoat || !selectedDate || selectedSeats.length === 0) {
      toast.warning('Please fill all fields and select at least one seat.');
      return;
    }

    console.log({
      boat: selectedBoat,
      date: selectedDate,
      seats: selectedSeats,
    });

    toast.success('Booking Successful!');
    setSelectedSeats([]);
    setSelectedDate('');
    setSelectedBoat('');
  };

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  return (
    <div className="container py-4">
      <Card className="shadow-lg border-0 rounded-4">
        <Card.Body>
             <SectionHeader title="Book Your Boat" />


          <Form onSubmit={handleBooking}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Select Boat</Form.Label>
              <Form.Select
                value={selectedBoat}
                onChange={(e) => setSelectedBoat(e.target.value)}
                className="rounded-3"
                required
              >
                <option value="">-- Choose Boat --</option>
                {mockBoats.map((boat, idx) => (
                  <option key={idx} value={boat}>
                    {boat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Select Date</Form.Label>
              <Form.Control
                type="date"
                min={today}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="rounded-3"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Select Seats</Form.Label>
              <Row>
                {mockSeats.map((seat, idx) => (
                  <Col xs={6} sm={4} md={3} className="mb-2" key={idx}>
                    <Button
                      variant={selectedSeats.includes(seat) ? 'primary' : 'outline-primary'}
                      className="w-100 rounded-pill"
                      onClick={() => toggleSeat(seat)}
                      type="button"
                    >
                      {seat}
                    </Button>
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 rounded-pill fw-semibold">
              Confirm Booking
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookingPage;
