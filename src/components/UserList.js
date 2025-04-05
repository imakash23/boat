import React, { useEffect, useState } from 'react';
import { Table, Container, Card } from 'react-bootstrap';

const mockUsers = [
  { id: 1, name: "Arjun", email: "arjun@gmail.com", role: "User" },
  { id: 2, name: "Kavya", email: "kavya@gmail.com", role: "User" },
  { id: 3, name: "Admin", email: "admin@boat.com", role: "Admin" },
];

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with real API later
    setUsers(mockUsers);
  }, []);

  return (
    <Container className="py-4">
      <Card className="shadow">
        <Card.Body>
          <h4 className="text-dark fw-bold mb-4">User Details</h4>
          <Table striped bordered hover responsive>
            <thead className="table-primary">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
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
