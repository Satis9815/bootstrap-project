import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const UpdatePassword = () => {
  const [oldPassword, setOldPassWord] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <Container className='d-flex justify-content-center align-items-center'  style={{ height: '90vh' }}>
 
          <form>
            <div className='w-100 d-flex justify-content-center align-items-center'>
            <div className="d-flex flex-column ">
              <div className="d-flex flex-column w-100 ">
                <label>Old Password</label>
                <input
                  type="password"
                  onChange={e => {
                    setOldPassWord(e.target.value);
                  }}
                  value={oldPassword}
                  placeholder="old password"
                  className="border rounded p-2"
                />
              </div>
              <div className="d-flex flex-column">
                <label>New Password</label>
                <input
                  type="password"
                  onChange={e => {
                    setNewPassword(e.target.value);
                  }}
                  value={newPassword}
                  placeholder="New Password"
                  className="border rounded p-2"
                />
              </div>

              <div className='my-2'>
                <Button variant="secondary" className="mx-2" type='submit'>
                  updatepassword
                </Button>
              </div>
            </div>
            </div>
          </form>
      
    </Container>
  );
};

export default UpdatePassword;
