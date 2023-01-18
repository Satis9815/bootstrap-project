import React from 'react';
import { Container } from 'react-bootstrap';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ height: '90vh' }}
    >
      <div className='pb-md-2 pb-1'>
        <p>
          <b>Page Not Found</b>
        </p>
      </div>
      <div className='pb-md-3 pb-2'>
        <RiErrorWarningFill className="" style={{ fontSize: '70px' }} />
      </div>
      <div>
        <Link to="/" className=" py-md-2">
          <span>Go to profile</span>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
