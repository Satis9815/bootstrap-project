import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
const ResetPassword = () => {
    const [password, setPassword] = useState('');

    const params = useParams();
    console.log(params.token);
    
    return (
      <Container style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
      <div className='d-flex justify-content-center align-items-center flex-column'>
      <div>
          <h2 className="fs-2 fw-semibold">Update Password</h2>
        </div>
        <div className="d-flex flex-column my-3 w-100 ">
          <input
            type="password"
            onChange={e => {
                setPassword(e.target.value);
            }}
            value={password}
            placeholder="New Password"
            className="border rounded p-2"
          />
        </div>
        <div className="d-flex flex-column  w-100 ">
         <Button type='submit' variant='outline-info'>Change Password</Button>
        </div>
      </div>
      </Container>
    );
}

export default ResetPassword
