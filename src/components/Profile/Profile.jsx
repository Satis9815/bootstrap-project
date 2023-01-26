import { Avatar, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChangePhoto from './ChangePhoto';

const Profile = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const removeFromPlaylistHandler = (id)=>{
        console.log("removed");
    }

    const chnageImageSubmitHandler =(e,image)=>{
        e.preventDefault();
        console.log(image);

    }

  return (
    <Container>
      <Row className="" >
        <Row>
          <h2 className="fs-2 fw-semibold">Profile</h2>
        </Row>
        <Row>
          <div className="d-flex  ">
            <div>
              <div>
                {' '}
                <Avatar boxSize={'48'} src={user.avatar.url}/>
                <div className="my-2 ">
                  <Button onClick={onOpen} variant="secondary">Change Photo</Button>
                </div>
              </div>
            </div>
            <div className="mx-2">
              <p>Name:{user.name}</p>
              <p>Email:{user.email}</p>
              <p>createdAt:{user.createdAt.split('T')[0]}</p>
              {user.role !== 'admin' && (
                <p>
                  Subscription:
                  { user.subscription && user.subscription.status === 'active' ? (
                    <>
                      <Button variant="secondary">Cancel subscription</Button>
                    </>
                  ) : (
                    <>
                      <Link to="/subscribe">
                        <Button variant="secondary">subscribe</Button>
                      </Link>
                    </>
                  )}{' '}
                </p>
              )}
              <div className="my-2">
                <Link to="/changeprofile">
                  <Button variant="secondary">Change profile</Button>
                </Link>
                <Link to="/updatepassword">
                  <Button variant="secondary" className="mx-2">
                    updatepassword
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <h1>Your Playlist </h1>
          </div>
          <div>
            {user.playlist.length > 0 && (
              <Row lg={3} md={2} xs={1}>
                {user.playlist.map((item, index) => (
                  <Col key={index} className="my-3">
                    <Card className="bg-transparent h-100">
                      <Card.Body>
                        <div>
                          <img
                            src={item.poster}
                            alt="pic"
                            style={{
                              objectFit: 'cover',
                              height: '200px',
                              width: '100%',
                            }}
                          />
                        </div>
                        <div>
                          <Card.Title>{'title'}</Card.Title>
                        </div>
                      </Card.Body>
                      <div className='d-flex justify-content-between'>
                        <Link to={`/courses/${item.courses}`}>
                          <Button variant="outline-info">Watch now</Button>
                        </Link>
                        <div><Button variant='outline-info' onClick={()=>{removeFromPlaylistHandler(item.courses)}}>remove from playlist</Button></div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Row>
        <Row>
            <ChangePhoto isOpen={isOpen} onClose={onClose} chnageImageSubmitHandler={chnageImageSubmitHandler}/>
        </Row>
      </Row>
    </Container>
  );
};

export default Profile;
