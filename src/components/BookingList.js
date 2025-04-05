// components/BookingList.js
import React from 'react';
import { Table, Card } from 'react-bootstrap';

// Mock booking data (later replace with API or state)
const bookings = [
  {
    id: 1,
    user: 'john@example.com',
    boat: 'Sunshine',
    date: '2025-04-10',
    seats: ['A1', 'A2'],
  },
  {
    id: 2,
    user: 'jane@example.com',
    boat: 'Wave Rider',
    date: '2025-04-11',
    seats: ['B1'],
  },
];

function BookingList() {
  return (
    <Card className="container shadow-sm mt-4">
      <Card.Body>
        <h5 className="text-dark fw-bold mb-3">Booking Details</h5>
        <div className="table-responsive">
          <Table striped bordered hover responsive className="text-center">
            <thead className="table-primary">
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Boat</th>
                <th>Date</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.user}</td>
                  <td>{booking.boat}</td>
                  <td>{booking.date}</td>
                  <td>{booking.seats.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BookingList;
