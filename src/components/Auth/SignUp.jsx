import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
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
    <Container h={"90vh"} >
       <VStack  h={'full'} justifyContent="center">
       <Heading children="Sign Up" />
        <Box display="flex" justifyContent={"center"} my={"4"}>
            <Avatar src={imagePrev} size="2xl"/>
        </Box>
        
      <form onSubmit={submitHndler}  style={{width:"100%"}}>
        <Box my={"4"}>
          <FormLabel htmlFor='Name' children="Name"/>
          <Input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name}  placeholder='Enter your name' />

        </Box>

        <Box my={"4"}>
          <FormLabel htmlFor='Email' children="Email"/>
          <Input type="email"  onChange={(e)=>{setEmail(e.target.value)}} value={email}  placeholder='Enter your email' />

        </Box>

        <Box my={"4"}>
          <FormLabel htmlFor='Password' children="Password"/>
          <Input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}  placeholder='Enter your password' />

        </Box>
        <Box my={"4"}>
        <input type="file" id="upload"  onChange={imagePrevHandler}/>

        </Box>

        <Box my={"4"}>
        <Button fontSize={"sm"} colorScheme={"yellow"} type='submit'>sign up</Button>
        <div>
                Already signed up ? <Link to="/login"><kbd>Login</kbd> </Link> here
            </div>
        </Box>

      </form>
       </VStack>
    </Container>

  )
}

export default SignUp
