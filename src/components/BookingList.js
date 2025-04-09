import React, { useEffect, useState } from "react";
import { Table, Card, Container } from "react-bootstrap";
import "../pages/ViewBoatsPage.css";

const mockBookings = [
  {
    id: 1,
    userName: "john@example.com",
    seats: ["A1", "A2"],
    day: "Thursday",
    date: "2025-04-10",
    price: "₹500",
  },
  {
    id: 2,
    userName: "jane@example.com",
    seats: ["B1"],
    day: "Friday",
    date: "2025-04-11",
    price: "₹300",
  },
];

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(mockBookings);
  }, []);

  return (
    <Container className="py-5">
      <Card className="custom-card shadow-lg border-0 rounded-4">
        <Card.Body>
          <h4 className="section-heading text-center mb-4">Booking Details</h4>
          <Table responsive hover className="custom-table align-middle text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Seats</th>
                <th>Day</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, idx) => (
                <tr key={booking.id}>
                  <td>{idx + 1}</td>
                  <td>{booking.userName}</td>
                  <td>{booking.seats.join(", ")}</td>
                  <td>{booking.day}</td>
                  <td>{booking.date}</td>
                  <td className="fw-bold text-success">{booking.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BookingList;
