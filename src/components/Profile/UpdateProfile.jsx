import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container className='d-flex justify-content-center align-items-center'  style={{ height: '90vh' }}>
 
          <form>
            <div className='w-100 d-flex justify-content-center align-items-center'>
            <div className="d-flex flex-column ">
              <div className="d-flex flex-column w-100 ">
                <label>Name</label>
                <input
                  type="text"
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  value={name}
                  placeholder="Name"
                  className="border rounded p-2"
                />
              </div>
              <div className="d-flex flex-column">
                <label>Email</label>
                <input
                  type="password"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  placeholder="Example@gmail.com"
                  className="border rounded p-2"
                />
              </div>

              <div className='my-2'>
                <Button variant="secondary" className="mx-2" type='submit'>
                  Update Profile
                </Button>
              </div>
            </div>
            </div>
          </form>
      
    </Container>
  );
};


export default UpdateProfile
