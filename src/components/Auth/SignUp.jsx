import { Avatar, Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { signup } from '../../redux/actions/userAction';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [imagePrev,setImagePrev] = useState('');
    const [image,setImage] = useState('');

    const dispatch = useDispatch();

    const imagePrevHandler=(e)=>{

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = ()=>{
            setImagePrev(reader.result);
            setImage(file);
        }


    }

    const submitHndler =(e)=>{
      e.preventDefault();
      const myForm = new FormData();

      myForm.append("name",name);
      myForm.append("email",email);
      myForm.append("password",password);
      myForm.append("file",image);

      dispatch(signup(myForm));

    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'90vh'}}>
        <h1 className='text-center fs-1 fw-semibold'>Sign Up</h1>
        <Box display="flex" justifyContent={"center"} my={"4"}>
            <Avatar src={imagePrev} size="2xl"/>
        </Box>
        
      <form onSubmit={submitHndler} >
        <div>
        <div className='d-flex flex-column '>
            <label>Name</label>
            <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name}  placeholder='Enter your name' className='border rounded p-2'/>
            </div>
            <div className='d-flex flex-column '>
            <label>Email</label>
            <input type="email"  onChange={(e)=>{setEmail(e.target.value)}} value={email}  placeholder='Enter your email' className='border rounded p-2'/>
            </div>
            <div  className='d-flex flex-column'>
            <label>Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}  placeholder='Enter your password' className='border rounded p-2'/>
            </div>
            <div  className='d-flex flex-column my-2'>
            <label >
                <span className="" aria-hidden="true">choose file</span>
                <input type="file" id="upload" style={{display:"none"}} onChange={imagePrevHandler}/>
            </label>
            </div>
            <div className='my-3 d-flex  justify-content-between align-items-center'>
                <Button variant='outline-info' type='submit'>sign up</Button>
            </div>
            <div>
                Already signed up ? <Link to="/login"><kbd>Login</kbd> </Link> here
            </div>
        </div>

      </form>
    </div>

  )
}

export default SignUp
