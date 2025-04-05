import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShip, FaChair, FaClipboardList, FaUsers } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";

const adminOptions = [
  { title: "Manage Boats", icon: <FaShip size={30} />, route: "/admin/boats" },
  { title: "Assign Seats", icon: <FaChair size={30} />, route: "/admin/seats" },
  {
    title: "View Bookings",
    icon: <FaClipboardList size={30} />,
    route: "/admin/bookings",
  },
  {
    title: "User Management",
    icon: <FaUsers size={30} />,
    route: "/admin/users",
  },
];

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <SectionHeader title="Admin Dashboard" />

      <Row xs={1} sm={2} md={2} lg={2} className="g-4">
        {adminOptions.map((opt, idx) => (
          <Col key={idx}>
            <Card
              className="text-center h-100 shadow-sm border-0 hover-card"
              onClick={() => navigate(opt.route)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <div className="text-primary mb-3">{opt.icon}</div>
                <Card.Title>{opt.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AdminDashboard;
