import React from "react";
import { Table, Button, Image, Card, Container } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./ViewBoatsPage.css";

const boats = [
  {
    id: 1,
    name: "Ocean Rider",
    type: "Yacht",
    description: "Luxury yacht for family and parties.",
    seatCount: 12,
    yearBuilt: 2018,
    registerNumber: "TN-BOAT-001",
    image: "https://via.placeholder.com/100x60.png?text=Boat+1",
  },
  {
    id: 2,
    name: "Speed Shark",
    type: "Speedboat",
    description: "Fast and furious boat for quick trips.",
    seatCount: 6,
    yearBuilt: 2020,
    registerNumber: "TN-BOAT-002",
    image: "https://via.placeholder.com/100x60.png?text=Boat+2",
  },
];

function ViewBoatsPage() {
  const handleEdit = (id) => console.log("Edit boat", id);
  const handleDelete = (id) => console.log("Delete boat", id);

  return (
    <Container className="py-5">
      <Card className="custom-card shadow-lg border-0 rounded-4">
        <Card.Body>
        <h4 className="section-heading text-center mb-4"> Boats Management</h4>

          <div className="table-responsive">
            <Table responsive hover className="custom-table align-middle text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Seats</th>
                  <th>Year</th>
                  <th>Reg. No</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {boats.map((boat, idx) => (
                  <tr key={boat.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <Image
                        src={boat.image}
                        alt={boat.name}
                        width={90}
                        height={60}
                        rounded
                        className="boat-img"
                      />
                    </td>
                    <td>{boat.name}</td>
                    <td>{boat.type}</td>
                    <td className="text-muted small">{boat.description}</td>
                    <td>{boat.seatCount}</td>
                    <td>{boat.yearBuilt}</td>
                    <td>{boat.registerNumber}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="rounded-pill px-3"
                          onClick={() => handleEdit(boat.id)}
                        >
                          <FaEdit className="me-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="rounded-pill px-3"
                          onClick={() => handleDelete(boat.id)}
                        >
                          <FaTrash className="me-1" />
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ViewBoatsPage;
