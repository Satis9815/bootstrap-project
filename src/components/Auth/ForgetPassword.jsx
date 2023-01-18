import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
    <div className='d-flex justify-content-center align-items-center flex-column'>
    <div>
        <h2 className="fs-2 fw-semibold">Forget Password</h2>
      </div>
      <div className="d-flex flex-column my-3 w-100 ">
        <input
          type="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="example@gmail.com"
          className="border rounded p-2"
        />
      </div>
      <div className="d-flex flex-column  w-100 ">
       <Button type='submit' variant='outline-info'>send reset link</Button>
      </div>
    </div>
    </Container>
  );
};

export default ForgetPassword;
