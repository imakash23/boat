import React, { useEffect, useState } from "react";
import { Table, Container, Card } from "react-bootstrap";
import "../pages/ViewBoatsPage.css";

const mockUsers = [
  {
    id: 1,
    name: "Arjun",
    email: "arjun@gmail.com",
    number: "9876543210",
    age: 28,
    address: "Chennai",
    username: "arjun28",

  },
  {
    id: 2,
    name: "Kavya",
    email: "kavya@gmail.com",
    number: "9876501234",
    age: 25,
    address: "Coimbatore",
    username: "kavya25",

  },
  {
    id: 3,
    name: "Admin",
    email: "admin@boat.com",
    number: "1234567890",
    age: 35,
    address: "Head Office",
    username: "admin",

  },
];

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  return (
    <Container className="py-5">
      <Card className="custom-card shadow-lg border-0 rounded-4">
        <Card.Body>
          <h4 className="section-heading text-center mb-4">User Management</h4>
          <Table responsive hover className="custom-table align-middle">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Address</th>
                <th>Username</th>
                
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>{user.username}</td>
                
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserList;
