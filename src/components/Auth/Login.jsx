
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { login } from '../../redux/actions/userAction';
const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();


    const submitHandler = (e)=>{
      e.preventDefault();
      dispatch(login(email,password));

    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'90vh'}}>
        <h1 className='text-center fs-1 fw-semibold'>Login here</h1>
      <form  onSubmit={submitHandler}>

        <div>
            <div className='d-flex flex-column '>
            <label>Email</label>
            <input type="email"  onChange={(e)=>{setEmail(e.target.value)}} value={email}  placeholder='Enter your email' className='border rounded p-2'/>
            </div>
            <div  className='d-flex flex-column'>
            <label>Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}  placeholder='Enter your password' className='border rounded p-2'/>
            </div>
            <div className='my-3 d-flex  justify-content-between align-items-center'>
                <Button variant='outline-info' type='submit'>Login</Button>
                <Link to="/forgetpassword" className='text-decoration-underline'>Forget Password</Link>
            </div>
            <div>
                New user? <Link to="/signup"><kbd>sign up</kbd> </Link> here
            </div>
        </div>

      </form>
    </div>

  )
}

export default Login
