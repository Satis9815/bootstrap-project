import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assets/images/learning.jpg';
import Sidebar from '../Dashboard/Sidebar';

const User = () => {
  const users = [
    {
      _id: 'lasjdasjlf',
      name: 'Satis Kumar Chaudhary',
      email: 'satis@gmail.com',
      role: 'user',
      subscription: {
        status: 'active',
      },
    },
  ];

  const updateHandler = id => {
    console.log('Updating the user with id', id);
  };

  const deleteHandler = id => {
    console.log('Deleting the user with id ', id);
  };
  return (
    <Container>
      <Row
        className="my-3"
        style={{ cursor: `url(${cursor}),default`, height: '90vh' }}
      >
        <Col md={10}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Subscription</th>
                <th isNumeric>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id}>
                  <td>#{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    {item.subscription.status === 'active'
                      ? 'active'
                      : 'Not Active'}
                  </td>
                  <td isNumeric>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          updateHandler(item._id);
                        }}
                      >
                        change role
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          deleteHandler(item._id);
                        }}
                        className="mx-2"
                      >
                        <RiDeleteBin7Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={2}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default User;
